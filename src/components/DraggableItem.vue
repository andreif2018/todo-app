<script setup lang="ts">
import { ref } from "vue";
import type { ITodo } from "@/model/model";
import TodoItem from "@/components/TodoItem.vue";
import TodoItemMobile from "@/components/TodoItemMobile.vue";
import { Response } from "@/model/model";
import { toggleOn, toggleOff } from "@/utils/utils";
import { regular, target } from "@/model/model";

const props = defineProps<{
  item: ITodo;
}>();
defineEmits([Response.HINT]);

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
    <TodoItem :item="props.item" @hint="(msg) => $emit(Response.HINT, msg)" />
    <TodoItemMobile
      :item="props.item"
      @hint="(msg) => $emit(Response.HINT, msg)"
    />
  </li>
</template>

<style scoped>
.draggable-item {
  min-height: 7vh;
  border-width: 2px;
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: transparent;
}

.current {
  opacity: 0.5;
  background-color: lightslategray;
}

.target {
  transform: scaleY(1.07);
}

.target > * {
  visibility: hidden;
}
</style>
