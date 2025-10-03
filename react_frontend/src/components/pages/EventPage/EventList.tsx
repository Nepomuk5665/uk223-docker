import React, { useEffect, useState } from 'react';
import { EventDTO } from '../../../types/models/Event.model';
import * as eventApi from '../../api/eventApi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCard from '../../atoms/AnimatedCard';
import AnimatedButton from '../../atoms/AnimatedButton';
import LoadingSpinner from '../../atoms/LoadingSpinner';

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

    if (loading) return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LoadingSpinner />
        </div>
    );

    if (error) return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: '#ef4444', fontSize: '1.2rem' }}>{error}</div>
        </div>
    );

    return (
        <div style={{ minHeight: '100vh', padding: '40px 20px' }} data-testid="event-list-page">
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-gradient"
                        style={{ fontSize: '3rem', fontWeight: 900, margin: 0 }}
                    >
                        Events
                    </motion.h1>

                    <Link to="/events/create" style={{ textDecoration: 'none' }}>
                        <AnimatedButton data-testid="events-create-button">
                            + Create Event
                        </AnimatedButton>
                    </Link>
                </div>

                {events.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ textAlign: 'center', padding: '60px 20px' }}
                    >
                        <div style={{ fontSize: '4rem', marginBottom: '20px', opacity: 0.3 }}>📅</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#a1a1aa' }}>
                            No events yet
                        </h3>
                        <p style={{ color: '#71717a' }}>Create your first event to get started!</p>
                    </motion.div>
                ) : (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                            gap: '30px'
                        }}
                    >
                        {events.map((event, index) => (
                            <Link
                                key={event.id}
                                to={`/events/${event.id}`}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                                data-testid={`event-card-${event.id}`}
                            >
                                <AnimatedCard delay={index * 0.1}>
                                    <div style={{ marginBottom: '16px' }}>
                                        <h3
                                            style={{
                                                fontSize: '1.5rem',
                                                fontWeight: 700,
                                                marginBottom: '8px',
                                                color: '#fff',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}
                                        >
                                            {event.name}
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a1a1aa', fontSize: '0.875rem' }}>
                                            <span>📍</span>
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                            <span>📅</span>
                                            <span style={{ color: '#8b5cf6', fontWeight: 600 }}>
                                                {new Date(event.eventDate).toLocaleDateString()}
                                            </span>
                                            <span style={{ color: '#06b6d4' }}>
                                                {new Date(event.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        </div>

                                        {event.description && (
                                            <p
                                                style={{
                                                    color: '#a1a1aa',
                                                    fontSize: '0.875rem',
                                                    lineHeight: 1.5,
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                {event.description}
                                            </p>
                                        )}
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <span>👤</span>
                                            <span style={{ color: '#a1a1aa', fontSize: '0.875rem' }}>
                                                {event.creator?.firstName} {event.creator?.lastName}
                                            </span>
                                        </div>
                                        {event.participants && event.participants.length > 0 && (
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginLeft: 'auto' }}>
                                                <span>👥</span>
                                                <span style={{ color: '#06b6d4', fontSize: '0.875rem', fontWeight: 600 }}>
                                                    {event.participants.length}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </AnimatedCard>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventList;
