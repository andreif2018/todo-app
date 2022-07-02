import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import CheckBox from "../CheckBox.vue";
import { TestEnum } from "./model/test-model";
import { Response } from "@/model/model";
import { createTestingPinia } from "@pinia/testing";

describe("CheckBox", () => {
  const wrapper = mount(CheckBox, {
    props: { isChecked: false },
    global: {
      plugins: [
        createTestingPinia({
          stubActions: false,
          createSpy: vitest.fn,
        }),
      ],
    },
    emits: [Response.CHECK],
  });

  const checkBox = wrapper.find(".checkbox");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("renders component class name", () => {
    expect(wrapper.element.className).toEqual("checkbox-wrapper");
  });

  it("renders tag name", () => {
    expect(checkBox.element.tagName).toEqual(TestEnum.INPUT);
  });

  it("renders attribute type", () => {
    expect(checkBox.attributes("type")).toEqual("checkbox");
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(1);
  });

  it("renders default attribute", () => {
    expect(checkBox.attributes("checked")).toBeFalsy();
  });

  it("renders default props", () => {
    expect(wrapper.props().isChecked).toBe(false);
  });

  it("sensitive to checking checkbox", async () => {
    await checkBox.trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty(Response.CHECK);
    expect(wrapper.find("input").element.className).toEqual("checkbox checked");
  });

  it("update className according to checked state", async () => {
    expect(wrapper.find("input").element.className).toEqual("checkbox checked");
  });

  it("renders updated props", async () => {
    await wrapper.setProps({ isChecked: true });
    expect(wrapper.props().isChecked).toBe(true);
  });

  it("sensitive to unchecking checkbox", async () => {
    await checkBox.trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty(Response.CHECK, [[]]);
  });

  it("update className according to unchecked state", async () => {
    await wrapper.vm.handleCheck();
    await expect(checkBox.element.className).toEqual("checkbox");
  });
});
