<script>
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
export default {
  components: { FooterItem, HeaderItem },
};
</script>

<template>
  <div class="error404">
    <HeaderItem msg="Error 404! Page Not found" />
    <main class="main">
      <p>
        <a href="/">Go to the Home page</a>
      </p>
    </main>
    <FooterItem />
  </div>
</template>

<style>
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
  line-height: 1.5;
  width: 100vw;
  height: 80vh;
  background: linear-gradient(
    45deg,
    #2c3e50 0%,
    #1c1e1c 50%,
    #1c1e1c 51%,
    #2c3e50 100%
  );
  border-top: 1px solid azure;
  border-bottom: 1px solid azure;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: steelblue;
}

.main p a {
  color: mediumaquamarine;
  text-decoration: underline;
}
</style>
