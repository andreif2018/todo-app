import { defineStore } from "pinia";
import type { IStore, ITodo } from "@/model/model";
import { v4 as uuid } from "uuid";

export const useToDoStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      todos: [],
    } as IStore),

  actions: {
    createNewItem(value: string) {
      if (!value) return;
      this.todos.push({
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
        this.todos[index].todoName = payload;
        this.todos[index].modifiedTime = new Date().toLocaleString();
      }
    },

    checkToDo(todoID: string) {
      const index = this.findIndexById(todoID);
      if (index !== -1) {
        this.todos[index].isDone = !this.todos[index].isDone;
        if (this.todos[index].isDone) {
          this.todos[index].completedTime = new Date().toLocaleString();
        } else {
          this.todos[index].completedTime = undefined;
        }
      }
    },

    deleteItem(todoID: string) {
      const index = this.findIndexById(todoID);
      if (index === -1) return;
      this.todos.splice(index, 1);
    },

    clearAll() {
      this.todos = [];
    },

    findIndexById(todoID: string) {
      return this.todos.findIndex((item: ITodo) => item._id === todoID);
    },
  },
});
