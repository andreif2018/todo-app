<script setup lang="ts">
import AddToDo from "@/components/AddToDo.vue";
import ToDoList from "@/components/ToDoList.vue";
import { useToDoStore } from "@/stores/todos";

const store = useToDoStore();
const handleClearAll = () => {
  store.clearAll();
};
</script>

<template>
  <main class="main">
    <div class="top-bar">
      <AddToDo />
      <div class="clear-all-wrapper">
        <button
          class="clear-all"
          @click="handleClearAll"
          :disabled="store.todos.length <= 0"
        >
          Delete All
        </button>
      </div>
    </div>
    <ToDoList />
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

.main {
  grid-area: main;
  width: var(--width-main);
  height: var(--height-main);
  background: var(--color-background-dark);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
</style>
