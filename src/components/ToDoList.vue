<script setup lang="ts">
import { ref } from "vue";
import AddToDo from "@/components/AddToDo.vue";
import ToDoItem from "@/components/ToDoItem.vue";
import ToolTip from "@/components/ToolTip.vue";
import type { ITodo } from "@/model";

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
  todoList.value.forEach((item: ITodo) => {
    if (item._id === todoID) {
      item.text = message;
      item.modifiedTime = new Date().toLocaleString();
    }
  });
};

const removeTodo = (index: number) => {
  todoList.value.splice(index, 1);
};

const checkTodo = (id: number) => {
  todoList.value.forEach((item: ITodo) => {
    if (item._id === id) {
      item.modifiedTime = new Date().toLocaleString();
      item.isDone = !item.isDone;
    }
  });
};

const startDrag = (event: DragEvent, item?: ITodo) => {
  console.log(item);
  console.log(event);
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("offsetY", event.offsetY.toString());
  } else throw Error("drag event error occurs");
};

const onDrop = (event: DragEvent) => {
  console.log(typeof event);
  //const itemID = event.dataTransfer.getData("itemID");
  console.log("drop event", event.offsetY);
  // console.log(event.dataTransfer.getData("offsetY"), event.offsetY);
};
// const applyDrag = (arr, dragResult) => {
//   console.log(dragResult);
//   const { removedIndex, addedIndex, payload } = dragResult;
//   if (removedIndex === null && addedIndex === null) return arr;
//   const result = [...arr];
//   let itemToAdd = payload;
//   if (removedIndex !== null) {
//     [itemToAdd] = result.splice(removedIndex, 1);
//   }
//   if (addedIndex !== null) {
//     result.splice(addedIndex, 0, itemToAdd);
//   }
//   return result;
// };

const current = (event: DragEvent, ID: number) => {
  console.log("overlay event", event.offsetY, "item.id: ", ID);
};

const handleTip = (result: string) => {
  tipContent.value = result;
};
</script>

<template>
  <AddToDo @save="(msg) => addTodo(msg)" />
  <div class="list-wrapper">
    <ToolTip v-if="tipContent" :msg="tipContent" />
    <ol
      class="list-container"
      @drop="onDrop($event)"
      @dragenter.prevent
      @dragover.prevent
    >
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
        @dragstart="startDrag($event, index)"
        @dragenter="current($event, index)"
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
