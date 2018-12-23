import {
  DataSource,
  optionalOfType,
  requiredOfType,
  isNumber,
  isString,
  isBoolean,
  isArray,
} from './core';

export const optionalNumber = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => optionalOfType(d, key, isNumber, errorMessage);

export const optionalString = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => optionalOfType(d, key, isString, errorMessage);

export const optionalBoolean = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => optionalOfType(d, key, isBoolean, errorMessage);

export const optionalArray = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => optionalOfType(d, key, isArray, errorMessage);

export const requiredNumber = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => requiredOfType(d, key, isNumber, errorMessage);

export const requiredString = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => requiredOfType(d, key, isString, errorMessage);

export const requiredBoolean = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => requiredOfType(d, key, isBoolean, errorMessage);

export const requiredArray = (
  d: DataSource,
  key: string,
  errorMessage?: string
) => requiredOfType(d, key, isArray, errorMessage);
