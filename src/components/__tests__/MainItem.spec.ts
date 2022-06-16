import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MainItem from "../../components/MainItem.vue";
import ToDoList from "../ToDoList.vue";
import AddToDo from "../AddToDo.vue";

describe("Check MainItem", async () => {
  const wrapper = mount(MainItem);
  const bar = wrapper.find(".top-bar");
  const buttonWrapper = wrapper.find(".clear-all-wrapper");
  const button = wrapper.find(".clear-all");

  it("renders proper component tag name", () => {
    expect(wrapper.element.tagName).toEqual("MAIN");
  });

  it("assigns proper css class", () => {
    expect(wrapper.classes()).toEqual(["main"]);
  });

  it("renders child element div top bar", () => {
    expect(bar.exists()).toBeTruthy();
  });

  it("renders child element div top bar tag name", () => {
    expect(bar.element.tagName).toEqual("DIV");
  });

  it("renders child element ToDoList", () => {
    expect(wrapper.findComponent(ToDoList).exists()).toBeTruthy();
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

  it("renders proper element count in button wrapper", () => {
    expect(buttonWrapper.element.childElementCount).toBe(1);
  });

  it("renders button wrapper tag name", () => {
    expect(buttonWrapper.element.tagName).toEqual("DIV");
  });

  it("renders button element", () => {
    expect(button.element.tagName).toEqual("BUTTON");
  });

  it("renders button text", () => {
    expect(button.text()).toEqual("Delete All");
  });
});
