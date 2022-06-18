import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CheckBox from "../CustomCheckbox.vue";
import { TestEnum } from "./test-model";

describe("CheckBox", () => {
  const wrapper = mount(CheckBox, { props: { isChecked: false } });
  const checkBox = wrapper.find(".customCheck");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.INPUT);
  });

  it("assigns css class", () => {
    expect(wrapper.classes()).toEqual(["customCheck"]);
  });

  it("renders attribute type", () => {
    expect(wrapper.attributes("type")).toEqual("checkbox");
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(0);
  });

  it("renders default attribute", () => {
    expect(checkBox.attributes("checked")).toBeFalsy();
  });

  it("renders default props", () => {
    expect(wrapper.props().isChecked).toBe(false);
  });

  it("sensitive to checking checkbox", async () => {
    await checkBox.trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty(TestEnum.CHECK);
  });

  it("renders updated props", async () => {
    await wrapper.setProps({ isChecked: true });
    expect(wrapper.props().isChecked).toBe(true);
  });

  it("sensitive to unchecking checkbox", async () => {
    await checkBox.trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty(TestEnum.CHECK, [[true], [false]]);
  });
});
