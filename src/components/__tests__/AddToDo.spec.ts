import { describe, it, expect, vitest, vi } from "vitest";
import { mount } from "@vue/test-utils";
import AddToDo from "../AddToDo.vue";
import { TestEnum } from "./model/test-model";
import ToolTip from "../ToolTip.vue";
import { createTestingPinia } from "@pinia/testing";

describe("Check AddToDo Component", async () => {
  const wrapper = mount(AddToDo, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vitest.fn,
        }),
      ],
    },
  });

  const container = wrapper.find(".add-container");
  const button = wrapper.find(".add-button");
  const textField = wrapper.find("input");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("add-wrapper");
  });

  it("no render child element ToolTip by default", () => {
    expect(wrapper.findComponent(ToolTip).exists()).toBeFalsy();
  });

  it("renders child container structure", () => {
    expect(container.element.childElementCount).toBe(2);
  });

  it("renders child container tag name", () => {
    expect(container.element.tagName).toEqual(TestEnum.DIV);
  });

  it("renders button tag name", () => {
    expect(button.element.tagName).toEqual(TestEnum.BUTTON);
  });

  it("assigns css class to button element", () => {
    expect(button.element.className).toEqual("add-button");
  });

  it("renders input text classname", () => {
    expect(textField.element.className).toEqual("title");
  });

  it("assigns attribute to input text element", () => {
    expect(textField.attributes("type")).toEqual("text");
  });

  it("assigns attribute to input text element", () => {
    expect(textField.attributes("placeholder")).toEqual("Type Todo here...");
  });

  it("render default value in input text", async () => {
    expect(textField.text()).toBe("");
  });

  it("sensitive to input text", async () => {
    await textField.setValue(TestEnum.CHARS_3);
    expect(textField.element.value).toBe(TestEnum.CHARS_3);
  });

  it("reset text value after button click", async () => {
    await button.trigger(TestEnum.CLICK);
    expect(textField.element.value).toBe("");
  });

  it("renders tooltip in case invalid input", async () => {
    await textField.setValue(TestEnum.CHARS_2); // 2 chars is invalid input
    await button.trigger(TestEnum.CLICK);
    expect(textField.element.value).toBe(TestEnum.CHARS_2);
    expect(wrapper.findComponent(ToolTip).exists()).toBeTruthy();
  });

  it("tooltip is hidden in case valid input", async () => {
    await textField.setValue(TestEnum.CHARS_3); // 3 chars is valid input
    expect(textField.element.value).toBe(TestEnum.CHARS_3);
    expect(wrapper.findComponent(ToolTip).exists()).toBeFalsy();
  });

  it("renders tooltip in case invalid input upper bound", async () => {
    await textField.setValue(TestEnum.CHARS_33); // 33 chars is invalid input
    await button.trigger(TestEnum.CLICK);
    expect(textField.element.value).toBe(TestEnum.CHARS_33);
    expect(wrapper.findComponent(ToolTip).exists()).toBeTruthy();
  });

  it("tooltip is hidden in case valid input", async () => {
    await textField.setValue(TestEnum.CHARS_32);
    expect(textField.element.value).toBe(TestEnum.CHARS_32);
    expect(wrapper.findComponent(ToolTip).exists()).toBeFalsy();
  });

  it("renders tooltip in case submit empty text", async () => {
    await textField.setValue("");
    await button.trigger(TestEnum.CLICK);
    expect(textField.element.value).toBe("");
    expect(wrapper.findComponent(ToolTip).exists()).toBeTruthy();
  });

  it("method handleBlur is sensitive by esc key pressing", async () => {
    const spy = (wrapper.vm.handleBlur = vi.fn());
    await wrapper.vm.handleBlur();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith();
  });
});
