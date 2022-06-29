<script setup lang="ts">
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";
import ToolBar from "@/components/ToolBar.vue";
</script>

<template>
  <main class="main">
    <section class="main-content">
      <AddTodo />
      <ToolBar />
      <TodoList />
    </section>
  </main>
</template>

<style scoped>
@import "./../assets/base.css";
</style>
