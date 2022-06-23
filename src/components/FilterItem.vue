<script setup lang="ts">
import TabItem from "@/components/TabItem.vue";
import { ref } from "vue";

const isAll = ref(true);
const isDone = ref(false);
const isUndone = ref(false);
const labelAll = "All";
const labelDone = "Done";
const labelUndone = "Not done";
</script>
<template>
  <div class="filter-container">
    <p class="status-filters-title">Status Filters:</p>
    <div class="box-wrapper">
      <TabItem :msg="labelAll" :is-checked="isAll" :left="true" />
      <TabItem :msg="labelDone" :is-checked="isDone" :middle="true" />
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
