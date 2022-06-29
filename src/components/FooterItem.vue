<script setup lang="ts">
import LogoItem from "@/components/LogoItem.vue";
import NavPanel from "@/components/NavPanel.vue";
</script>

<template>
  <footer class="footer">
    <article class="footer-content">
      <LogoItem :is-footer="true" />
      <a
        class="github"
        href="https://github.com/andreif2018/todo-app"
        target="_blank"
        rel="noopener noreferrer"
        >View in GitHub</a
      >
      <NavPanel />
    </article>
  </footer>
</template>

<style scoped>
@import "./../assets/base.css";
.footer {
  grid-area: footer;
  line-height: 1.5;
  height: 7vh;
  width: var(--width-main);
  border-top: 1px solid slategray;
}

.footer-content {
  grid-area: footer;
  line-height: 1.5;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.github {
  display: block;
  width: max-content;
  height: 45px;
  padding-left: 45px;
  background-image: url("../assets/github.svg");
  background-size: 35px;
  background-repeat: no-repeat;
  background-position: left center;
  line-height: 45px;
  color: #cbd5de;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  transition: 0.3s;
}

.github:hover {
  color: #fff;
}

@media only screen and (min-width: 1920px) {
  .footer-content {
    width: var(--width-1920);
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .footer-content {
    width: var(--width-1440);
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1439px) {
  .footer-content {
    width: var(--width-1200);
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .footer-content {
    width: var(--width-960);
  }
}

@media only screen and (min-width: 780px) and (max-width: 959px) {
  .footer-content {
    width: var(--width-780);
  }
}

@media only screen and (min-width: 640px) and (max-width: 779px) {
  .footer-content {
    width: var(--width-640);
  }
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .footer-content {
    width: var(--width-360);
  }
}
</style>
