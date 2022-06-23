import { defineStore } from "pinia";
import type { IStore, ITodo } from "@/model/model";
import { v4 as uuid } from "uuid";

export const useToDoStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      todos: {
        list: [],
        tabs: [],
      },
    } as IStore),

  actions: {
    createNewItem(value: string) {
      if (!value) return;
      this.todos.list.push({
        _id: uuid(),
        todoName: value,
        createdTime: new Date().toLocaleString(),
        modifiedTime: undefined,
        completedTime: undefined,
        isDone: false,
      });
    },

    updateItem(todoID: string, payload: string) {
      if (!todoID || !payload) return;
      const index = this.findIndexById(todoID);
      if (index !== -1) {
        this.todos.list[index].todoName = payload;
        this.todos.list[index].modifiedTime = new Date().toLocaleString();
      }
    },

    checkToDo(todoID: string) {
      const index = this.findIndexById(todoID);
      if (index !== -1) {
        this.todos.list[index].isDone = !this.todos.list[index].isDone;
        if (this.todos.list[index].isDone) {
          this.todos.list[index].completedTime = new Date().toLocaleString();
        } else {
          this.todos.list[index].completedTime = undefined;
        }
      }
    },

    deleteItem(todoID: string) {
      const index = this.findIndexById(todoID);
      if (index === -1) return;
      this.todos.list.splice(index, 1);
    },

    clearAll() {
      this.todos.list = [];
    },

    findIndexById(todoID: string) {
      return this.todos.list.findIndex((item: ITodo) => item._id === todoID);
    },

    setTab(filterName: string, status: boolean) {
      if (!filterName || !status) {
        return;
      }
      if (status && !this.todos.tabs.includes(filterName)) {
        this.todos.tabs.push(filterName);
      }
    },

    resetTab(filterName: string, status: boolean) {
      if (!filterName || !status) {
        return;
      }
      if (!status && this.todos.tabs.includes(filterName)) {
        this.todos.tabs.push(filterName);
        this.todos.tabs.filter((item) => item === filterName);
      }
    },
  },
});
