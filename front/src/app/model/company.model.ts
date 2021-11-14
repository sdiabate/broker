import { Address } from "../shared/model/address.model";
import { Appointment } from "./appointment.model";
import { Document } from "./document.model";

export interface Company {
    id?: string;
    siret?: string;
    name?: string;
    email?: string;
    phones?: string[];
    fax?: string;
    address?: Address;
    registrationDate?: Date;
    activity?: string;
    interlocutor?: string;
    interlocutorRole?: string;
    employeesCount?: number;
    documents?: Document[];
    appointments?: Appointment[];
}