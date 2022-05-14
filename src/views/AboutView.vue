<script>
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
export default {
  components: { FooterItem, HeaderItem },
};
</script>

<template>
  <div class="about">
    <HeaderItem msg="This is an about page" />
    <main class="main">
      <p>
        This is Camel App!
      </p>
      <p>
        Have Fun :)
      </p>
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
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
}

.feature-container {
  font-size: 1.5rem;
  height: 40vh;
}
</style>
