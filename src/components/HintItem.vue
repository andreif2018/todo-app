<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
<template>
  <div class="hint">{{ msg }}</div>
</template>

<style scoped>
.hint {
  color: red;
  font-size: var(--todo-font-size);
  width: max-content;
  text-align: center;
  cursor: default;
  border: 1px solid orangered;
  background-color: #ffcccc;
  text-shadow: 1px 1px slategray;
  border-radius: 5px;
  padding: 0 5px;
}
</style>
