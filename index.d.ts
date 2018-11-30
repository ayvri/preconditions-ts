import { DataSource } from './core';
export declare const optionalNumber: (d: DataSource, key: string) => number | null | undefined;
export declare const optionalString: (d: DataSource, key: string) => string | null | undefined;
export declare const optionalBoolean: (d: DataSource, key: string) => boolean | null | undefined;
export declare const optionalArray: (d: DataSource, key: string) => [] | null | undefined;
export declare const requiredNumber: (d: DataSource, key: string) => number;
export declare const requiredString: (d: DataSource, key: string) => string;
export declare const requiredBoolean: (d: DataSource, key: string) => boolean;
export declare const requiredArray: (d: DataSource, key: string) => [];
