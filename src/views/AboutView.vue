<script lang="ts">
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
export default {
  components: { FooterItem, HeaderItem },
};
</script>

<template>
  <div class="about">
    <HeaderItem msg="About App" />
    <main class="main">
      <p>This is ToDo App!</p>
      <p>Have Fun :)</p>
      <div class="feature-container">
        <p class="container-title">Available features:</p>
        <ul>
          <li>Add ToDo</li>
          <li>Complete ToDo</li>
          <li>Set priority for ToDo</li>
          <li>Update ToDo</li>
          <li>View ToDo details</li>
          <li>Delete ToDo</li>
          <li>Delete All ToDo's</li>
          <li>Filtering list</li>
          <li>Change order by <span class="accent">Drag and Drop</span></li>
        </ul>
        <br />
        <hr />
        <p>
          <span class="accent">Adding</span> is available by button click<br />
          or by `ENTER` key pressing
        </p>
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

.feature-container {
  font-size: 1.2rem;
  height: 60vh;
}

.accent {
  font-weight: bold;
  font-style: oblique;
  color: mediumaquamarine;
}

.container-title {
  text-decoration: underline;
}
</style>
