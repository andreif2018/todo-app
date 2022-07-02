import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import DraggableItem from "../DraggableItem.vue";
import type { ITodo } from "../../model/model";
import { TestEnum } from "./model/test-model";
import TodoItem from "../TodoItem.vue";
import { createTestingPinia } from "@pinia/testing";
import { regular, target } from "../../model/model";

describe("DraggableItem", () => {
  const testToDo: ITodo = {
    _id: TestEnum.TEST_ID,
    todoName: TestEnum.TEST_NAME,
    createdTime: new Date().toLocaleString(),
    modifiedTime: undefined,
    completedTime: undefined,
    isCompleted: false,
    isUrgent: false,
  };
  const wrapper = mount(DraggableItem, {
    props: { item: testToDo },
    global: {
      plugins: [
        createTestingPinia({
          stubActions: false,
          createSpy: vitest.fn,
        }),
      ],
    },
    emits: ["ondragenter"],
  });

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.LI);
  });

  it("renders component class", () => {
    expect(wrapper.element.className).toEqual("draggable-item");
  });

  it("renders component attribute", () => {
    expect(wrapper.element.getAttribute("draggable")).toEqual("true");
  });

  it("renders child component", () => {
    expect(wrapper.findComponent(TodoItem).exists()).toBeTruthy();
  });

  it("handle method onDragEnter", async () => {
    await wrapper.vm.onDragEnter();
    expect(wrapper.vm.activeStyle).toEqual(target);
    expect(wrapper.vm.isTargetItem).toBe(true);
  });

  it("handle method onDragLeave", async () => {
    await wrapper.vm.onDragLeave();
    expect(wrapper.vm.activeStyle).toEqual(regular);
    expect(wrapper.vm.isTargetItem).toBe(false);
  });

  it("handle method onDrop", async () => {
    await wrapper.vm.onDrop();
    expect(wrapper.vm.activeStyle).toEqual(regular);
  });

  it("handle method start", async () => {
    await wrapper.vm.start();
    expect(wrapper.vm.isCurrentDragged).toBe(true);
  });

  it("handle method stop", async () => {
    await wrapper.vm.stop();
    expect(wrapper.vm.isCurrentDragged).toBe(false);
  });
});
