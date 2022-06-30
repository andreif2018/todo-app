<script setup lang="ts">
import TabItem from "@/components/TabItem.vue";
import { FilterEnum } from "@/model/model";
</script>
<template>
  <article class="filter-container">
    <p class="status-filters-title">Filters</p>
    <article class="box-wrapper">
      <TabItem :msg="FilterEnum.COMPLETED" :left="true" />
      <TabItem :msg="FilterEnum.NON_URGENT_ITEMS" :right="true" />
    </article>
  </article>
</template>

<style scoped>
.filter-container {
  width: max-content;
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: large;
}

.status-filters-title {
  text-align: left;
  font-weight: bold;
  padding-right: 1vw;
}

.box-wrapper {
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .filter-container {
    flex-direction: column;
    height: 20vh;
    justify-content: center;
    width: 150px;
  }

  .status-filters-title {
    padding-top: 50px;
  }
}
</style>
