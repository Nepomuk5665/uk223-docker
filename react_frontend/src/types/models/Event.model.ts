import { User } from './User.model';

export type EventDTO = {
    id: string;
    name: string;
    location: string;
    eventDate: string; // ISO String
    description?: string;
    creator: User;
    participants: User[];
};

export type EventCreateDTO = {
    name: string;
    location: string;
    eventDate: string; // ISO String
    description?: string;
    participantIds?: string[];
};
