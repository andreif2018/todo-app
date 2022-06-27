<script setup lang="ts">
import { ref, computed } from "vue";
import ToolTip from "@/components/ToolTip.vue";
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
  <div class="list-wrapper">
    <ToolTip v-if="tipContent" :msg="tipContent" />
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
  </div>
</template>

<style scoped>
@import "./../assets/base.css";

.list-container {
  padding: 2vh;
  border-radius: 10px;
  border: 1px solid var(--color-border-custom);
  width: var(--work-field-width);
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
</style>
