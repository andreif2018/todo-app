import { describe, it, expect, beforeEach } from "vitest";
import { useToDoStore } from "../../stores/todos";
import { createPinia, setActivePinia } from "pinia";
import { TestEnum } from "./model/test-model";
import { swapItems } from "../../utils/drag-and-drop-util";

describe("Todo Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("swap method", async () => {
    const store = useToDoStore();
    setActivePinia(createPinia());
    await store.createNewItem(TestEnum.TEST_NAME);
    await store.createNewItem(TestEnum.TEST_NAME + 2);
    expect(store.todos.list[0].todoName).toStrictEqual(TestEnum.TEST_NAME);
    expect(store.todos.list[1].todoName).toStrictEqual(TestEnum.TEST_NAME + 2);
    swapItems(0, 1, store.todos.list);
    expect(store.todos.list[0].todoName).toStrictEqual(TestEnum.TEST_NAME + 2);
    expect(store.todos.list[1].todoName).toStrictEqual(TestEnum.TEST_NAME);
  });
});
