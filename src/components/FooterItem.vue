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
  width: var(--width-1920);
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
</style>
