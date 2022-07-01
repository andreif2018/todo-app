import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HintItem from "../HintItem.vue";
import { TestEnum } from "./model/test-model";

describe("HintItem", () => {
  const testProps = "test hint";
  const updatedProps = "updated hint";
  const wrapper = mount(HintItem, { props: { msg: testProps } });

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(1);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("hint");
  });

  it("renders props", () => {
    expect(wrapper.text()).toEqual(testProps);
  });

  it("renders updated props", async () => {
    await wrapper.setProps({ msg: updatedProps });
    expect(wrapper.text()).toEqual(updatedProps);
  });

  it("renders child element structure", () => {
    expect(wrapper.element.firstElementChild?.childElementCount).toBe(0);
  });
});
