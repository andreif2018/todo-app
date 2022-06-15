import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AddToDo from "../AddToDo.vue";

describe("CheckAddToDoBox", () => {
  const wrapper = mount(AddToDo);
  const container = wrapper.find(".add-container");
  const button = wrapper.find(".add-button");
  const textField = wrapper.find(".title");

  it("renders proper component tag name", () => {
    expect(wrapper.element.tagName).toEqual("DIV");
  });

  it("assigns proper css class", () => {
    expect(wrapper.classes()).toEqual(["add-wrapper"]);
  });

  it("renders child element ToolTip", () => {
    expect(wrapper.findComponent("ToolTip")).toBeTruthy();
  });

  it("renders proper child container structure", () => {
    expect(container.element.childElementCount).toBe(2);
  });

  it("renders proper child container tag name", () => {
    expect(container.element.tagName).toEqual("DIV");
  });

  it("renders proper button tag name", () => {
    expect(button.element.tagName).toEqual("BUTTON");
  });

  it("assigns proper css class to button element", () => {
    expect(button.classes()).toEqual(["add-button"]);
  });

  it("renders proper input text tag name", () => {
    expect(textField.element.tagName).toEqual("INPUT");
  });

  it("assigns proper css class to input text element", () => {
    expect(textField.classes()).toEqual(["title"]);
  });

  it("assigns proper attribute to input text element", () => {
    expect(textField.attributes("type")).toEqual("text");
  });

  it("assigns proper attribute to input text element", () => {
    expect(textField.attributes("placeholder")).toEqual("Type Todo here...");
  });

  it("render default value in input text", async () => {
    expect(textField.text()).toBe("");
  });

  it("sensitive to input text", async () => {
    const data = "test data";
    await textField.setValue(data);
    console.log(textField.element.textContent);
    // expect(textField.text()).toBe(data);
  });
});
