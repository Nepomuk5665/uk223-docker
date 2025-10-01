import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EventDTO } from '../../../types/models/Event.model';
import * as eventApi from '../../api/eventApi';
import ActiveUserContext from '../../../Contexts/ActiveUserContext';
import authorities from '../../../config/Authorities';
import UserService from '../../../Services/UserService';
import { User } from '../../../types/models/User.model';

const EventDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { user } = useContext(ActiveUserContext);
    const [event, setEvent] = useState<EventDTO | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingEvent, setEditingEvent] = useState<EventDTO | null>(null);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<string>('');

    // Pagination state
    const [participants, setParticipants] = useState<User[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [loadingParticipants, setLoadingParticipants] = useState(false);

    const hasAuthority = (authorityName: string): boolean => {
        return user?.roles?.some(role =>
            role.authorities?.some(auth => auth.name === authorityName)
        ) ?? false;
    };

    useEffect(() => {
        if (!id) return;

        eventApi.getEventById(id)
            .then(setEvent)
            .catch(() => setError('Event konnte nicht geladen werden'))
            .finally(() => setLoading(false));
    }, [id]);

    // Load participants with pagination
    useEffect(() => {
        if (!id || !event) return;

        setLoadingParticipants(true);
        eventApi.getParticipants(id, currentPage, pageSize)
            .then(data => {
                setParticipants(data.content);
                setTotalPages(data.totalPages);
                setTotalElements(data.totalElements);
            })
            .catch(console.error)
            .finally(() => setLoadingParticipants(false));
    }, [id, event, currentPage, pageSize]);

    useEffect(() => {
        if (event && user && canModify() && !allUsers.length) {
            UserService.getUsersForEvents()
                .then(res => setAllUsers(res.data))
                .catch(console.error);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [event, user]);

    const isCreator = () => event?.creator.id === user?.id;
    const canModify = () => isCreator() || hasAuthority(authorities.EVENT_MODIFY);
    const canDelete = () => isCreator() || hasAuthority(authorities.EVENT_DELETE);

    const handleEdit = () => {
        if (!event) return;
        setEditingEvent({
            id: event.id,
            name: event.name,
            location: event.location,
            eventDate: event.eventDate,
            description: event.description
        } as EventDTO);
        setIsEditing(true);
    };

    const handleSave = async () => {
        if (!editingEvent || !id) return;
        try {
            // Only send the fields that can be updated, exclude nested objects
            const updatePayload = {
                id: editingEvent.id,
                name: editingEvent.name,
                location: editingEvent.location,
                eventDate: editingEvent.eventDate,
                description: editingEvent.description
            };
            const updated = await eventApi.updateEvent(id, updatePayload);
            setEvent(updated);
            setIsEditing(false);
            setEditingEvent(null);
        } catch (err: any) {
            alert(err.response?.data?.message || 'Error updating event');
        }
    };

    const handleDelete = async () => {
        if (!id || !window.confirm('Delete this event?')) return;
        try {
            await eventApi.deleteEvent(id);
            navigate('/events');
        } catch (err) {
            alert('Error deleting event');
        }
    };

    const handleAddParticipant = async () => {
        if (!id || !selectedUserId) return;
        try {
            const updated = await eventApi.addParticipant(id, selectedUserId);
            setEvent(updated);
            setSelectedUserId('');
            // Reload participants to show the new one
            const data = await eventApi.getParticipants(id, currentPage, pageSize);
            setParticipants(data.content);
            setTotalElements(data.totalElements);
        } catch (err: any) {
            alert(err.response?.data?.message || 'Cannot add participant');
        }
    };

    const handleRemoveParticipant = async (userId: string) => {
        if (!id) return;
        try {
            await eventApi.removeParticipant(id, userId);
            // Reload current page of participants
            const data = await eventApi.getParticipants(id, currentPage, pageSize);
            setParticipants(data.content);
            setTotalElements(data.totalElements);
            setTotalPages(data.totalPages);
            // If current page is empty and not first page, go to previous page
            if (data.content.length === 0 && currentPage > 0) {
                setCurrentPage(prev => prev - 1);
            }
            // Update event participant count
            setEvent(prev => prev ? {...prev, participants: prev.participants.filter(p => p.id !== userId)} : null);
        } catch (err) {
            alert('Error removing participant');
        }
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 0 && newPage < totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handlePageSizeChange = (newSize: number) => {
        setPageSize(newSize);
        setCurrentPage(0); // Reset to first page when changing page size
    };

    if (loading) return <div>Lade Event...</div>;
    if (error) return <div>{error}</div>;
    if (!event) return <div>Kein Event gefunden</div>;

    const availableUsers = allUsers.filter(u =>
        u.id !== event.creator.id &&  // Creator cannot be participant
        !participants.some(p => p.id === u.id) &&  // Not already a participant
        !u.roles.some(r => r.name === 'ADMIN')  // Admins cannot be participants (UC5)
    );

    return (
        <div>
            <h1>
                {isEditing && editingEvent ? (
                    <input
                        value={editingEvent.name}
                        onChange={(e) => setEditingEvent({...editingEvent, name: e.target.value})}
                    />
                ) : (
                    event.name
                )}
            </h1>
            <p>Datum:
                {isEditing && editingEvent ? (
                    <input
                        type="datetime-local"
                        min={new Date().toISOString().slice(0, 16)}
                        value={editingEvent.eventDate.slice(0, 16)}
                        onChange={(e) => setEditingEvent({...editingEvent, eventDate: e.target.value + ':00'})}
                    />
                ) : (
                    new Date(event.eventDate).toLocaleString()
                )}
            </p>
            <p>Ort:
                {isEditing && editingEvent ? (
                    <input
                        value={editingEvent.location}
                        onChange={(e) => setEditingEvent({...editingEvent, location: e.target.value})}
                    />
                ) : (
                    event.location
                )}
            </p>
            <p>Beschreibung:
                {isEditing && editingEvent ? (
                    <textarea
                        value={editingEvent.description || ''}
                        onChange={(e) => setEditingEvent({...editingEvent, description: e.target.value})}
                    />
                ) : (
                    event.description
                )}
            </p>

            {canModify() && (
                <div>
                    {isEditing ? (
                        <>
                            <button onClick={handleSave}>Save</button>
                            <button onClick={() => {setIsEditing(false); setEditingEvent(null);}}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <button onClick={handleEdit}>Edit</button>
                            {canDelete() && <button onClick={handleDelete}>Delete</button>}
                        </>
                    )}
                </div>
            )}

            <h3>Event Creator</h3>
            <p>{event.creator.firstName} {event.creator.lastName} ({event.creator.email})</p>

            <h3>Participants ({totalElements})</h3>

            {canModify() && (
                <div style={{ marginBottom: '10px' }}>
                    {allUsers.length === 0 ? (
                        <p>Loading users...</p>
                    ) : availableUsers.length > 0 ? (
                        <div>
                            <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
                                <option value="">Select user to add...</option>
                                {availableUsers.map(u => (
                                    <option key={u.id} value={u.id}>
                                        {u.firstName} {u.lastName} ({u.email})
                                    </option>
                                ))}
                            </select>
                            <button onClick={handleAddParticipant} disabled={!selectedUserId}> Add Participant</button>
                        </div>
                    ) : (
                        <p style={{ fontStyle: 'italic' }}>No eligible users to add (admins and creator cannot be participants)</p>
                    )}
                </div>
            )}

            {loadingParticipants ? (
                <p>Loading participants...</p>
            ) : participants.length > 0 ? (
                <>
                    <ul>
                        {participants.map(participant => (
                            <li key={participant.id} style={{ marginBottom: '5px' }}>
                                {participant.firstName} {participant.lastName} ({participant.email})
                                {canModify() && (
                                    <button
                                        onClick={() => handleRemoveParticipant(participant.id)}
                                        style={{ marginLeft: '10px', fontSize: '12px' }}
                                    >
                                        Remove
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Pagination Controls - No Styling */}
                    <div>
                        <button
                            onClick={() => handlePageChange(0)}
                            disabled={currentPage === 0}
                        >
                            First
                        </button>
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 0}
                        >
                            Previous
                        </button>
                        <span>
                            Page {currentPage + 1} of {totalPages}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage >= totalPages - 1}
                        >
                            Next
                        </button>
                        <button
                            onClick={() => handlePageChange(totalPages - 1)}
                            disabled={currentPage >= totalPages - 1}
                        >
                            Last
                        </button>
                        <select
                            value={pageSize}
                            onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                        >
                            <option value={5}>5 per page</option>
                            <option value={10}>10 per page</option>
                            <option value={20}>20 per page</option>
                            <option value={50}>50 per page</option>
                        </select>
                    </div>
                </>
            ) : (
                <p>No participants yet</p>
            )}
        </div>
    );
};

export default EventDetail;
