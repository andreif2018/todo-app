<script setup lang="ts">
import { ref } from "vue";
import AddToDo from "@/components/AddToDo.vue";
import ToolTip from "@/components/ToolTip.vue";
import type { ITodo } from "@/model/model";
import { onDrop, onDragStart } from "@/utils/drag-and-drop-util";
import DraggableItem from "@/components/DraggableItem.vue";

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
    completedTime: undefined,
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
      item.completedTime = new Date().toLocaleString();
      item.isDone = !item.isDone;
    }
  });
};

const handleTip = (result: string) => {
  tipContent.value = result;
};

const handleClearAll = () => {
  list.splice(0, list.length);
};
</script>

<template>
  <div class="top-bar">
    <AddToDo @save="(msg) => addTodo(msg)" />
    <div class="clear-all-wrapper">
      <button
        class="clear-all"
        @click="handleClearAll"
        :disabled="todoList.length <= 0"
      >
        Delete All
      </button>
    </div>
  </div>
  <div class="list-wrapper">
    <ToolTip v-if="tipContent" :msg="tipContent" />
    <ol class="list-container" @dragenter.prevent @dragover.prevent>
      <DraggableItem
        v-for="(item, index) in todoList"
        :key="item._id"
        :item="item"
        @check="checkTodo(item._id)"
        @dragstart="onDragStart($event, index)"
        @hint="(msg) => handleTip(msg)"
        @remove="removeTodo(index)"
        @save="(msg) => saveTodo(item._id, msg)"
        @drop.stop="onDrop($event, index, list)"
      />
    </ol>
  </div>
</template>

<style scoped>
@import "./../assets/base.css";
.top-bar {
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 64vw;
}

.clear-all-wrapper {
  height: 10vh;
  display: flex;
  align-items: center;
}

.list-container {
  padding: 2vh;
  border-radius: 10px;
  border: 1px solid var(--color-border-custom);
  width: var(--work-field-width);
  height: 59vh;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3vh;
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

.clear-all {
  cursor: pointer;
  width: calc(2 * var(--button-width));
  height: var(--button-height);
  background-color: lightcoral;
  font-weight: bold;
  font-size: 1vw;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(69, 69, 69, 0.7);
  text-shadow: 2px 1px 2px azure;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clear-all:active,
.clear-all:hover {
  cursor: pointer;
}
.clear-all:disabled {
  cursor: default;
}

.clear-all:disabled:hover {
  box-shadow: none;
}

.clear-all:hover {
  box-shadow: var(--box-shadow);
}
</style>
