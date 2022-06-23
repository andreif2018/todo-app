<script setup lang="ts">
import TabItem from "@/components/TabItem.vue";
import { ref } from "vue";

const isModified = ref(false);
const isDone = ref(false);
const isUndone = ref(false);
const labelModified = "Modified";
const labelDone = "Done";
const labelUndone = "Not done";
</script>
<template>
  <div class="filter-container">
    <p class="status-filters-title">Status Filters:</p>
    <div class="box-wrapper">
      <TabItem :msg="labelModified" :is-checked="isModified" :left="true" />
      <TabItem :msg="labelDone" :is-checked="isDone" />
      <TabItem :msg="labelUndone" :is-checked="isUndone" :right="true" />
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  width: max-content;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: large;
}

.status-filters-title {
  font-weight: bold;
  padding: 1vw;
}

.box-wrapper {
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
