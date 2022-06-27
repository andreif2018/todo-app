<script setup lang="ts">
import LogoItem from "@/components/LogoItem.vue";
import NavPanel from "@/components/NavPanel.vue";
</script>

<template>
  <footer class="footer">
    <LogoItem :is-footer="true" />
    <a
      class="github"
      href="https://github.com/andreif2018/todo-app"
      target="_blank"
      rel="noopener noreferrer"
      >View in GitHub</a
    >
    <NavPanel />
  </footer>
</template>

<style scoped>
.footer {
  grid-area: footer;
  line-height: 1.5;
  height: 7vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  border-top: 1px solid slategray;
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
