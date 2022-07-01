<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
<template>
  <div class="hint">
    <div class="hint-content">
      {{ msg }}
    </div>
  </div>
</template>

<style scoped>
.hint {
  height: 6vh;
  min-height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hint-content {
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
