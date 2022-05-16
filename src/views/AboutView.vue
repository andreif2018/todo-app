<script>
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
export default {
  components: { FooterItem, HeaderItem },
};
</script>

<template>
  <div class="about">
    <HeaderItem msg="About page" />
    <main class="main">
      <p>This is ToDo App!</p>
      <p>Have Fun :)</p>
      <div class="feature-container">
        <p>Available features:</p>
        <ul>
          <li>Add ToDo item</li>
          <li>Update ToDo item</li>
          <li>Delete ToDo item</li>
        </ul>
      </div>
    </main>
    <FooterItem />
  </div>
</template>

<style>
@import "./../assets/base.css";

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

.feature-container {
  font-size: 1.5rem;
  height: 40vh;
}
</style>
