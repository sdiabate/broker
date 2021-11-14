import { Appointment } from './appointment.model';
import { Contract } from './contract.model';
import { Document } from './document.model';
import { Address } from "../shared/model/address.model";
import { Identity, User } from "./user.model";

export interface Customer {
    id: string;
    code: string;
    email: string;
    address: Address;
    phones: string[];
    registrationDate: Date;
    validated: boolean;
    trader: User;
    person: Person;
    corporation: Corporation;
    contracts: Contract[];
    appointments: Appointment[];
    documents: Document[];
}

export interface Person extends Identity {
    gender: Gender;
    birthdate: Date;
    relationships: FamilyMember[];
}

export interface FamilyMember extends Identity {
    gender?: Gender;
    birthdate?: Date;
    relationship?: Relationship;
}

export interface Corporation {
    siret: string;
    name: string;
    creationDate: string;
}

export enum Gender {
    Male,
    Female
}

export enum Relationship {
    Child,
    partner,
    Parent
}
