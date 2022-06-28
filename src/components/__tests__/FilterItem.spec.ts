import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import FilterItem from "../FilterItem.vue";
import TabItem from "../TabItem.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";

describe("FilterItem", () => {
  const wrapper = mount(FilterItem, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vitest.fn,
        }),
      ],
    },
  });

  const filterTitle = wrapper.find(".status-filters-title");
  const tabContainer = wrapper.find(".box-wrapper");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.ARTICLE);
  });

  it("assigns css class name", () => {
    expect(wrapper.element.className).toEqual("filter-container");
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(2);
  });

  it("renders child element TabItem", () => {
    expect(wrapper.findComponent(TabItem).exists()).toBe(true);
  });

  it("renders 1st child element tag name", () => {
    expect(filterTitle.element.tagName).toEqual("P");
  });

  it("renders 2nd child element tag name", () => {
    expect(tabContainer.element.tagName).toEqual(TestEnum.ARTICLE);
  });

  it("renders 2nd child element structure", () => {
    expect(tabContainer.element.childElementCount).toBe(2);
  });

  it("renders linked text", () => {
    expect(filterTitle.text()).toEqual("Status Filters:");
  });
});
