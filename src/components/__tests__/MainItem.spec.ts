import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import MainItem from "../../components/MainItem.vue";
import ToDoList from "../ToDoList.vue";
import AddToDo from "../AddToDo.vue";
import FilterItem from "../FilterItem.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";
import { useToDoStore } from "../../stores/todos";
import { createPinia, setActivePinia } from "pinia";

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
  const bar = wrapper.find(".top-bar");
  const buttonWrapper = wrapper.find(".clear-all-wrapper");
  const button = wrapper.find(".clear-all");
  const store = useToDoStore();
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
  });

  it("renders child elements count correct", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });

  it("renders child element children elements count", () => {
    expect(bar.element.childElementCount).toBe(2);
  });

  it("renders grand child element AddToDo", () => {
    expect(wrapper.findComponent(AddToDo).exists()).toBeTruthy();
  });

  it("renders grand child element FilterItem", () => {
    expect(wrapper.findComponent(FilterItem).exists()).toBeTruthy();
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

  it("method delete all is sensitive by button click", async () => {
    setActivePinia(createPinia());
    await store.createNewItem(TestEnum.TEST_NAME);
    await wrapper.vm.handleClearAll();
    expect(store.clearAll).toHaveBeenCalledTimes(1);
    expect(store.clearAll).toHaveBeenLastCalledWith();
  });
});