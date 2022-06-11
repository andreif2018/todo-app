import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ToolTip from "../ToolTip.vue";

describe("ToolTip", () => {
  const testProps = "test tooltip";
  const wrapper = mount(ToolTip, { props: { msg: testProps } });

  it("renders proper component tag name", () => {
    expect(wrapper.element.tagName).toEqual("DIV");
  });

  it("renders proper component structure", () => {
    expect(wrapper.element.children.length).toBe(0);
  });

  it("assign proper css class amount", () => {
    expect(wrapper.classes().length).toBe(1);
  });

  it("assign proper css class name", () => {
    expect(wrapper.classes()).include("popup");
  });

  it("contains proper props", () => {
    expect(wrapper.find(".popup").text()).toEqual(testProps);
  });
});
