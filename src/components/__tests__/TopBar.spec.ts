import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import TopBar from "../TopBar.vue";
import FilterItem from "../FilterItem.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";
import { useToDoStore } from "../../stores/todos";
import { createPinia, setActivePinia } from "pinia";

describe("Check TopBar", async () => {
  const wrapper = mount(TopBar, {
    global: {
      plugins: [
        createTestingPinia({
          stubActions: false,
          createSpy: vitest.fn,
        }),
      ],
    },
  });
  const store = useToDoStore();
  const buttonWrapper = wrapper.find(".clear-all-wrapper");
  const button = wrapper.find("button");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.ARTICLE);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("tool-bar");
  });

  it("renders child element FilterItem", () => {
    expect(wrapper.findComponent(FilterItem).exists()).toBeTruthy();
  });

  it("renders child elements count", () => {
    expect(wrapper.element.childElementCount).toBe(2);
  });

  it("renders grand child elements count", () => {
    expect(buttonWrapper.element.childElementCount).toBe(1);
  });

  it("renders button wrapper tag name", () => {
    expect(buttonWrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("renders button element", () => {
    expect(button.element.tagName).toEqual(TestEnum.BUTTON);
  });

  it("renders button text", () => {
    expect(button.text()).toEqual("Clear");
  });

  it("renders button in disabled state by default", () => {
    expect(button.attributes().disabled).toBeDefined();
  });

  it("method delete all is sensitive by button click", async () => {
    setActivePinia(createPinia());
    await store.createNewItem(TestEnum.TEST_NAME);
    await wrapper.vm.handleClearAll();
    expect(store.clearAll).toHaveBeenCalledTimes(1);
    expect(store.clearAll).toHaveBeenLastCalledWith();
  });
});
