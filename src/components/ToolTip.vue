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
  border: 1px solid orangered;
  background-color: #ffcccc;
  text-shadow: 1px 1px slategray;
  border-radius: 5px;
}
</style>
