export interface Address {
    streetNumber: string;
    streetName: string;
    zipCode: string;
    city: string;
    state: string;
}

export class AddressRow {
    constructor(public number: number, public name: string){}
}
