<script>
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
export default {
  components: { FooterItem, HeaderItem },
};
</script>

<template>
  <div class="home">
    <HeaderItem msg="Home page" />
    <main class="main">

    </main>
    <FooterItem />
  </div>
</template>

<style>
@import "./../assets/base.css";

.home {
  overflow-x: hidden;
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

.main {
  grid-area: main;
  width: var(--whidth-main);
  height: var(--height-main);
  background: var(--color-background-dark);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
</style>
