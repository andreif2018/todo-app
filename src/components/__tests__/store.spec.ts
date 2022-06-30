import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach } from "vitest";
import { useToDoStore } from "@/stores/todos";
import { TestEnum } from "./model/test-model";
import { FilterEnum } from "../../model/model";

describe("store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("check default state", () => {
    const store = useToDoStore();
    expect(store.todos.list).toStrictEqual([]);
  });

  it("adding new item", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    expect(store.todos.list.length).toBe(1);
    expect(store.todos.list[0].todoName).toEqual(TestEnum.TEST_NAME);
    expect(store.todos.list[0].modifiedTime).toBeFalsy();
    expect(store.todos.list[0].completedTime).toBeFalsy();
    expect(store.todos.list[0].isCompleted).toBeFalsy();
    expect(store.todos.titles).toEqual([TestEnum.TEST_NAME]);
  });

  it("clear all", () => {
    const store = useToDoStore();
    store.createNewItem("1st item");
    expect(store.todos.list.length).toBe(1);
    store.clearAll();
    expect(store.todos.list).toStrictEqual([]);
    store.createNewItem("new 1st item");
    store.createNewItem("2nd item");
    expect(store.todos.list.length).toBe(2);
    store.clearAll();
    expect(store.todos.list).toStrictEqual([]);
    expect(store.todos.titles).toStrictEqual([]);
  });

  it("update item", () => {
    const store = useToDoStore();
    store.createNewItem("1st item");
    const todoID = store.todos.list[0]._id;
    store.updateItem(todoID, TestEnum.TEST_NAME);
    expect(store.todos.list.length).toBe(1);
    expect(store.todos.list[0].todoName).toEqual(TestEnum.TEST_NAME);
    expect(store.todos.list[0].modifiedTime).toBeTruthy();
    expect(store.todos.list[0].completedTime).toBeFalsy();
    expect(store.todos.list[0].isCompleted).toBeFalsy();
    expect(store.todos.titles).toEqual([TestEnum.TEST_NAME]);
  });

  it("check item", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.checkToDo(todoID);
    expect(store.todos.list.length).toBe(1);
    expect(store.todos.list[0].todoName).toEqual(TestEnum.TEST_NAME);
    expect(store.todos.list[0].modifiedTime).toBeFalsy();
    expect(store.todos.list[0].completedTime).toBeTruthy();
    expect(store.todos.list[0].isCompleted).toBeTruthy();
  });

  it("uncheck item", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.checkToDo(todoID);
    store.checkToDo(todoID);
    expect(store.todos.list[0].completedTime).toBeFalsy();
    expect(store.todos.list[0].isCompleted).toBeFalsy();
  });

  it("delete item", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.deleteItem(todoID);
    expect(store.todos.list.length).toBe(0);
    expect(store.todos.titles).toEqual([]);
  });

  it("method createNewItem without argument", () => {
    const store = useToDoStore();
    store.createNewItem("");
    expect(store.todos.list.length).toBe(0);
    expect(store.todos.titles).toEqual([]);
  });

  it("method delete with incorrect argument", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.deleteItem(todoID.slice(-1));
    expect(store.todos.list.length).toBe(1);
    expect(store.todos.titles).toEqual([TestEnum.TEST_NAME]);
  });

  it("method updateItem with incorrect argument todoID", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.updateItem(todoID.slice(-1), "new todo name");
    expect(store.todos.list[store.findIndexById(todoID)].todoName).toEqual(
      TestEnum.TEST_NAME
    );
    expect(store.todos.titles).toEqual([TestEnum.TEST_NAME]);
  });

  it("method updateItem with incorrect argument empty payload", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.updateItem(todoID, "");
    expect(store.todos.list[store.findIndexById(todoID)].todoName).toEqual(
      TestEnum.TEST_NAME
    );
    expect(store.todos.titles).toEqual([TestEnum.TEST_NAME]);
  });

  it("method updateItem with both arguments incorrect", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.updateItem(todoID.slice(-1), "");
    expect(store.todos.list[store.findIndexById(todoID)].todoName).toEqual(
      TestEnum.TEST_NAME
    );
    expect(store.todos.titles).toEqual([TestEnum.TEST_NAME]);
  });

  it("set filter hide completed true", () => {
    const store = useToDoStore();
    store.setFilter(FilterEnum.COMPLETED);
    expect(store.todos.hideCompleted).toBe(true);
  });

  it("set filter hide completed false", () => {
    const store = useToDoStore();
    store.setFilter(FilterEnum.COMPLETED);
    store.setFilter(FilterEnum.COMPLETED);
    expect(store.todos.hideCompleted).toBe(false);
  });

  it("set filter hide priority true", () => {
    const store = useToDoStore();
    store.setFilter(FilterEnum.NON_URGENT_ITEMS);
    expect(store.todos.hideLowPriority).toBe(true);
  });

  it("set filter hide priority false", () => {
    const store = useToDoStore();
    store.setFilter(FilterEnum.NON_URGENT_ITEMS);
    store.setFilter(FilterEnum.NON_URGENT_ITEMS);
    expect(store.todos.hideLowPriority).toBe(false);
  });

  it("set priority", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.setPriority(todoID);
    expect(store.todos.list.length).toBe(1);
    expect(store.todos.list[0].todoName).toEqual(TestEnum.TEST_NAME);
    expect(store.todos.list[0].modifiedTime).toBeTruthy();
    expect(store.todos.list[0].isUrgent).toBeTruthy();
  });

  it("unset priority", () => {
    const store = useToDoStore();
    store.createNewItem(TestEnum.TEST_NAME);
    const todoID = store.todos.list[0]._id;
    store.setPriority(todoID);
    store.setPriority(todoID);
    expect(store.todos.list.length).toBe(1);
    expect(store.todos.list[0].todoName).toEqual(TestEnum.TEST_NAME);
    expect(store.todos.list[0].modifiedTime).toBeTruthy();
    expect(store.todos.list[0].isUrgent).toBeFalsy();
  });
});
