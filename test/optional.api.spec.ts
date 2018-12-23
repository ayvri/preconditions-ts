import { Expect as expect, Setup, Test, TestCase } from 'alsatian';
import { optionalNumberFrom, optionalNumber } from '../index';

export class OptionalApiValidationFixture {
  private testStructure: { [key: string]: any };

  @Setup
  public setup() {
    this.testStructure = {
      test: 'foo',
    };
  }

  @Test('optional number, simple value')
  @TestCase()
  public undefinedValue(input: any) {
    const value = optionalNumber(input);
    expect(value).not.toBeDefined();
  }

  @Test('optional number, value found type assertion ok')
  @TestCase(5)
  public validSimpleType(input: any) {
    const value = optionalNumber(input);
    expect(value).toEqual(input);
  }

  @Test('optional number, type mismatch')
  @TestCase('foo')
  public invalidSimpleType(input: any) {
    expect(() => {
      optionalNumber(input);
    }).toThrowError(Error, 'invalid type of value detected');
  }

  @Test('optional number, type mismatch, custom error')
  @TestCase('foo', 'not working')
  public invalidSimpleTypeCustomError(input: any, errorMessage: string) {
    expect(() => {
      optionalNumber(input, errorMessage);
    }).toThrowError(Error, errorMessage);
  }

  @Test('value not found, optional so ok')
  @TestCase('foo')
  public valueNotFound(key: string) {
    const value = optionalNumberFrom(this.testStructure, key);
    expect(value).not.toBeDefined();
  }

  @Test('value found, type mismatch, not ok')
  @TestCase('test')
  public typeMismatch(key: string) {
    expect(() => {
      optionalNumberFrom(this.testStructure, key);
    }).toThrowError(Error, `invalid type of value detected for ${key}`);
  }

  @Test('value found, type mismatch, not ok, custom error')
  @TestCase('test', 'not ok')
  public typeMismatchCustomError(key: string, errorMessage: string) {
    expect(() => {
      optionalNumberFrom(this.testStructure, key, errorMessage);
    }).toThrowError(Error, errorMessage);
  }
}
