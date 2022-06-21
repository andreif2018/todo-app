import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import ToDoList from "../../components/ToDoList.vue";
import ToolTip from "../../components/ToolTip.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";

describe("Check ToDoList", async () => {
  const wrapper = mount(ToDoList, {
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

  it("handle tip content", async () => {
    const message = "this is tip content";
    await wrapper.vm.handleTip(message);
    expect(wrapper.vm.tipContent).toEqual(message);
  });
});
