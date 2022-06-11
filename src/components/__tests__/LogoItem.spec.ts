import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import LogoItem from "../LogoItem.vue";

describe("LogoItem", () => {
  const wrapper = shallowMount(LogoItem);

  it("assigns proper css class", () => {
    expect(wrapper.classes()).toEqual(["logo"]);
  });

  it("assigns proper style for css class", () => {
    expect(wrapper.element).toMatchSnapshot("snapshot");
  });
});
