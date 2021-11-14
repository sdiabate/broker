export interface Identity {
    firstname?: string;
    lastname?: string;
}

export interface User extends Identity {
    id?: string;
    login?: string;
}