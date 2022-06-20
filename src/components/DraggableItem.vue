<script setup lang="ts">
import { ref } from "vue";
import type { ITodo } from "@/model/model";
import ToDoItem from "@/components/ToDoItem.vue";
import { Response } from "@/model/model";
import { toggleOn, toggleOff } from "@/utils/utils";
import { regular, target } from "@/model/model";

const props = defineProps<{
  item?: ITodo;
}>();
defineEmits([
  Response.SAVE,
  Response.REMOVE,
  Response.HINT,
  Response.CHECK,
  Response.ON_DRAG_START,
  Response.ON_DRAG_END,
]);
const isCurrentDragged = ref(false);
const isTargetItem = ref(false);
const activeStyle = ref(regular);

const onDragEnter = () => {
  toggleOn(isTargetItem);
  activeStyle.value = target;
};

const onDragLeave = () => {
  toggleOff(isTargetItem);
  activeStyle.value = regular;
};

const onDrop = () => {
  toggleOff(isTargetItem);
  activeStyle.value = regular;
};

const start = () => {
  toggleOn(isCurrentDragged);
};

const stop = () => {
  toggleOff(isCurrentDragged);
};
</script>

<template>
  <li
    draggable="true"
    class="draggable-item"
    :class="{ current: isCurrentDragged, target: isTargetItem }"
    :style="{
      borderColor: activeStyle.borderColor,
      borderStyle: activeStyle.borderStyle,
    }"
    @dragstart="start"
    @dragend="stop"
    @dragenter="onDragEnter"
    @dragleave="onDragLeave"
    @drop.stop="onDrop"
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
  min-height: 9vh;
  border-width: 2px;
  width: 64vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: transparent;
}

.current {
  opacity: 0.2;
}

.target {
  transform: scaleY(1.07);
}

.target > * {
  visibility: hidden;
}
</style>
