import { Expect as expect, Setup, Test, TestCase } from 'alsatian';
import { requiredOfType, Type, Validator } from '../core';

export class RequiredTypeValidationFixture {
  private testStructure: { [key: string]: any };

  @Setup
  public setup() {
    this.testStructure = {
      test: 'foo',
    };
  }

  @Test('required of type, missing key')
  @TestCase('missing', Type.NUMBER)
  public required(key: string, validator: Validator) {
    expect(() => {
      requiredOfType(this.testStructure, key, validator);
    }).toThrowError(Error, `value required for key: ${key}`);
  }

  @Test('required of type, key found but type mismatch')
  @TestCase('test', Type.NUMBER)
  public requiredTypeMismatch(key: string, validator: Validator) {
    expect(() => {
      requiredOfType(this.testStructure, key, validator);
    }).toThrowError(Error, `invalid type of value detected for key: ${key}`);
  }

  @Test('required of type, custom error')
  @TestCase('missing', Type.NUMBER, 'Could not find key')
  public requiredCustomError(key: string, validator: Validator, errorMessage: string) {
    expect(() => {
      requiredOfType(this.testStructure, key, validator, errorMessage);
    }).toThrowError(Error, errorMessage);
  }
}
