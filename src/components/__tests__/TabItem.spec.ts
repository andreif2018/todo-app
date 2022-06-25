import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import TabItem from "../TabItem.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";

describe("TabItem", () => {
  const wrapper = mount(TabItem, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vitest.fn,
        }),
      ],
    },
  });

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class name", () => {
    expect(wrapper.element.className).toEqual("tab-wrapper");
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(2); // 2nd label is by v-if hidden
  });

  it("renders 1st child element label", () => {
    expect(wrapper.element.firstElementChild?.tagName).toEqual(TestEnum.LABEL);
  });

  it("renders 1st child element linked text", () => {
    expect(wrapper.element.firstElementChild?.textContent).toEqual("Hide");
  });

  it("renders 2nd child element label", () => {
    expect(wrapper.element.lastElementChild?.tagName).toEqual(TestEnum.INPUT);
  });

  it("renders 2nd child element class", () => {
    expect(wrapper.element.lastElementChild?.className).toEqual("custom-tab");
  });
});
