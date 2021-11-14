export interface Param {
    id?: string;
    name?: string;
    type?: 'TEXT' | 'DATE' | 'TIME' | 'DATE_TIME' | 'BOOL' | 'NUMBER' | 'LIST';
    constraint?: Constraint;
    filterable: boolean;
    columnDisplay: boolean;
}

export interface Constraint {
    min: number;
    max: number;
    minLength: number;
    maxLength: number;
    pattern: string;
    list: string[];
}

export interface ParamValue {
    param: Param;
    value?: any;
}
