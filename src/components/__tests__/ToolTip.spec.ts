import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ToolTip from "../ToolTip.vue";
import { TestEnum } from "./model/test-model";

describe("ToolTip", () => {
  const testProps = "test tooltip";
  const updatedProps = "updated tooltip";
  const wrapper = mount(ToolTip, { props: { msg: testProps } });

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(0);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("popup");
  });

  it("renders props", () => {
    expect(wrapper.find(".popup").text()).toEqual(testProps);
  });

  it("renders updated props", async () => {
    await wrapper.setProps({ msg: updatedProps });
    expect(wrapper.find(".popup").text()).toEqual(updatedProps);
  });
});
