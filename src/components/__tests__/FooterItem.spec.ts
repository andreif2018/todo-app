import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FooterItem from "../FooterItem.vue";
import LogoItem from "../LogoItem.vue";
import NavPanel from "../NavPanel.vue";

describe("FooterItem", () => {
  const wrapper = mount(FooterItem);
  const link = wrapper.find(".github");

  it("renders proper component tag name", () => {
    expect(wrapper.element.tagName).toEqual("FOOTER");
  });

  it("assigns proper css class name", () => {
    expect(wrapper.classes()).toEqual(["footer"]);
  });

  it("renders proper component structure", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });

  it("renders child element LogoItem", () => {
    expect(wrapper.findComponent(LogoItem).exists()).toBe(true);
  });

  it("renders child element NavPanel", () => {
    expect(wrapper.findComponent(NavPanel).exists()).toBe(true);
  });

  it("renders proper child link element", () => {
    expect(link.element.tagName).toEqual("A");
  });

  it("assigns proper css class for link", () => {
    expect(link.classes()).toEqual(["github"]);
  });

  it("assigns proper href attribute for link", () => {
    expect(link.attributes("href")).toEqual(
      "https://github.com/andreif2018/todo-app"
    );
  });

  it("assigns proper target attribute for link", () => {
    expect(link.attributes("target")).toEqual("_blank");
  });

  it("assigns proper target attribute for link", () => {
    expect(link.attributes("rel")).toEqual("noopener noreferrer");
  });

  it("renders proper text value for link", () => {
    expect(link.text()).toEqual("View in GitHub");
  });
});
