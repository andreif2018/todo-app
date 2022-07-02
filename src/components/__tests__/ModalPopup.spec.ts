import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import ModalPopup from "../ModalPopup.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";
import type { ITodo } from "../../model/model";

describe("Check Modal Popup Component", async () => {
  const testToDo: ITodo = {
    _id: TestEnum.TEST_ID,
    todoName: TestEnum.TEST_NAME,
    createdTime: "123",
    modifiedTime: "456",
    completedTime: "789",
    isCompleted: false,
    isUrgent: false,
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
    expect(wrapper.element.tagName).toEqual(TestEnum.ARTICLE);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("modal");
  });

  it("render child elements count", () => {
    expect(wrapper.element.childElementCount).toBe(2);
  });

  it("render message-wrapper", () => {
    expect(messageContainer.element.tagName).toEqual("UL");
  });

  it("render message-wrapper text", () => {
    expect(messageContainer.element.children[0].textContent).toEqual(
      `Todo: ${TestEnum.TEST_NAME}`
    );
    expect(messageContainer.element.children[1].textContent).toEqual(
      "Priority: Non-urgent"
    );
    expect(messageContainer.element.children[2].textContent).toEqual(
      "Created: 123"
    );
    expect(messageContainer.element.children[3].textContent).toEqual(
      "Modified: 456"
    );
    expect(messageContainer.element.children[4].textContent).toEqual(
      "Completed: 789"
    );
  });

  it("render message-wrapper", async () => {
    const urgentName = "I am urgent ToDo";
    const urgentToDo: ITodo = {
      _id: TestEnum.TEST_ID,
      todoName: urgentName,
      createdTime: "123",
      modifiedTime: "456",
      completedTime: "789",
      isCompleted: false,
      isUrgent: true,
    };
    await wrapper.setProps({ msg: urgentToDo });
    const urgent = wrapper.find(".urgent");
    expect(urgent.element.tagName).toEqual("SPAN");
    expect(messageContainer.element.children[0].textContent).toEqual(
      `Todo: ${urgentName}`
    );
    expect(urgent.element.textContent).toEqual("Urgent !!!");
  });
});
