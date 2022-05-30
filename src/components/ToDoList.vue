<script setup>
import { ref } from "vue";
import AddToDo from "@/components/AddToDo.vue";
import ToDoItem from "@/components/ToDoItem.vue";

let id = 0;
const todoList = ref([]);

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
    createdTime: todoList.value[id].created,
    modifiedTime: new Date().toLocaleString(),
  };
};

const remove = (todoID) => {
  todoList.value = todoList.value.filter((item) => item.id !== todoID);
};
</script>

<template>
  <AddToDo @response="(msg) => addTodo(msg)" />
  <ol class="list-container">
    <ToDoItem
      v-for="item in todoList"
      :key="item.id"
      :title="item.text"
      :created="item.createdTime"
      :modified="item.modifiedTime"
      @update="(msg) => update(item.id, msg)"
      @remove="() => remove(item.id)"
    />
  </ol>
</template>

<style scoped>
.list-container {
  padding: 2vh;
  border-radius: 10px;
  border: 1px solid slategray;
  width: 70vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2vh;
  overflow-y: auto;
}
</style>
