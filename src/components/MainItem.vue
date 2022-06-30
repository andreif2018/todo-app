<script setup lang="ts">
import AddTodo from "@/components/AddTodo.vue";
import TodoList from "@/components/TodoList.vue";
import TopBar from "@/components/TopBar.vue";
</script>

<template>
  <main class="main">
    <section class="main-content">
      <AddTodo />
      <TopBar />
      <TodoList />
    </section>
  </main>
</template>

<style scoped>
@import "./../assets/base.css";
</style>
