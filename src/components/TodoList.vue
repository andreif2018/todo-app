<script setup lang="ts">
import { ref, computed } from "vue";
import HintItem from "@/components/HintItem.vue";
import { onDrop, onDragStart } from "@/utils/drag-and-drop-util";
import DraggableItem from "@/components/DraggableItem.vue";
import { useToDoStore } from "@/stores/todos";

const store = useToDoStore();
const tipContent = ref("");

const handleTip = (result: string) => {
  tipContent.value = result;
};

const filteredList = computed(() => {
  let tempo;
  if (store.todos.hideCompleted) {
    tempo = store.todos.list.filter((item) => !item.isCompleted);
  } else {
    tempo = store.todos.list;
  }
  if (store.todos.hideLowPriority) {
    tempo = tempo.filter((item) => item.isUrgent);
  }
  return tempo;
});
</script>

<template>
  <article class="list-wrapper">
    <HintItem
      v-if="tipContent && store.todos.list.length > 0"
      :msg="tipContent"
    />
    <ol class="list-container" @dragenter.prevent @dragover.prevent>
      <DraggableItem
        v-for="(item, index) in filteredList"
        :key="item._id"
        :item="item"
        @dragstart="onDragStart($event, index)"
        @hint="(msg) => handleTip(msg)"
        @drop.stop="onDrop($event, index, filteredList)"
      />
    </ol>
  </article>
</template>

<style scoped>
@import "./../assets/base.css";

.list-container {
  border-radius: 10px;
  border: 1px solid var(--color-border-custom);
  height: 55vh;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3vh;
  overflow-y: scroll;
}

.list-wrapper {
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  gap: 1vh;
}

@media only screen and (min-width: 1920px) {
  .list-wrapper {
    width: var(--width-work-area);
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .list-wrapper {
    width: var(--width-work-area);
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1919px) {
  .list-wrapper {
    width: var(--width-work-area);
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .list-wrapper {
    width: var(--width-work-area);
  }
}

@media only screen and (min-width: 780px) and (max-width: 959px) {
  .list-wrapper {
    width: var(--width-work-area);
  }
}

@media only screen and (min-width: 640px) and (max-width: 779px) {
  .list-wrapper {
    width: 95%;
  }
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .list-wrapper {
    width: 95%;
  }

  .list-container {
    overflow-x: auto;
  }
}

@media only screen and (min-width: 1920px) {
  .list-container {
    width: 90%;
    padding: 2vh;
  }
}

@media only screen and (max-width: 1919px) {
  .list-container {
    width: 100%;
    padding: 2vh 0;
  }
}
</style>
