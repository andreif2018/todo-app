<script setup>
import { ref } from "vue";
import AddToDo from "@/components/AddToDo.vue";
import ToDoItem from "@/components/ToDoItem.vue";
import ToolTip from "@/components/ToolTip.vue";
import toolTipEnum from "@/utils.ts";

let id = 0;
const todoList = ref([]);
let isTip = ref(false);

const addTodo = (newTodo) => {
  todoList.value.push({
    id: id++,
    text: newTodo.value,
    createdTime: new Date().toLocaleString(),
  });
};

const update = (id, message) => {
  todoList.value[id] = {
    id: id,
    text: message,
    createdTime: todoList.value[id].createdTime,
    modifiedTime: new Date().toLocaleString(),
  };
};

const remove = (todoID) => {
  todoList.value = todoList.value.filter((item) => {
    const { id: id1 } = item;
    return id1 !== todoID;
  });
};

const showTip = (status) => {
  if (isTip.value !== status) {
    isTip.value = !isTip.value;
  }
};
</script>

<template>
  <AddToDo @response="(msg) => addTodo(msg)" />
  <div class="list-wrapper">
    <ToolTip v-if="isTip" :msg="toolTipEnum.LENGTH" />
    <ol class="list-container">
      <ToDoItem
        v-for="item in todoList"
        :key="item.id"
        :title="item.text"
        :created="item.createdTime"
        :modified="item.modifiedTime"
        @update="(msg) => update(item.id, msg)"
        @remove="() => remove(item.id)"
        @hint="(msg) => showTip(msg)"
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
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2vh;
  overflow-y: auto;
}

.list-wrapper {
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 1vh;
}
</style>
