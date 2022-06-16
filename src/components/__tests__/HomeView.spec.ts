import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "../../views/HomeView.vue";
import ToDoList from "../ToDoList.vue";
import FooterItem from "../FooterItem.vue";
import HeaderItem from "../HeaderItem.vue";

describe("Check HomeView page", async () => {
  const wrapper = mount(HomeView);

  it("renders proper component tag name", () => {
    expect(wrapper.element.tagName).toEqual("DIV");
  });

  it("assigns proper css class", () => {
    expect(wrapper.classes()).toEqual(["home"]);
  });

  it("renders child element HeaderItem", () => {
    expect(wrapper.findComponent(HeaderItem).exists()).toBeTruthy();
  });

  it("renders child element ToDoList", () => {
    expect(wrapper.findComponent(ToDoList).exists()).toBeTruthy();
  });

  it("renders child element FooterItem", () => {
    expect(wrapper.findComponent(FooterItem).exists()).toBeTruthy();
  });

  it("renders child element main", () => {
    expect(wrapper.find("main").classes()).toEqual(["main"]);
  });

  it("renders proper child element count", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });
});
