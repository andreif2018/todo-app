import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useToDoStore } from "@/stores/todos";
import { TestEnum } from "./model/test-model";

describe("Todo Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("check default state", () => {
    const store = useToDoStore();
    expect(store.todos).toStrictEqual([]);
  });

  it("adding new item", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    expect(store.todos.length).toBe(1);
    expect(store.todos[0].todoName).toEqual(TestEnum.TEST_NAME);
    expect(store.todos[0].modifiedTime).toBeFalsy();
    expect(store.todos[0].completedTime).toBeFalsy();
    expect(store.todos[0].isDone).toBeFalsy();
  });

  it("clear all", () => {
    const store = useToDoStore();
    store.createNewItem("1st item");
    expect(store.todos.length).toBe(1);
    store.clearAll();
    expect(store.todos).toStrictEqual([]);
    store.createNewItem("new 1st item");
    store.createNewItem("2nd item");
    expect(store.todos.length).toBe(2);
    store.clearAll();
    expect(store.todos).toStrictEqual([]);
  });

  it("update item", () => {
    const store = useToDoStore();
    store.createNewItem("1st item");
    const todoID = store.todos[0]._id;
    store.updateItem(todoID, TestEnum.TEST_NAME);
    expect(store.todos.length).toBe(1);
    expect(store.todos[0].todoName).toEqual(TestEnum.TEST_NAME);
    expect(store.todos[0].modifiedTime).toBeTruthy();
    expect(store.todos[0].completedTime).toBeFalsy();
    expect(store.todos[0].isDone).toBeFalsy();
  });

  it("check item", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos[0]._id;
    store.checkToDo(todoID);
    expect(store.todos.length).toBe(1);
    expect(store.todos[0].todoName).toEqual(TestEnum.TEST_NAME);
    expect(store.todos[0].modifiedTime).toBeFalsy();
    expect(store.todos[0].completedTime).toBeTruthy();
    expect(store.todos[0].isDone).toBeTruthy();
  });

  it("uncheck item", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos[0]._id;
    store.checkToDo(todoID);
    expect(store.todos[0].completedTime).toBeTruthy();
    expect(store.todos[0].isDone).toBeTruthy();
    store.checkToDo(todoID);
    expect(store.todos[0].completedTime).toBeFalsy();
    expect(store.todos[0].isDone).toBeFalsy();
  });

  it("delete item", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos[0]._id;
    store.deleteItem(todoID);
    expect(store.todos.length).toBe(0);
  });

  it("method createNewItem without argument", () => {
    const store = useToDoStore();
    store.createNewItem("");
    expect(store.todos.length).toBe(0);
  });

  it("method delete with incorrect argument", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    expect(store.todos.length).toBe(1);
    const todoID = store.todos[0]._id;
    store.deleteItem(todoID.slice(-1));
    expect(store.todos.length).toBe(1);
  });

  it("method updateItem with incorrect argument", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    expect(store.todos[0].todoName).toEqual(TestEnum.TEST_NAME);
    const todoID = store.todos[0]._id;
    store.updateItem(todoID.slice(-1), "new todo name");
    expect(store.todos[store.findIndexById(todoID)].todoName).toEqual(
      TestEnum.TEST_NAME
    );
    store.updateItem(todoID, "");
    expect(store.todos[store.findIndexById(todoID)].todoName).toEqual(
      TestEnum.TEST_NAME
    );
    store.updateItem(todoID.slice(-1), "");
    expect(store.todos[store.findIndexById(todoID)].todoName).toEqual(
      TestEnum.TEST_NAME
    );
  });
});
