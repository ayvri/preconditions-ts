type CheckedType = string | number | boolean | [];
type Maybe<T extends CheckedType> = T | undefined | null;

export type TypeValidator<T extends CheckedType> = (val: any) => val is T;
export type DataSource = { [key: string]: any };
export type Validator = TypeValidator<CheckedType>;

export const isNumber: TypeValidator<number> = (val: unknown): val is number => typeof val == 'number';
export const isString: TypeValidator<string> = (val: unknown): val is string => typeof val == 'string';
export const isBoolean: TypeValidator<boolean> = (val: unknown): val is boolean => !!val === val;
export const isArray: TypeValidator<[]> = (val: unknown): val is [] => Array.isArray(val);

export const Type: { [key: string]: Validator } = {
  NUMBER: isNumber,
  STRING: isString,
  BOOLEAN: isBoolean,
  ARRAY: isArray,
};

export function optionalOfType<T extends CheckedType>(
  d: DataSource,
  key: string,
  validator: TypeValidator<T>,
): Maybe<T> {
  const value = d[key];
  if (value == null || validator(value)) {
    return value;
  }

  throw new Error(`invalid type of value detected for ${key}`);
}

export function requiredOfType<T extends CheckedType>(d: DataSource, key: string, validator: TypeValidator<T>): T {
  const value = d[key];
  if (value == null) {
    throw new Error(`value required for ${key}`);
  }

  if (!validator(value)) {
    throw new Error(`invalid type of value detected for ${key}`);
  }

  return value;
}
