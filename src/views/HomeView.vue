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
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 1fr 7vh;
  grid-template-areas:
    "header"
    "main"
    "footer";
}
</style>
