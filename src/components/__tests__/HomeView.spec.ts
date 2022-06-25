import { describe, it, expect, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../../views/HomeView.vue";
import TodoList from "../TodoList.vue";
import FooterItem from "../FooterItem.vue";
import HeaderItem from "../HeaderItem.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";

describe("Check HomeView page", async () => {
  const wrapper = mount(HomeView, {
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

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("home");
  });

  it("renders child element HeaderItem", () => {
    expect(wrapper.findComponent(HeaderItem).exists()).toBeTruthy();
  });

  it("renders child element TodoList", () => {
    expect(wrapper.findComponent(TodoList).exists()).toBeTruthy();
  });

  it("renders child element FooterItem", () => {
    expect(wrapper.findComponent(FooterItem).exists()).toBeTruthy();
  });

  it("renders child element main", () => {
    expect(wrapper.find("main").element.className).toEqual("main");
  });

  it("renders child element count", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });
});
