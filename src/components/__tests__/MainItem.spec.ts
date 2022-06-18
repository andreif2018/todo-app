import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MainItem from "../../components/MainItem.vue";
import ToDoList from "../ToDoList.vue";
import AddToDo from "../AddToDo.vue";
import { TestEnum } from "./test-model";

describe("Check MainItem", async () => {
  const wrapper = mount(MainItem);
  const bar = wrapper.find(".top-bar");
  const buttonWrapper = wrapper.find(".clear-all-wrapper");
  const button = wrapper.find(".clear-all");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual("MAIN");
  });

  it("assigns css class", () => {
    expect(wrapper.classes()).toEqual(["main"]);
  });

  it("renders child element div top bar", () => {
    expect(bar.exists()).toBeTruthy();
  });

  it("renders child element div top bar tag name", () => {
    expect(bar.element.tagName).toEqual(TestEnum.DIV);
  });

  it("renders child element ToDoList", () => {
    expect(wrapper.findComponent(ToDoList).exists()).toBeTruthy();
    expect(wrapper.findComponent(ToDoList).props()).toEqual({ list: [] });
  });

  it("renders child elements count correct", () => {
    expect(wrapper.element.childElementCount).toBe(2);
  });

  it("renders child element children elements count", () => {
    expect(bar.element.childElementCount).toBe(2);
  });

  it("renders grand child element AddToDo", () => {
    expect(wrapper.findComponent(AddToDo).exists()).toBeTruthy();
  });

  it("renders element count in button wrapper", () => {
    expect(buttonWrapper.element.childElementCount).toBe(1);
  });

  it("renders button wrapper tag name", () => {
    expect(buttonWrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("renders button element", () => {
    expect(button.element.tagName).toEqual(TestEnum.BUTTON);
  });

  it("renders button text", () => {
    expect(button.text()).toEqual("Delete All");
  });

  it("updated according to emitted event by child component", async () => {
    const item = "new ToDo";
    await wrapper.findComponent(AddToDo).vm.$emit(TestEnum.SAVE, item);
    expect(wrapper.findComponent(ToDoList).props().list[0].text).toEqual(item);
    expect(wrapper.findComponent(ToDoList).props().list.length).toBe(1);
  });

  it("updated according to emitted additional event by child component", async () => {
    const item = "new ToDo";
    await wrapper.findComponent(AddToDo).vm.$emit(TestEnum.SAVE, item + item);
    expect(wrapper.findComponent(ToDoList).props().list[0].text).toEqual(item);
    expect(wrapper.findComponent(ToDoList).props().list[1].text).toEqual(
      item + item
    );
    expect(wrapper.findComponent(ToDoList).props().list.length).toBe(2);
  });

  it("updated according to emitted delete all event", async () => {
    await button.trigger(TestEnum.CLICK);
    expect(wrapper.findComponent(ToDoList).props().list.length).toBe(0);
  });

  it("updated according to emitted delete all event", async () => {
    await wrapper.findComponent(AddToDo).vm.$emit(TestEnum.SAVE, "some text");
    await wrapper.vm.handleClearAll();
    expect(wrapper.findComponent(ToDoList).props().list.length).toBe(0);
  });
});
