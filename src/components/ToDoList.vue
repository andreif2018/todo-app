<script setup lang="ts">
import { ref } from "vue";
import AddToDo from "@/components/AddToDo.vue";
import ToDoItem from "@/components/ToDoItem.vue";
import ToolTip from "@/components/ToolTip.vue";
import type { ITodo } from "@/model";
import { onDrop, onDragStart } from "@/utils";

let id = 0;
let todoList = ref([]);
let list: ITodo[] = todoList.value;
const tipContent = ref("");

const addTodo = (newTodo: string) => {
  const newItem: ITodo = {
    _id: id++,
    text: newTodo,
    createdTime: new Date().toLocaleString(),
    modifiedTime: undefined,
    isDone: false,
  };
  list.push(newItem);
};

const saveTodo = (todoID: number, message: string) => {
  list.forEach((item: ITodo) => {
    if (item._id === todoID) {
      item.text = message;
      item.modifiedTime = new Date().toLocaleString();
    }
  });
};

const removeTodo = (index: number) => {
  list.splice(index, 1);
};

const checkTodo = (id: number) => {
  list.forEach((item: ITodo) => {
    if (item._id === id) {
      item.modifiedTime = new Date().toLocaleString();
      item.isDone = !item.isDone;
    }
  });
};

const handleTip = (result: string) => {
  tipContent.value = result;
};
</script>

<template>
  <AddToDo @save="(msg) => addTodo(msg)" />
  <div class="list-wrapper">
    <ToolTip v-if="tipContent" :msg="tipContent" />
    <ol class="list-container" @dragenter.prevent @dragover.prevent>
      <ToDoItem
        v-for="(item, index) in todoList"
        :key="item._id"
        :title="item.text"
        :created="item.createdTime"
        :modified="item.modifiedTime"
        :isDone="item.isDone"
        @save="(msg) => saveTodo(item._id, msg)"
        @remove="removeTodo(index)"
        @hint="(msg) => handleTip(msg)"
        @check="checkTodo(item._id)"
        @dragstart="onDragStart($event, index)"
        @drop="onDrop($event, index, list)"
      />
    </ol>
  </div>
</template>

<style scoped>
.list-container {
  padding: 2vh;
  border-radius: 10px;
  border: 1px solid slategray;
  width: 70vw;
  height: 59vh;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2vh;
  overflow-y: scroll;
}

.list-wrapper {
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 1vh;
  overflow-y: scroll;
}
</style>
