<script setup>
import { ref } from "vue";
import AddToDo from "@/components/AddToDo.vue";
import ToDoItem from "@/components/ToDoItem.vue";

let id = 0;
const list = ref([]);
function addTodo(newTodo) {
  list.value.push({
    id: id++,
    text: newTodo.value,
    createdTime: new Date().toString(),
  });
}
</script>

<template>
  <AddToDo @response="(msg) => addTodo(msg)" />
  <h4 class="list-title">ToDo List</h4>
  <ol class="list-container">
    <ToDoItem
      v-for="item in list"
      :key="item.id"
      :title="item.text"
      :time-stamp="item.createdTime"
    />
  </ol>
</template>

<style scoped>
.list-title {
  text-align: center;
}

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
}
</style>
