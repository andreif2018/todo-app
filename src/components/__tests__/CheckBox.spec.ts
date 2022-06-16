import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CheckBox from "../CheckBox.vue";
import { TestEnum } from "./test-model";

describe("CheckBox", () => {
  const wrapper = mount(CheckBox, { props: { msg: false } });
  const checkBox = wrapper.find(".customCheck");

  it("renders proper component tag name", () => {
    expect(wrapper.element.tagName).toEqual("INPUT");
  });

  it("assigns proper css class", () => {
    expect(wrapper.classes()).toEqual(["customCheck"]);
  });

  it("renders proper attribute type", () => {
    expect(wrapper.attributes("type")).toEqual("checkbox");
  });

  it("renders proper component structure", () => {
    expect(wrapper.element.childElementCount).toBe(0);
  });

  it("renders proper default attribute", () => {
    expect(checkBox.attributes("checked")).toBeFalsy();
  });

  it("renders proper default props", () => {
    expect(wrapper.props().isChecked).toBe(false);
  });

  it("sensitive to checking checkbox", async () => {
    await checkBox.trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty("check");
  });

  it("renders updated props", async () => {
    await wrapper.setProps({ isChecked: true });
    expect(wrapper.props().isChecked).toBe(true);
  });

  it("sensitive to unchecking checkbox", async () => {
    await checkBox.trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty("check", [[true], [false]]);
  });
});
