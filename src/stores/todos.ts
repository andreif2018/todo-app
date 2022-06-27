import { defineStore } from "pinia";
import type { IStore, ITodo } from "@/model/model";
import { v4 as uuid } from "uuid";
import { FilterEnum } from "@/model/model";

export const useToDoStore = defineStore({
  id: "mainStore",
  state: () =>
    ({
      todos: {
        list: [],
        hideCompleted: false,
        hideLowPriority: false,
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
        isCompleted: false,
        isUrgent: false,
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
        this.todos.list[index].isCompleted =
          !this.todos.list[index].isCompleted;
        if (this.todos.list[index].isCompleted) {
          this.todos.list[index].completedTime = new Date().toLocaleString();
        } else {
          this.todos.list[index].completedTime = undefined;
        }
      }
    },

    setPriority(todoID: string) {
      const index = this.findIndexById(todoID);
      if (index !== -1) {
        this.todos.list[index].isUrgent = !this.todos.list[index].isUrgent;
        this.todos.list[index].modifiedTime = new Date().toLocaleString();
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

    setFilter(filterName: string) {
      if (filterName === FilterEnum.COMPLETED) {
        this.todos.hideCompleted = !this.todos.hideCompleted;
      } else {
        this.todos.hideLowPriority = !this.todos.hideLowPriority;
      }
    },
  },
});
