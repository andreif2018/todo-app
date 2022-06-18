import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import LogoItem from "../LogoItem.vue";

describe("LogoItem", () => {
  const wrapper = shallowMount(LogoItem);

  it("assigns css class", () => {
    expect(wrapper.classes()).toEqual(["logo"]);
  });

  it("assigns style for css class", () => {
    expect(wrapper.element).toMatchSnapshot("snapshot");
  });
});
