import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import TodoList from "../TodoList.vue";
import HintItem from "../HintItem.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";

describe("Check TodoList", async () => {
  const wrapper = mount(TodoList, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vitest.fn,
        }),
      ],
    },
  });
  const container = wrapper.find(".list-container");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("list-wrapper");
  });

  it("renders child elements count correct", () => {
    expect(wrapper.element.childElementCount).toBe(1);
  });

  it("not renders child element HintItem due v-if", () => {
    expect(wrapper.findComponent(HintItem).exists()).toBeFalsy();
  });

  it("renders container", () => {
    expect(container.element.tagName).toEqual("OL");
  });

  it("renders container default child elements count", () => {
    expect(container.element.childElementCount).toBe(0);
  });

  it("handle tip content", async () => {
    const message = "this is tip content";
    await wrapper.vm.handleTip(message);
    expect(wrapper.vm.tipContent).toEqual(message);
  });
});
