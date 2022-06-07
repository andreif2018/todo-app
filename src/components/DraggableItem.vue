<script setup lang="ts">
import { ref } from "vue";
import type { ITodo } from "@/model/model";
import ToDoItem from "@/components/ToDoItem.vue";
import { Response } from "@/model/model";

const props = defineProps<{
  item?: ITodo;
}>();
defineEmits([Response.SAVE, Response.REMOVE, Response.HINT, Response.CHECK]);
const isCurrentDragged = ref(false);
const isTargetItem = ref(false);
</script>

<template>
  <li
    draggable="true"
    class="draggable-item"
    :class="{ current: isCurrentDragged, target: isTargetItem }"
    @dragstart="isCurrentDragged = true"
    @dragend="isCurrentDragged = false"
    @dragenter="isTargetItem = true"
    @dragover.prevent
    @dragleave="isTargetItem = false"
    @drop.stop="isTargetItem = false"
  >
    <ToDoItem
      :data="props.item"
      @save="(msg) => $emit(Response.SAVE, msg)"
      @remove="$emit(Response.REMOVE)"
      @hint="(msg) => $emit(Response.HINT, msg)"
      @check="(msg) => $emit(Response.CHECK, msg)"
    />
  </li>
</template>

<style scoped>
.draggable-item {
  min-height: 7vh;
  border: 2px solid cadetblue;
  width: 64vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.current {
  opacity: 0.2;
}

.target {
  border: 2px dashed azure;
  transform: scaleY(1.07);
}

.target > * {
  visibility: hidden;
}
</style>
