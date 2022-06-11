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
    expect(wrapper.element.childElementCount).toBe(0);
  });

  it("assigns proper css class", () => {
    expect(wrapper.classes()).toEqual(["popup"]);
  });

  it("renders proper props", () => {
    expect(wrapper.find(".popup").text()).toEqual(testProps);
  });
});
