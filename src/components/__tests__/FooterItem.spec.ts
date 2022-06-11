import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import FooterItem from "../FooterItem.vue";

describe("FooterItem", () => {
  const testProps = "test tooltip";
  const wrapper = mount(FooterItem, { props: { msg: testProps } });

  it("renders proper component tag name", () => {
    expect(wrapper.element.tagName).toEqual("FOOTER");
  });

  it("assign proper css class amount", () => {
    expect(wrapper.classes().length).toBe(1);
  });

  it("assign proper css class name", () => {
    expect(wrapper.classes()).include("footer");
  });

  it("renders proper component structure", () => {
    expect(wrapper.element.children.length).toBe(3);
  });
});
