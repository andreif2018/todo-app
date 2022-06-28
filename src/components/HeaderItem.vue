<script setup lang="ts">
import LogoItem from "@/components/LogoItem.vue";
import NavPanel from "@/components/NavPanel.vue";

defineProps<{
  msg: string;
}>();
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <LogoItem />
      <div class="title">
        <h1>{{ msg }}</h1>
      </div>
      <NavPanel />
    </div>
  </header>
</template>

<style scoped>
.header {
  grid-area: header;
  line-height: 1.5;
  height: 10vh;
  width: var(--width-main);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  border-bottom: 1px solid slategray;
}

.header .title {
  width: 40%;
  text-align: center;
  color: azure;
}

.header-wrapper {
  width: var(--width-1920);
  grid-area: header;
  line-height: 1.5;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid slategray;
  margin: 0 auto;
}
</style>
