<script setup lang="ts">
import LogoItem from "@/components/LogoItem.vue";
import NavPanel from "@/components/NavPanel.vue";

defineProps<{
  msg: string;
}>();
</script>

<template>
  <header class="header">
    <article class="header-content">
      <LogoItem />
      <div class="title">
        <h2>{{ msg }}</h2>
      </div>
      <NavPanel />
    </article>
  </header>
</template>

<style scoped>
.header {
  grid-area: header;
  line-height: 1.5;
  height: 10vh;
  width: var(--width-main);
  border-bottom: 1px solid slategray;
}

.header-content .title {
  width: 40%;
  text-align: center;
  color: azure;
}

.header-content {
  width: var(--width-1920);
  height: 100%;
  grid-area: header;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
</style>
