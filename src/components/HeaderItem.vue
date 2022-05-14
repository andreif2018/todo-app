<script setup lang="ts">
import LogoWrapper from "@/components/LogoWrapper.vue";
import NavPanel from "@/components/NavPanel.vue";

defineProps<{
  msg: string;
}>();
</script>

<template>
  <header class="header">
    <LogoWrapper />
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <NavPanel />
  </header>
</template>

<style scoped>
.header {
  grid-area: header;
  line-height: 1.5;
  max-height: 100vh;
  border-bottom: 1px solid aquamarine;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
}

.header .title {
  width: 40vw;
  text-align: center;
}
</style>
