<script>
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
import MainItem from "../components/MainItem.vue";
export default {
  components: { MainItem, FooterItem, HeaderItem },
};
</script>

<template>
  <div class="about">
    <HeaderItem msg="This is an about page" />
    <MainItem />
    <FooterItem />
  </div>
</template>

<style>
.about {
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
