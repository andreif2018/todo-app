// @ts-nocheck
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ToDoItem from "../ToDoItem.vue";
import CustomCheckbox from "../CustomCheckbox.vue";
import ModalPopup from "../ModalPopup.vue";
import { TestEnum } from "./test-model";
import { InputEnum } from "../../model/model";

describe("Check ToDoItem Component", async () => {
  const wrapper = mount(ToDoItem, { props: { data: [] } });
  const input = wrapper.find(".regular");
  const container = wrapper.find(".button-container");
  const editButton = wrapper.find(".edit");
  const infoButton = wrapper.find(".info");
  const removeButton = wrapper.find(".remove");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.LI);
  });

  it("assigns css class", () => {
    expect(wrapper.classes()).toEqual(["todo-item"]);
  });

  it("render child elements count", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });

  it("render child CustomCheckbox", () => {
    expect(wrapper.findComponent(CustomCheckbox).exists()).toBeTruthy();
  });

  it("render child CustomCheckbox", () => {
    expect(wrapper.findComponent(ModalPopup).exists()).toBeFalsy();
  });

  it("render child element input", () => {
    expect(input.element.tagName).toEqual(TestEnum.INPUT);
  });

  it("render child element button", () => {
    expect(container.element.tagName).toEqual(TestEnum.DIV);
  });

  it("render container child element count", () => {
    expect(container.element.childElementCount).toBe(3);
  });

  it("render edit button", () => {
    expect(editButton.element.tagName).toBe(TestEnum.BUTTON);
  });

  it("render info button", () => {
    expect(infoButton.element.tagName).toBe(TestEnum.BUTTON);
  });

  it("render remove button", () => {
    expect(removeButton.element.tagName).toBe(TestEnum.BUTTON);
  });

  it("update todo item disabled status", async () => {
    await wrapper.vm.edit();
    expect(wrapper.vm.isToDoDisabled).toBeFalsy();
  });

  it("update todo item back to disabled status", async () => {
    await wrapper.vm.save();
    expect(wrapper.vm.isToDoDisabled).toBeTruthy();
  });

  it("update todo item", async () => {
    const testData = "update string";
    await editButton.trigger(TestEnum.CLICK);
    await input.setValue(testData);
    await wrapper.find(".save").trigger(TestEnum.CLICK);
    expect(input.element.value).toEqual(testData);
  });

  it("render child ModalPopup", async () => {
    await infoButton.trigger(TestEnum.CLICK);
    expect(wrapper.findComponent(ModalPopup).exists()).toBeTruthy();
  });

  it("close component on modal popup hide button click", async () => {
    await wrapper.find(".hide").trigger(TestEnum.CLICK);
    expect(wrapper.findComponent(ModalPopup).exists()).toBeFalsy();
  });

  it("check trigger", async () => {
    await wrapper.findComponent(CustomCheckbox).trigger(TestEnum.CLICK);
    expect(wrapper.emitted()).toHaveProperty(TestEnum.CHECK, [[]]);
    expect(wrapper.findComponent(CustomCheckbox).element.checked).toBe(true);
  });

  it("check saving value", async () => {
    await editButton.trigger(TestEnum.CLICK);
    await input.setValue(TestEnum.CHARS_2);
    await wrapper.find(".save").trigger(TestEnum.CLICK);
    expect(input.element.value).toEqual(TestEnum.CHARS_2);
  });

  it("set over max allowed value", async () => {
    await editButton.trigger(TestEnum.CLICK);
    await input.setValue(TestEnum.CHARS_33);
    expect(wrapper.vm.hintMessage).toEqual(InputEnum.MAX_HINT);
  });

  it("set below min allowed value", async () => {
    await editButton.trigger(TestEnum.CLICK);
    await input.setValue(TestEnum.CHARS_2);
    expect(wrapper.vm.hintMessage).toEqual(InputEnum.MIN_HINT);
  });
});
