import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ModalPopup from "../ModalPopup.vue";
import { TestEnum } from "./test-model";

describe("Check Modal Popup Component", async () => {
  const wrapper = mount(ModalPopup, {
    props: {
      msg: {
        todo: "item",
        created: "time",
        modified: "time 2",
        completed: "time 3",
      },
    },
  });
  const messageContainer = wrapper.find(".message-wrapper");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class", () => {
    expect(wrapper.classes()).toEqual(["modal"]);
  });

  it("render child elements count", () => {
    expect(wrapper.element.childElementCount).toBe(2);
  });

  it("render message-wrapper", () => {
    expect(messageContainer.element.tagName).toEqual(TestEnum.DIV);
  });

  it("render message-wrapper text", () => {
    expect(messageContainer.element.textContent).toEqual(
      "Todo: itemCreated: timeModified: time 2Completed: time 3"
    );
  });
});
