<script setup lang="ts">
import { useToDoStore } from "@/stores/todos";
import FilterItem from "@/components/FilterItem.vue";

const store = useToDoStore();
const handleClearAll = () => {
  store.clearAll();
};
</script>

<template>
  <article class="top-bar">
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
.top-bar {
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
  font-size: medium;
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
  .top-bar {
    width: var(--top-block-width);
  }

  .clear-all {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .top-bar {
    width: var(--top-block-width);
  }

  .clear-all {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1439px) {
  .top-bar {
    width: var(--top-block-width);
  }

  .clear-all {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .top-bar {
    width: var(--top-block-width);
  }

  .clear-all {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 780px) and (max-width: 959px) {
  .top-bar {
    width: var(--top-block-width);
  }

  .clear-all {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 640px) and (max-width: 779px) {
  .top-bar {
    width: var(--top-block-width);
  }

  .clear-all {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .top-bar {
    width: var(--top-block-width);
    flex-direction: column;
    height: 100%;
  }

  .clear-all {
    width: var(--button-width);
  }
}
</style>
