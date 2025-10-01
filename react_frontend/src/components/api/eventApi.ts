// src/api/eventApi.ts

import api from '../../config/Api';
import { EventDTO, EventCreateDTO } from '../../types/models/Event.model';
import { User } from '../../types/models/User.model';  // korrekter Pfad zu deinem User-Typ
import { AxiosResponse } from 'axios';

export const createEvent = async (data: EventCreateDTO): Promise<EventDTO> => {
    const response: AxiosResponse<EventDTO> = await api.post('/events', data);
    return response.data;
};

export const updateEvent = async (id: string, data: Partial<EventDTO>): Promise<EventDTO> => {
    const response: AxiosResponse<EventDTO> = await api.put(`/events/${id}`, data);
    return response.data;
};

export const addParticipant = async (eventId: string, userId: string): Promise<EventDTO> => {
    const response: AxiosResponse<EventDTO> = await api.post(`/events/${eventId}/participants/${userId}`);
    return response.data;
};

export const removeParticipant = async (eventId: string, userId: string): Promise<void> => {
    await api.delete(`/events/${eventId}/participants/${userId}`);
};

export const getEventById = async (id: string): Promise<EventDTO> => {
    const response: AxiosResponse<EventDTO> = await api.get(`/events/${id}`);
    return response.data;
};

export const getAllEvents = async (): Promise<EventDTO[]> => {
    const response: AxiosResponse<EventDTO[]> = await api.get('/events');
    return response.data;
};

export const getMyEvents = async (): Promise<EventDTO[]> => {
    const response: AxiosResponse<EventDTO[]> = await api.get('/events/my');
    return response.data;
};

export const getParticipants = async (
    eventId: string,
    page: number = 0,
    size: number = 10
): Promise<{
    content: User[];
    totalPages: number;
    totalElements: number;
}> => {
    const response = await api.get(`/events/${eventId}/participants`, {
        params: { page, size },
    });

    return {
        content: response.data.content,
        totalPages: response.data.totalPages,
        totalElements: response.data.totalElements,
    };
};

export const deleteEvent = async (id: string): Promise<void> => {
    await api.delete(`/events/${id}`);
};

const eventApi = {
    createEvent,
    updateEvent,
    addParticipant,
    removeParticipant,
    getEventById,
    getAllEvents,
    getMyEvents,
    getParticipants,
    deleteEvent,
};

export default eventApi;
