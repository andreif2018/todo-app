import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ToDoList from "../ToDoList.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(ToDoList, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
