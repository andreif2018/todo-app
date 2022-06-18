import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ToDoList from "../../components/ToDoList.vue";
import DraggableItem from "../../components/DraggableItem.vue";
import ToolTip from "../../components/ToolTip.vue";
import type { ITodo } from "../../model/model";

describe("Check ToDoList", async () => {
  const testToDo: ITodo = {
    _id: 0,
    text: "I am test ToDo",
    createdTime: new Date().toLocaleString(),
    modifiedTime: undefined,
    completedTime: undefined,
    isDone: false,
  };
  const wrapper = mount(ToDoList, { props: { list: [] } });
  const container = wrapper.find(".list-container");

  it("renders proper component tag name", () => {
    expect(wrapper.element.tagName).toEqual("DIV");
  });

  it("assigns proper css class", () => {
    expect(wrapper.classes()).toEqual(["list-wrapper"]);
  });

  it("renders child elements count correct", () => {
    expect(wrapper.element.childElementCount).toBe(1);
  });

  it("not renders child element ToolTip due v-if", () => {
    expect(wrapper.findComponent(ToolTip).exists()).toBeFalsy();
  });

  it("renders container", () => {
    expect(container.element.tagName).toEqual("OL");
  });

  it("renders container default child elements count", () => {
    expect(container.element.childElementCount).toBe(0);
  });

  const newWrapper = mount(ToDoList, { props: { list: [testToDo] } });
  const newContainer = newWrapper.find(".list-container");

  it("renders container with child element according to props status", async () => {
    expect(newContainer.findComponent(DraggableItem).exists()).toBeTruthy();
  });

  it("updates item based checkTodo method", async () => {
    await newWrapper.vm.checkTodo(0);
    await expect(newWrapper.vm.todoList[0].isDone).toBe(true);
  });

  it("updates back item based checkTodo method", async () => {
    await newWrapper.vm.checkTodo(0);
    await expect(newWrapper.vm.todoList[0].isDone).toBe(false);
  });

  it("updates component property based handleTip method", async () => {
    const status = "status";
    await newWrapper.vm.handleTip(status);
    await expect(newWrapper.vm.tipContent).toBe(status);
  });

  it("updates item content based saveTodo method", async () => {
    const message = "newText";
    await newWrapper.vm.saveTodo(0, message);
    await expect(newWrapper.vm.todoList[0].text).toBe(message);
  });

  it("updates item based removeTodo method", async () => {
    await newWrapper.vm.removeTodo(0);
    await expect(newWrapper.vm.todoList).toEqual([]);
  });
});
