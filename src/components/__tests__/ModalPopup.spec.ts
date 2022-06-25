import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import ModalPopup from "../ModalPopup.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";
import type { ITodo } from "../../model/model";

describe("Check Modal Popup Component", async () => {
  const testToDo: ITodo = {
    _id: TestEnum.TEST_ID,
    todoName: "I am test ToDo",
    createdTime: "123",
    modifiedTime: "456",
    completedTime: "789",
    isDone: false,
    isHigh: false,
  };
  const wrapper = mount(ModalPopup, {
    props: { msg: testToDo },
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vitest.fn,
        }),
      ],
    },
  });
  const messageContainer = wrapper.find(".message-wrapper");
  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("modal");
  });

  it("render child elements count", () => {
    expect(wrapper.element.childElementCount).toBe(2);
  });

  it("render message-wrapper", () => {
    expect(messageContainer.element.tagName).toEqual(TestEnum.DIV);
  });

  it("render message-wrapper text", () => {
    expect(messageContainer.element.textContent).toEqual(
      "Todo: I am test ToDoCreated: 123Modified: 456Completed: 789"
    );
  });
});
