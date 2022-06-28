<script lang="ts">
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
import MainItem from "@/components/MainItem.vue";
export default {
  components: { MainItem, FooterItem, HeaderItem },
};
</script>

<template>
  <div class="home">
    <HeaderItem msg="ToDo App" />
    <MainItem />
    <FooterItem />
  </div>
</template>

<style>
@import "./../assets/base.css";

.home {
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
}
</style>
