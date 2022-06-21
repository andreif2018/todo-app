import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import DraggableItem from "../DraggableItem.vue";
import type { ITodo } from "../../model/model";
import { TestEnum } from "./model/test-model";
import ToDoItem from "../ToDoItem.vue";
import { createTestingPinia } from "@pinia/testing";

describe("DraggableItem", () => {
  const testToDo: ITodo = {
    _id: TestEnum.TEST_ID,
    todoName: "I am test ToDo",
    createdTime: new Date().toLocaleString(),
    modifiedTime: undefined,
    completedTime: undefined,
    isDone: false,
  };
  const wrapper = mount(DraggableItem, {
    props: { item: testToDo },
    global: {
      plugins: [
        createTestingPinia({
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
    expect(wrapper.classes()).toEqual(["draggable-item"]);
  });

  it("renders component attribute", () => {
    expect(wrapper.element.getAttribute("draggable")).toEqual("true");
  });

  it("renders child component", () => {
    expect(wrapper.findComponent(ToDoItem).exists()).toBeTruthy();
  });
});
