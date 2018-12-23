declare type CheckedType = string | number | boolean | [];
declare type Maybe<T extends CheckedType> = T | undefined | null;
export declare type TypeValidator<T extends CheckedType> = (val: any) => val is T;
export declare type DataSource = {
    [key: string]: any;
};
export declare type Validator = TypeValidator<CheckedType>;
export declare const isNumber: TypeValidator<number>;
export declare const isString: TypeValidator<string>;
export declare const isBoolean: TypeValidator<boolean>;
export declare const isArray: TypeValidator<[]>;
export declare const Type: {
    [key: string]: Validator;
};
export declare function optionalOfType<T extends CheckedType>(d: DataSource, key: string, validator: TypeValidator<T>, errorMessage?: string): Maybe<T>;
export declare function requiredOfType<T extends CheckedType>(d: DataSource, key: string, validator: TypeValidator<T>, errorMessage?: string): T;
export {};
