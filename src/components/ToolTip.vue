<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
<template>
  <div class="popup">{{ msg }}</div>
</template>

<style scoped>
.popup {
  color: red;
  font-size: 1rem;
  width: 22rem;
  text-align: center;
  cursor: default;
  border: 1px solid rgba(118, 118, 118, 0.3);
  background-color: rgba(59, 59, 59, 0.3);
}
</style>
