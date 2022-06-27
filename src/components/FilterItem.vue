<script setup lang="ts">
import TabItem from "@/components/TabItem.vue";
import { FilterEnum } from "@/model/model";
</script>
<template>
  <div class="filter-container">
    <p class="status-filters-title">Status Filters:</p>
    <div class="box-wrapper">
      <TabItem :msg="FilterEnum.COMPLETED" :left="true" />
      <TabItem :msg="FilterEnum.NON_URGENT" :right="true" />
    </div>
  </div>
</template>

<style scoped>
.filter-container {
  width: max-content;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
