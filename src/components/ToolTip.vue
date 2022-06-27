<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>
<template>
  <div class="tooltip">
    Hover over me
    <span class="tooltip-text">Hint text</span>
  </div>
</template>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.tooltip .tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
}

.tooltip:hover .tooltip-text {
  visibility: visible;
}
</style>
