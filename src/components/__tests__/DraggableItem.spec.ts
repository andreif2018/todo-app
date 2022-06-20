import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DraggableItem from "../DraggableItem.vue";
import type { ITodo } from "../../model/model";
import { TestEnum } from "./test-model";
import ToDoItem from "../ToDoItem.vue";

describe("DraggableItem", () => {
  const testToDo: ITodo = {
    _id: 0,
    text: "I am test ToDo",
    createdTime: new Date().toLocaleString(),
    modifiedTime: undefined,
    completedTime: undefined,
    isDone: false,
  };
  const wrapper = mount(DraggableItem, {
    props: { item: testToDo },
    emits: ["ondragenter"],
  });

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.LI);
  });

  it("renders component class", () => {
    expect(wrapper.classes()).toEqual(["draggable-item"]);
  });

  it("renders component attribute", () => {
    expect(wrapper.element.getAttribute("draggable")).toEqual("true");
  });

  it("renders child component", () => {
    expect(wrapper.findComponent(ToDoItem).exists()).toBeTruthy();
  });

  it("check onDragEnter method", async () => {
    await wrapper.vm.onDragEnter();
    expect(wrapper.vm.isTargetItem).toBe(true);
  });

  it("check onDragLeave method", async () => {
    await wrapper.vm.onDragLeave();
    expect(wrapper.vm.isTargetItem).toBe(false);
  });

  it("check onDrop method", async () => {
    await wrapper.vm.onDrop();
    expect(wrapper.vm.isTargetItem).toBe(false);
  });

  it("check start method", async () => {
    await wrapper.vm.start();
    expect(wrapper.vm.isCurrentDragged).toBe(true);
  });

  it("check stop method", async () => {
    await wrapper.vm.stop();
    expect(wrapper.vm.isCurrentDragged).toBe(false);
  });
});
