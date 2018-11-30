import { Expect as expect, Setup, Test, TestCase } from "alsatian";
import { optional, Type, Validator } from "../index";

export class OptionalTypeValidationFixture {
  private testStructure: { [key: string]: any };

  @Setup
  public setup() {
    this.testStructure = {
      test: "foo"
    };
  }

  @Test("value not found, optional so ok")
  @TestCase("missing", Type.STRING)
  public valueNotFound(key: string, validator: Validator) {
    const value = optional(this.testStructure, key, validator);
    expect(value).not.toBeDefined();
  }

  @Test("value found, type matches")
  @TestCase("test", Type.STRING, "foo")
  public typeMatch(key: string, validator: Validator, expectedValue: any) {
    const value = optional(this.testStructure, key, validator);
    expect(value).toBe(expectedValue);
  }

  @Test("value found, type mismatch")
  @TestCase("test", Type.NUMBER)
  @TestCase("test", Type.BOOLEAN)
  @TestCase("test", Type.ARRAY)
  public typeMismatch(key: string, validator: Validator) {
    expect(() => {
      optional(this.testStructure, key, validator);
    }).toThrowError(Error, `invalid type of value detected for ${key}`);
  }
}
