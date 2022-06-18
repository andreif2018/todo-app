<script setup lang="ts">
import { ref } from "vue";
import ToolTip from "@/components/ToolTip.vue";
import type { ITodo } from "@/model/model";
import { onDrop, onDragStart } from "@/utils/drag-and-drop-util";
import DraggableItem from "@/components/DraggableItem.vue";

const props = defineProps<{
  list: ITodo[];
}>();
const todoList = ref(props.list);
let list: ITodo[] = todoList.value;
const tipContent = ref("");

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
      if (item.isDone) {
        item.completedTime = "";
      } else {
        item.completedTime = new Date().toLocaleString();
      }
      item.isDone = !item.isDone;
    }
  });
};

const handleTip = (result: string) => {
  tipContent.value = result;
};
</script>

<template>
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
</style>
