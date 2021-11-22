import { Document } from "./document.model";
import { Param, ParamValue } from './misc.model';

export interface Contract {
    id?: string;
    number?: string;
    label?: string;
    billingCycle?: 'MOUNTH' | 'YEAR';
    date?: Date;
    validated?: boolean;
    offer?: string;
    provider?: string;
    type?: ContractType;
    itemData?: ContractItemData[];
    documents?: Document[];
}

export interface ContractItemData {
    id?: string;
    item?: ContractItem;
    values?: ParamValue[];
}

export interface ContractCategory {
    id?: string;
    label: string;
    contractTypes: ContractType[];
}

export interface ContractType {
    id?: string;
    label?: string;
    items?: ContractItem[];
    warranties?: Warranty[];
}

export interface ContractItem {
    id?: string;
    label?: string;
    params?: Param[];
    multi?: boolean; // Conducteur secondaire (firstname, lastname, etc.)
}

export interface Warranty {
    id?: string;
    label?: string;
    farnchise?: number;
}
