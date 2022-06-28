import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Error404View from "../../views/Error404View.vue";
import FooterItem from "../FooterItem.vue";
import HeaderItem from "../HeaderItem.vue";
import { TestEnum } from "./model/test-model";

describe("check Error404View", async () => {
  const wrapper = mount(Error404View);
  const title = wrapper.find("h2");
  const link = wrapper.find("a");
  const content = wrapper.find(".error404-content");
  const contentText = content.find("h2");

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("error404");
  });

  it("renders child element HeaderItem", () => {
    expect(wrapper.findComponent(HeaderItem).exists()).toBeTruthy();
  });

  it("renders child element FooterItem", () => {
    expect(wrapper.findComponent(FooterItem).exists()).toBeTruthy();
  });

  it("renders child element main", () => {
    expect(wrapper.find("main").element.className).toEqual("main");
  });

  it("renders child element count", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });

  it("check title of h2 element", () => {
    expect(title.text()).toEqual("Error 404!");
  });

  it("check text of contentText element", () => {
    expect(contentText.text()).toEqual("Resource Not found");
  });

  it("check text of link a element", () => {
    expect(link.text()).toEqual("Go to the Home page");
  });

  it("check attribute of link a element", () => {
    expect(link.attributes()["href"]).toEqual("/");
  });

  it("renders content tag name", () => {
    expect(content.element.tagName).toEqual(TestEnum.SECTION);
  });
});
