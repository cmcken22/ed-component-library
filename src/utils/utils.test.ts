import "@testing-library/jest-dom";
import { clamp } from "./";

describe("clamp function", () => {
  it("should clamp a number within the specified range", () => {
    const value = 5;
    const clampedValue = clamp(value, 0, 10);
    const expectedValue = 5;
    expect(clampedValue).toEqual(expectedValue);
    expect(typeof clampedValue).toEqual("number");
  });

  it("should clamp a string within the specified range", () => {
    const value = "5";
    const clampedValue = clamp(value, 0, 10);
    const expectedValue = "5";
    expect(clampedValue).toEqual(expectedValue);
    expect(typeof clampedValue).toEqual("string");
  });

  it("should clamp a handle bad values", () => {
    const value = "ABCDEFG";
    const clampedValue = clamp(value, 0, 10);
    const expectedValue = undefined;
    expect(clampedValue).toEqual(expectedValue);
  });
});
