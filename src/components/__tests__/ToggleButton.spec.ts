import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ToggleButton from "../ToggleButton.vue";
import { TestEnum } from "./model/test-model";
import { Response } from "@/model/model";

describe("ToggleButton", () => {
  const wrapper = mount(ToggleButton, { props: { isChecked: false } });
  const toggle = wrapper.find(".toggle");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.INPUT);
  });

  it("renders attribute type", () => {
    expect(wrapper.attributes("type")).toEqual("checkbox");
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(0);
  });

  it("renders default attribute", () => {
    expect(toggle.attributes("checked")).toBeFalsy();
  });

  it("renders default props", () => {
    expect(wrapper.props().isChecked).toBe(false);
  });

  it("sensitive to checking toggleButton", async () => {
    await toggle.trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty(Response.TOGGLE);
  });

  it("renders updated props", async () => {
    await wrapper.setProps({ isChecked: true });
    expect(wrapper.props().isChecked).toBe(true);
  });

  it("sensitive to unchecking checkbox", async () => {
    await toggle.trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty(Response.TOGGLE, [[], []]);
  });
});
