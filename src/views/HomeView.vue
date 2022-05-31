<script>
import HeaderItem from "../components/HeaderItem.vue";
import FooterItem from "../components/FooterItem.vue";
import ToDoList from "@/components/ToDoList.vue";
export default {
  components: { ToDoList, FooterItem, HeaderItem },
};
</script>

<template>
  <div class="home">
    <HeaderItem msg="ToDo list" />
    <main class="main">
      <ToDoList />
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
  width: var(--width-main);
  height: var(--height-main);
  background: var(--color-background-dark);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 1px solid cyan;
}
</style>
