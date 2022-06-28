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
  width: max-content;
  height: 10vh;
  display: flex;
  align-items: center;
}

.clear-all {
  color: red;
  cursor: pointer;
  height: var(--button-height);
  background-color: #f7dfdc;
  font-weight: bold;
  font-size: 1vw;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(207, 78, 78);
  text-shadow: 1px 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clear-all:not(:disabled):active,
.clear-all:not(:disabled):hover {
  cursor: pointer;
  box-shadow: var(--box-shadow);
  text-decoration: underline;
}

.clear-all:disabled {
  cursor: default;
  color: rgba(207, 78, 78, 0.5);
}
</style>
