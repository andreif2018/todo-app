import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FooterItem from "../FooterItem.vue";
import LogoItem from "../LogoItem.vue";
import NavPanel from "../NavPanel.vue";
import { TestEnum } from "./model/test-model";

describe("FooterItem", () => {
  const wrapper = mount(FooterItem);
  const link = wrapper.find(".github");
  const content = wrapper.find(".footer-content");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual("FOOTER");
  });

  it("assigns css class name", () => {
    expect(wrapper.element.className).toEqual("footer");
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(1);
  });

  it("renders child component structure", () => {
    expect(content.element.childElementCount).toBe(3);
  });

  it("renders child component structure", () => {
    expect(content.element.tagName).toEqual(TestEnum.ARTICLE);
  });

  it("renders child element LogoItem", () => {
    expect(wrapper.findComponent(LogoItem).exists()).toBe(true);
  });

  it("renders child element NavPanel", () => {
    expect(wrapper.findComponent(NavPanel).exists()).toBe(true);
  });

  it("renders child link element", () => {
    expect(link.element.tagName).toEqual("A");
  });

  it("assigns css class for link", () => {
    expect(link.element.className).toEqual("github");
  });

  it("assigns href attribute for link", () => {
    expect(link.attributes("href")).toEqual(
      "https://github.com/andreif2018/todo-app"
    );
  });

  it("assigns target attribute for link", () => {
    expect(link.attributes("target")).toEqual("_blank");
  });

  it("assigns target attribute for link", () => {
    expect(link.attributes("rel")).toEqual("noopener noreferrer");
  });

  it("renders text value for link", () => {
    expect(link.text()).toEqual("View in GitHub");
  });
});
