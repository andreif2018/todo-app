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
      <div class="header-title">
        <span>{{ msg }}</span>
      </div>
      <NavPanel />
    </article>
  </header>
</template>

<style scoped>
@import "./../assets/base.css";
.header {
  grid-area: header;
  line-height: 1.5;
  height: 10vh;
  width: var(--width-main);
  border-bottom: 1px solid slategray;
}

.header-title {
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

@media only screen and (min-width: 1920px) {
  .header-content {
    width: var(--width-1920);
  }

  .header-title {
    font-size: 2.5vw;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .header-content {
    width: var(--width-1440);
  }

  .header-title {
    font-size: 2.5vw;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1439px) {
  .header-content {
    width: var(--width-1200);
  }

  .header-title {
    font-size: 2.5vw;
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .header-content {
    width: var(--width-960);
  }

  .header-title {
    font-size: 3vw;
  }
}

@media only screen and (min-width: 780px) and (max-width: 959px) {
  .header-content {
    width: var(--width-780);
  }

  .header-title {
    font-size: 3vw;
  }
}

@media only screen and (min-width: 640px) and (max-width: 779px) {
  .header-content {
    width: var(--width-640);
  }

  .header-title {
    font-size: 4vw;
  }
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .header-content {
    width: var(--width-360);
  }

  .header-title {
    font-size: 4vw;
  }
}
</style>
