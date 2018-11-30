declare type CheckedType = string | number | boolean | [];
declare type Maybe<T extends CheckedType> = T | undefined | null;
declare type TypeValidator<T extends CheckedType> = (val: any) => val is T;
declare type DataSource = {
    [key: string]: any;
};
export declare type Validator = TypeValidator<CheckedType>;
export declare const Type: {
    [key: string]: Validator;
};
export declare function optional<T extends CheckedType>(d: DataSource, key: string, validator: TypeValidator<T>): Maybe<T>;
export declare function required<T extends CheckedType>(d: DataSource, key: string, validator: TypeValidator<T>): T;
export declare const optionalNumber: (d: DataSource, key: string) => number;
export declare const requiredNumber: (d: DataSource, key: string) => number;
export {};
