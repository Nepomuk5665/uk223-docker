import React, { useEffect, useState } from 'react';
import { EventDTO } from '../../../types/models/Event.model';
import * as eventApi from '../../api/eventApi';
import { Link } from 'react-router-dom';

const EventList: React.FC = () => {
    const [events, setEvents] = useState<EventDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        eventApi.getAllEvents()
            .then(setEvents)
            .catch(() => setError('Error loading events'))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading Events...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Events</h1>
            <Link to="/events/create">+ Create new event</Link>

            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>
                            {event.name} ({new Date(event.eventDate).toLocaleDateString()})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
