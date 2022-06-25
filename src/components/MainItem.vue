<script setup lang="ts">
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";
import { useToDoStore } from "@/stores/todos";
import FilterItem from "@/components/FilterItem.vue";

const store = useToDoStore();
const handleClearAll = () => {
  store.clearAll();
};
</script>

<template>
  <main class="main">
    <div class="top-bar">
      <AddTodo />
      <div class="clear-all-wrapper">
        <button
          class="clear-all"
          @click="handleClearAll"
          :disabled="store.todos.list.length <= 0"
        >
          Delete All
        </button>
      </div>
    </div>
    <FilterItem />
    <TodoList />
  </main>
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
  box-shadow: var(--box-shadow);
}

.clear-all:disabled {
  cursor: default;
}

.clear-all:disabled:hover {
  box-shadow: none;
}
</style>
