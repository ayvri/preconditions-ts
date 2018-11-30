import {
  DataSource,
  TypeValidator,
  optionalOfType,
  requiredOfType,
  isNumber,
  isString,
  isBoolean,
  isArray,
} from './core';

export const optionalNumber = (d: DataSource, key: string) => optionalOfType(d, key, isNumber);
export const optionalString = (d: DataSource, key: string) => optionalOfType(d, key, isString);
export const optionalBoolean = (d: DataSource, key: string) => optionalOfType(d, key, isBoolean);
export const optionalArray = (d: DataSource, key: string) => optionalOfType(d, key, isArray);

export const requiredNumber = (d: DataSource, key: string) => requiredOfType(d, key, isNumber);
export const requiredString = (d: DataSource, key: string) => requiredOfType(d, key, isString);
export const requiredBoolean = (d: DataSource, key: string) => requiredOfType(d, key, isBoolean);
export const requiredArray = (d: DataSource, key: string) => requiredOfType(d, key, isArray);
