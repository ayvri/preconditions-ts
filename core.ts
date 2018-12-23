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

export function optional<T extends CheckedType>(
  value: any,
  validator: TypeValidator<T>,
  errorMessage?: string
): Maybe<T> {
  if (value == null || validator(value)) {
    return value;
  }

  throw new Error(errorMessage || `invalid type of value detected`);
}

export function required<T extends CheckedType>(
  value: any,
  validator: TypeValidator<T>,
  errorMessage?: string
): T {
  if (value == null) {
    throw new Error(errorMessage ||'value required');
  }

  if (!validator(value)) {
    throw new Error(errorMessage || 'invalid type of value');
  }

  return value;
}

export function optionalOfType<T extends CheckedType, DS extends {} = DataSource>(
  d: DS,
  key: keyof DS,
  validator: TypeValidator<T>,
  errorMessage?: string,
): Maybe<T> {
  return optional<T>(d[key], validator, errorMessage || `invalid type of value detected for ${key}`);
}

export function requiredOfType<T extends CheckedType>(
  d: DataSource,
  key: string,
  validator: TypeValidator<T>,
  errorMessage?: string,
): T {
  try {
    return required<T>(d[key], validator, errorMessage);
  } catch (e) {
    throw errorMessage ? e : (markedUpError(e, key) || e);
  }
}

function markedUpError(error: Error, key: string): Error | undefined {
  if (error.message === 'value required') {
    return new Error(`value required for key: ${key}`);
  } else if (error.message === 'invalid type of value') {
    return new Error(`invalid type of value detected for key: ${key}`);
  }
}
