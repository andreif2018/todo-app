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
  font-size: 1rem;
  width: 22rem;
  text-align: center;
  cursor: default;
  border: 1px solid orangered;
  background-color: #ffcccc;
  text-shadow: 1px 1px slategray;
  border-radius: 5px;
}
</style>
