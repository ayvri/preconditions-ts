import { Expect as expect, Setup, Test, TestCase } from 'alsatian';
import { requiredNumberFrom, requiredNumber } from '../index';

export class RequiredApiValidationFixure {
  private testStructure: { [key: string]: any };

  @Setup
  public setup() {
    this.testStructure = {
      test: 'foo',
    };
  }

  @Test('required number, simple value')
  @TestCase()
  public undefinedValue(input: any) {
    expect(() => {
      requiredNumber(input);
    }).toThrowError(Error, 'value required');
  }

  @Test('required number, value found type assertion ok')
  @TestCase(5)
  public validSimpleType(input: any) {
    const value = requiredNumber(input);
    expect(value).toEqual(input);
  }

  @Test('required number, type mismatch')
  @TestCase('foo')
  public invalidSimpleType(input: any) {
    expect(() => {
      requiredNumber(input);
    }).toThrowError(Error, 'invalid type of value');
  }

  @Test('required number, type mismatch, custom error')
  @TestCase('foo', 'not working')
  public invalidSimpleTypeCustomError(input: any, errorMessage: string) {
    expect(() => {
      requiredNumber(input, errorMessage);
    }).toThrowError(Error, errorMessage);
  }

  @Test('value not found,')
  @TestCase('foo')
  public valueNotFound(key: string) {
    expect(() => {
      requiredNumberFrom(this.testStructure, key);
    }).toThrowError(Error, `value required for key: ${key}`);
  }

  @Test('value found, type mismatch, not ok')
  @TestCase('test')
  public typeMismatch(key: string) {
    expect(() => {
      requiredNumberFrom(this.testStructure, key);
    }).toThrowError(Error, `invalid type of value detected for key: ${key}`);
  }

  @Test('value found, type mismatch, not ok, custom error')
  @TestCase('test', 'not ok')
  public typeMismatchCustomError(key: string, errorMessage: string) {
    expect(() => {
      requiredNumberFrom(this.testStructure, key, errorMessage);
    }).toThrowError(Error, errorMessage);
  }
}
