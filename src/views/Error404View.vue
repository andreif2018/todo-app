<script>
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
export default {
  components: { FooterItem, HeaderItem },
};
</script>

<template>
  <div class="error404">
    <HeaderItem msg="Error 404!" />
    <main class="main">
      <h2>Page Not found</h2>
      <p>
        <a href="/">Go to the Home page</a>
      </p>
    </main>
    <FooterItem />
  </div>
</template>

<style>
@import "./../assets/base.css";

.error404 {
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
  width: var(--width-main);
  height: var(--height-main);
  background: var(--color-background-dark);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.main p a {
  color: mediumaquamarine;
  text-decoration: underline;
}
</style>
