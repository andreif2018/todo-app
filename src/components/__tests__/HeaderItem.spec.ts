import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HeaderItem from "../HeaderItem.vue";
import LogoItem from "../LogoItem.vue";
import NavPanel from "../NavPanel.vue";
import { TestEnum } from "./test-model";

describe("HeaderItem", () => {
  const testProps = "test header";
  const wrapper = mount(HeaderItem, { props: { msg: testProps } });
  const childDiv = wrapper.find(".title");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual("HEADER");
  });

  it("assigns css class", () => {
    expect(wrapper.classes()).toEqual(["header"]);
  });

  it("renders props", () => {
    expect(childDiv.find("H1").text()).toEqual(testProps);
  });

  it("renders child element tag name", () => {
    expect(childDiv.element.tagName).toEqual(TestEnum.DIV);
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });

  it("renders child element LogoItem", () => {
    expect(wrapper.findComponent(LogoItem).exists()).toBe(true);
  });

  it("renders child element NavPanel", () => {
    expect(wrapper.findComponent(NavPanel).exists()).toBe(true);
  });
});
