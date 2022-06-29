<script setup lang="ts">
import { useToDoStore } from "@/stores/todos";
import FilterItem from "@/components/FilterItem.vue";

const store = useToDoStore();
const handleClearAll = () => {
  store.clearAll();
};
</script>

<template>
  <article class="tool-bar">
    <FilterItem />
    <div class="clear-all-wrapper">
      <button
        class="clear-all"
        @click="handleClearAll"
        :disabled="store.todos.list.length <= 0"
      >
        Clear
      </button>
    </div>
  </article>
</template>

<style scoped>
@import "./../assets/base.css";
.tool-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.clear-all-wrapper {
  width: max-content;
  height: var(--button-height);
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-all {
  height: 100%;
  color: red;
  cursor: pointer;
  background-color: #f7dfdc;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(207, 78, 78);
  text-shadow: 1px 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.clear-all:not(:disabled):active,
.clear-all:not(:disabled):hover {
  cursor: pointer;
  box-shadow: var(--box-shadow);
  font-size: 66%;
}

.clear-all:disabled {
  cursor: default;
  color: rgba(207, 78, 78, 0.5);
}

@media only screen and (min-width: 1920px) {
  .tool-bar {
    width: 38%;
  }

  .clear-all {
    font-size: 50%;
    width: 5vw;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .tool-bar {
    width: 51%;
  }

  .clear-all {
    font-size: 55%;
    width: 5vw;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1439px) {
  .tool-bar {
    width: 65%;
  }

  .clear-all {
    font-size: 55%;
    width: 6vw;
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .tool-bar {
    width: 72.5%;
  }

  .clear-all {
    font-size: 65%;
    width: 10vw;
  }
}

@media only screen and (min-width: 780px) and (max-width: 959px) {
  .tool-bar {
    width: 80.5%;
  }

  .clear-all {
    font-size: 65%;
    width: 11vw;
  }
}

@media only screen and (min-width: 640px) and (max-width: 779px) {
  .tool-bar {
    width: 90%;
  }

  .clear-all {
    font-size: 60%;
    width: 12vw;
  }
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .tool-bar {
    width: 100%;
    flex-direction: column;
    height: 100%;
  }

  .clear-all {
    font-size: 70%;
    width: 15vw;
  }
}
</style>
