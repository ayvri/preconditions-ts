import {
  DataSource,
  optional as coreOptional,
  required as coreRequired,
  optionalOfType,
  requiredOfType,
  isNumber,
  isString,
  isBoolean,
  isArray,
} from './core';

export const optionalNumber = (
  value: any,
  errorMessage?: string
) => coreOptional(value, isNumber, errorMessage);

export const optionalString = (
  value: any,
  errorMessage?: string
) => coreOptional(value, isString, errorMessage);

export const optionalBoolean = (
  value: any,
  errorMessage?: string
) => coreOptional(value, isBoolean, errorMessage);

export const optionalArray = (
  value: any,
  errorMessage?: string
) => coreOptional(value, isArray, errorMessage);

export const optionalNumberFrom = <DS = DataSource>(
  d: DS,
  key: keyof DS,
  errorMessage?: string
) => optionalOfType<number, DS>(d, key, isNumber, errorMessage);

export const optionalStringFrom = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => optionalOfType(d, key, isString, errorMessage);

export const optionalBooleanFrom = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => optionalOfType(d, key, isBoolean, errorMessage);

export const optionalArrayFrom = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => optionalOfType(d, key, isArray, errorMessage);

export const required = <T>(
  value?: any,
  errorMessage?: string,
): T => {
  if (value == null) {
    throw new Error(errorMessage || 'value required');
  }

  return value;
}

export const requiredNumber = (
  value: any,
  errorMessage?: string
) => coreRequired(value, isNumber, errorMessage);

export const requiredString = (
  value: any,
  errorMessage?: string
) => coreRequired(value, isString, errorMessage);

export const requiredBoolean = (
  value: any,
  errorMessage?: string
) => coreRequired(value, isBoolean, errorMessage);

export const requiredArray = (
  value: any,
  errorMessage?: string
) => coreRequired(value, isArray, errorMessage);

export const requiredNumberFrom = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => requiredOfType(d, key, isNumber, errorMessage);

export const requiredStringFrom = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => requiredOfType(d, key, isString, errorMessage);

export const requiredBooleanFrom = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => requiredOfType(d, key, isBoolean, errorMessage);

export const requiredArrayFrom = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => requiredOfType(d, key, isArray, errorMessage);
