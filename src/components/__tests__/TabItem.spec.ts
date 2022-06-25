import { describe, it, expect, vitest, vi } from "vitest";
import { mount } from "@vue/test-utils";
import TabItem from "../TabItem.vue";
import { TestEnum } from "./model/test-model";
import { createTestingPinia } from "@pinia/testing";
import { useToDoStore } from "../../stores/todos";
import { createPinia, setActivePinia } from "pinia";

describe("TabItem", () => {
  const wrapper = mount(TabItem, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vitest.fn,
        }),
      ],
    },
  });

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class name", () => {
    expect(wrapper.element.className).toEqual("tab-wrapper");
  });

  it("renders component structure", () => {
    expect(wrapper.element.childElementCount).toBe(2); // 2nd label is by v-if hidden
  });

  it("renders 1st child element label", () => {
    expect(wrapper.element.firstElementChild?.tagName).toEqual(TestEnum.LABEL);
  });

  it("renders 1st child element linked text", () => {
    expect(wrapper.element.firstElementChild?.textContent).toEqual("Show");
  });

  it("renders 2nd child element label", () => {
    expect(wrapper.element.lastElementChild?.tagName).toEqual(TestEnum.INPUT);
  });

  it("renders 2nd child element class", () => {
    expect(wrapper.element.lastElementChild?.className).toEqual("custom-tab");
  });

  it("renders default check status of checkbox", () => {
    expect(wrapper.vm.isCheckedRef).toBe(false);
  });

  it("sensitive to checking checkbox", async () => {
    const store = useToDoStore();
    setActivePinia(createPinia());
    const spy = (store.setFilter = vi.fn());
    await wrapper.trigger(TestEnum.CLICK);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.isCheckedRef).toBe(true);
  });

  it("set to default check status of checkbox by click", async () => {
    await wrapper.trigger(TestEnum.CLICK);
    expect(wrapper.vm.isCheckedRef).toBe(false);
  });

  it("renders 1st child element linked text if checked", async () => {
    await wrapper.trigger(TestEnum.CLICK);
    expect(wrapper.element.firstElementChild?.textContent).toEqual("Hide");
  });
});
