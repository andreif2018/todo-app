import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import TodoItemMobile from "../TodoItemMobile.vue";
import CheckBox from "../CheckBox.vue";
import ToggleButton from "../ToggleButton.vue";
import ModalPopup from "../ModalPopup.vue";
import { TestEnum } from "./model/test-model";
import type { ITodo } from "../../model/model";
import { createTestingPinia } from "@pinia/testing";

describe("Check TodoItemMobile Component", async () => {
  const testToDo: ITodo = {
    _id: TestEnum.TEST_ID,
    todoName: "I am test ToDo",
    createdTime: new Date().toLocaleString(),
    modifiedTime: undefined,
    completedTime: undefined,
    isCompleted: false,
    isUrgent: false,
  };
  const wrapper = mount(TodoItemMobile, {
    props: { item: testToDo },
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vitest.fn,
        }),
      ],
    },
  });
  const input = wrapper.findAll("input");
  const container = wrapper.find(".button-container");
  const editButton = wrapper.find(".edit");
  const infoButton = wrapper.find(".info");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.LI);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("todo-item");
  });

  it("render child elements count", () => {
    expect(wrapper.element.childElementCount).toBe(2);
  });

  it("render child CheckBox", () => {
    expect(wrapper.findComponent(CheckBox).exists()).toBeTruthy();
  });

  it("render child ModalPopup", () => {
    expect(wrapper.findComponent(ModalPopup).exists()).toBeFalsy();
  });

  it("render input child element count", () => {
    expect(input.length).toBe(3);
  });

  it("render child element classname", () => {
    expect(input[0].element.className).toEqual("regular");
  });

  it("render child element button", () => {
    expect(container.element.tagName).toEqual(TestEnum.DIV);
  });

  it("render container child element count", () => {
    expect(container.element.childElementCount).toBe(3);
  });

  it("enables status", async () => {
    await wrapper.vm.edit();
    expect(wrapper.vm.isToDoDisabled).toBeFalsy();
  });

  it("update todo item back to disabled status", async () => {
    await wrapper.vm.edit();
    await input[0].setValue("I am test ToDo");
    await wrapper.vm.save();
    expect(wrapper.vm.isToDoDisabled).toBeTruthy();
  });

  it("update todo item", async () => {
    const testData = "update string";
    await editButton.trigger(TestEnum.CLICK);
    await input[0].setValue(testData);
    await wrapper.find(".save").trigger(TestEnum.CLICK);
    expect(input[0].element.value).toEqual(testData);
  });

  it("render child ModalPopup", async () => {
    await infoButton.trigger(TestEnum.CLICK);
    expect(wrapper.findComponent(ModalPopup).exists()).toBeTruthy();
  });

  it("close component on modal popup hide button click", async () => {
    await wrapper.find(".hide").trigger(TestEnum.CLICK);
    expect(wrapper.findComponent(ModalPopup).exists()).toBeFalsy();
  });

  it("check trigger ToggleButton", async () => {
    await wrapper.findComponent(ToggleButton).trigger(TestEnum.CLICK);
    expect(input[1].element.checked).toBe(true);
  });

  it("check trigger checkbox", async () => {
    await wrapper.findComponent(CheckBox).trigger(TestEnum.CLICK);
    expect(input[2].element.checked).toBe(true);
  });
});
