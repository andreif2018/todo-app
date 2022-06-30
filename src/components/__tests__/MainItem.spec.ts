import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import MainItem from "../../components/MainItem.vue";
import TodoList from "../TodoList.vue";
import AddTodo from "../AddTodo.vue";
import TopBar from "../TopBar.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";

describe("Check MainItem", async () => {
  const wrapper = mount(MainItem, {
    global: {
      plugins: [
        createTestingPinia({
          stubActions: false,
          createSpy: vitest.fn,
        }),
      ],
    },
  });
  const content = wrapper.find(".main-content");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual("MAIN");
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("main");
  });

  it("renders child element content tag name", () => {
    expect(content.element.tagName).toEqual(TestEnum.SECTION);
  });

  it("renders grand child element AddTodo", () => {
    expect(wrapper.findComponent(AddTodo).exists()).toBeTruthy();
  });

  it("renders TopBar", () => {
    expect(wrapper.findComponent(TopBar).exists()).toBeTruthy();
  });

  it("renders TodoList", () => {
    expect(wrapper.findComponent(TodoList).exists()).toBeTruthy();
  });

  it("renders child elements count", () => {
    expect(wrapper.element.childElementCount).toBe(1);
  });

  it("renders grand child elements count", () => {
    expect(content.element.childElementCount).toBe(3);
  });
});
