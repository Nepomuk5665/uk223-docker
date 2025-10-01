import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventForm from './EventForm';
import * as eventApi from '../../api/eventApi';
import { EventCreateDTO } from '../../../types/models/Event.model';

const EventCreatePage: React.FC = () => {
    const navigate = useNavigate();

    const handleCreate = async (data: EventCreateDTO) => {
        try {
            await eventApi.createEvent(data);
            navigate('/events');  // After creation goes to:
        } catch (error) {
            console.error('Error creating event:', error);
            alert('Error creating event');
        }
    };

    return (
        <div>
            <h1>Create new event</h1>
            <EventForm onSubmit={handleCreate} />
        </div>
    );
};

export default EventCreatePage;
