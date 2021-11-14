import { Document } from "./document.model";
import { User } from "./user.model";

export interface Appointment {
    id: string;
    date: Date;
    direction: 'IN' | 'OUT';
    type: 'MAIL' | 'PHONE' | 'PHYSICAL';
    subject: string;
    body: string;
    host: User;
    duration: number;
    attachments: Document[];
}