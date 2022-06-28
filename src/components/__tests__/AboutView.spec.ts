import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AboutView from "../../views/AboutView.vue";
import FooterItem from "../FooterItem.vue";
import HeaderItem from "../HeaderItem.vue";
import { TestEnum } from "./model/test-model";

describe("Check AboutView page", async () => {
  const wrapper = mount(AboutView);
  const main = wrapper.find("main");
  const feature = wrapper.find(".feature-container");
  const list = feature.element.children[1];

  it("renders component tag name", () => {
    expect(wrapper.element.tagName).toEqual(TestEnum.DIV);
  });

  it("assigns css class", () => {
    expect(wrapper.element.className).toEqual("about");
  });

  it("renders child element HeaderItem", () => {
    expect(wrapper.findComponent(HeaderItem).exists()).toBeTruthy();
  });

  it("renders child element FooterItem", () => {
    expect(wrapper.findComponent(FooterItem).exists()).toBeTruthy();
  });

  it("renders child element main", () => {
    expect(main.element.className).toEqual("main");
  });

  it("renders child element count", () => {
    expect(wrapper.element.childElementCount).toBe(3);
  });

  it("renders child element count in main element", () => {
    expect(main.element.childElementCount).toBe(3);
  });

  it("main element child elements count", () => {
    expect(main.element.childElementCount).toBe(3);
  });

  it("main element first child component text", () => {
    expect(main.element.children[0].textContent).toEqual("This is ToDo App!");
  });

  it("main element first child component tag name", () => {
    expect(main.element.children[0].tagName).toEqual("P");
  });

  it("main element second child component text", () => {
    expect(main.element.children[1].textContent).toEqual("Have Fun :)");
  });

  it("main element second child component tag name", () => {
    expect(main.element.children[1].tagName).toEqual("P");
  });

  it("div feature tag name", () => {
    expect(feature.element.tagName).toEqual(TestEnum.DIV);
  });

  it("div feature child elements count", () => {
    expect(feature.element.childElementCount).toBe(5);
  });

  it("div feature first child component tag name", () => {
    expect(feature.element.children[0].tagName).toEqual("P");
  });

  it("div feature first child component text", () => {
    expect(feature.element.children[0].textContent).toEqual(
      "Available features:"
    );
  });

  it("features list element tag name", () => {
    expect(list.tagName).toEqual("UL");
  });

  it("features list element child element count", () => {
    expect(list.childElementCount).toBe(9);
  });

  it("features list 1st child element", () => {
    expect(list.firstElementChild?.tagName).toEqual(TestEnum.LI);
  });

  it("features list 2nd child element", () => {
    expect(list.children[1]?.tagName).toEqual(TestEnum.LI);
  });

  it("features list 3rd child element", () => {
    expect(list.children[2]?.tagName).toEqual(TestEnum.LI);
  });

  it("features list 4th child element", () => {
    expect(list.children[3]?.tagName).toEqual(TestEnum.LI);
  });

  it("features list 5th child element", () => {
    expect(list.children[4]?.tagName).toEqual(TestEnum.LI);
  });

  it("features list 6th child element", () => {
    expect(list.children[5]?.tagName).toEqual(TestEnum.LI);
  });

  it("features list 7th child element", () => {
    expect(list.children[6]?.tagName).toEqual(TestEnum.LI);
  });

  it("features list 8th child element", () => {
    expect(list.children[7]?.tagName).toEqual(TestEnum.LI);
  });

  it("features list 9th child element", () => {
    expect(list.children[8]?.tagName).toEqual(TestEnum.LI);
  });

  it("div feature 5rd child element", () => {
    expect(feature.element.children[4]?.tagName).toEqual("P");
  });

  it("features list 1st child element text", () => {
    expect(list.children[0]?.textContent).toEqual("Add ToDo");
  });

  it("features list 2nd child element text", () => {
    expect(list.children[1]?.textContent).toEqual("Complete ToDo");
  });

  it("features list 3rd child element text", () => {
    expect(list.children[2]?.textContent).toEqual("Set priority for ToDo");
  });

  it("features list 4th child element text", () => {
    expect(list.children[3]?.textContent).toEqual("Update ToDo");
  });

  it("features list 5th child element text", () => {
    expect(list.children[4]?.textContent).toEqual("View ToDo details");
  });

  it("features list 6th child element text", () => {
    expect(list.children[5]?.textContent).toEqual("Delete ToDo");
  });

  it("features list 7th child element text", () => {
    expect(list.children[6]?.textContent).toEqual("Delete All ToDo's");
  });

  it("features list 8th child element text", () => {
    expect(list.children[7]?.textContent).toEqual("Filtering list");
  });

  it("features list 9th child element text", () => {
    expect(list.children[8]?.textContent).toEqual(
      "Change order by Drag and Drop"
    );
  });

  it("div feature 5rd child element text", () => {
    expect(feature.element.children[4]?.textContent).toEqual(
      "Adding is available by button click or by `ENTER` key pressing "
    );
  });
});
