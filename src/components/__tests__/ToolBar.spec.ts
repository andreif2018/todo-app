import { describe, expect, it, vi, vitest } from "vitest";
import { mount } from "@vue/test-utils";
import ToolBar from "../ToolBar.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";
import { createPinia, setActivePinia } from "pinia";
import { useToDoStore } from "../../stores/todos";

describe("Check ToolBar Component", async () => {
  const wrapper = mount(ToolBar, {
    props: {
      itemId: TestEnum.TEST_ID,
      itemName: TestEnum.TEST_NAME,
      isDisabled: true,
    },
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vitest.fn,
        }),
      ],
    },
  });

  const editButton = wrapper.find(".edit");
  const infoButton = wrapper.find(".info");
  const removeButton = wrapper.find(".remove");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("button-container");
  });

  it("render child elements count", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });

  it("render edit button", () => {
    expect(editButton.element.tagName).toBe(TestEnum.BUTTON);
  });

  it("render info button", () => {
    expect(infoButton.element.tagName).toBe(TestEnum.BUTTON);
  });

  it("render remove button", () => {
    expect(removeButton.element.tagName).toBe(TestEnum.BUTTON);
  });

  it("handle remove method", async () => {
    const store = useToDoStore();
    setActivePinia(createPinia());
    await store.createNewItem(TestEnum.TEST_NAME);
    const spy = (store.deleteItem = vi.fn());
    await wrapper.vm.remove();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("sensitive to props update", async () => {
    const store = useToDoStore();
    setActivePinia(createPinia());
    await store.createNewItem(TestEnum.TEST_NAME);
    await wrapper.setProps({
      itemId: TestEnum.TEST_ID,
      itemName: TestEnum.TEST_NAME,
      isDisabled: false,
    });
    expect(wrapper.find(".save").exists()).toBe(true);
  });
});
