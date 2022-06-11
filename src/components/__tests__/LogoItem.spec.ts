import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import LogoItem from "../LogoItem.vue";

describe("LogoItem", () => {
  const wrapper = shallowMount(LogoItem);

  it("assign proper css class amount", () => {
    expect(wrapper.classes().length).toBe(1);
  });

  it("assign proper css class name", () => {
    expect(wrapper.classes()).include("logo");
  });

  it("assign proper css class", () => {
    expect(wrapper.element).toMatchSnapshot("snapshot");
  });
});
