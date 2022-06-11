import { describe, it, expect } from "vitest";
import NavPanel from "../NavPanel.vue";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import route from "@/router";

describe("NavPanel", async () => {
  const router = createRouter({
    history: createWebHistory(),
    routes: route.getRoutes(),
  });
  const wrapper = mount(NavPanel, {
    plugins: [router],
  });
  const homeLinkElement = wrapper.find('[to="/"]');
  const aboutLinkElement = wrapper.find('[to="/about"]');

  it("renders proper component tag name", () => {
    expect(wrapper.element.children[0].tagName).toEqual("NAV");
  });

  it("renders proper child components amount", () => {
    expect(wrapper.find("nav").element.children.length).toBe(2);
  });

  it("assign proper css class amount", () => {
    expect(wrapper.classes().length).toBe(1);
  });

  it("assign proper css class name", () => {
    expect(wrapper.classes()).include("nav-wrapper");
  });

  it("Home link tag name", () => {
    expect(homeLinkElement.element.tagName).toEqual("ROUTERLINK");
  });

  it("Home link text", () => {
    expect(homeLinkElement.text()).toEqual("Home");
  });

  it("About link tag name", () => {
    expect(aboutLinkElement.element.tagName).toEqual("ROUTERLINK");
  });

  it("About link text", () => {
    expect(aboutLinkElement.text()).toEqual("About");
  });
});
