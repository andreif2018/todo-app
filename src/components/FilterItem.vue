<script setup lang="ts">
import TabItem from "@/components/TabItem.vue";
import { FilterEnum } from "@/model/model";
</script>
<template>
  <article class="filter-container">
    <p class="status-filters-title">Status Filters:</p>
    <article class="box-wrapper">
      <TabItem :msg="FilterEnum.COMPLETED" :left="true" />
      <TabItem :msg="FilterEnum.NON_URGENT_ITEMS" :right="true" />
    </article>
  </article>
</template>

<style scoped>
.filter-container {
  width: 51.5%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
