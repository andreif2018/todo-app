import { describe, it, expect } from "vitest";
import { validateInput, toggleOn, toggleOff } from "../../utils/utils";
import { TestEnum } from "./model/test-model";
import { InputEnum } from "../../model/model";
import { ref } from "vue";

describe("utils", () => {
  it("input over max allowed value", () => {
    expect(validateInput(TestEnum.CHARS_33)).toStrictEqual(InputEnum.MAX_HINT);
  });

  it("input below min allowed value", () => {
    expect(validateInput(TestEnum.CHARS_2)).toStrictEqual(InputEnum.MIN_HINT);
  });

  it("input of empty string", () => {
    expect(validateInput("")).toStrictEqual(InputEnum.MIN_HINT);
  });

  it("input of valid string", () => {
    expect(validateInput(TestEnum.CHARS_3)).not.exist;
  });

  it("toggleOn false value to true", () => {
    const data = ref(false);
    toggleOn(data);
    expect(data.value).toBe(true);
  });

  it("ignore toggleOn in case value is true", () => {
    const data = ref(true);
    toggleOn(data);
    expect(data.value).toBe(true);
  });

  it("toggleOff true value to false", () => {
    const data = ref(true);
    toggleOff(data);
    expect(data.value).toBe(false);
  });

  it("ignore toggleOff in case value is false", () => {
    const data = ref(false);
    toggleOff(data);
    expect(data.value).toBe(false);
  });
});
