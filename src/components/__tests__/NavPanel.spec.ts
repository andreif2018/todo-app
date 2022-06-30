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
  const panel = wrapper.find("nav");
  const tagName = "ROUTER-LINK";

  it("assigns css class", () => {
    expect(panel.element.className).toEqual("nav-wrapper");
  });

  it("renders child components amount", () => {
    expect(panel.element.childElementCount).toBe(2);
  });

  it("Home link tag name", () => {
    expect(homeLinkElement.element.tagName).toEqual(tagName);
  });

  it("Home link text", () => {
    expect(homeLinkElement.text()).toEqual("Home");
  });

  it("About link tag name", () => {
    expect(aboutLinkElement.element.tagName).toEqual(tagName);
  });

  it("About link text", () => {
    expect(aboutLinkElement.text()).toEqual("About");
  });
});
