<script setup lang="ts">
import { Response } from "@/model/model";
import type { ITodo } from "@/model/model";
import { PriorityEnum } from "@/model/model";

const props = defineProps<{
  msg: ITodo;
}>();
</script>
<template>
  <div class="modal">
    <div class="message-wrapper">
      <div class="popup-name">
        <div class="popup-title">Todo: {{ props.msg.todoName }}</div>
        <div v-if="props.msg.isUrgent" class="cell trail">
          <span class="popup-title">Priority: </span>
          <span class="urgent">{{ PriorityEnum.URGENT }}</span>
        </div>
        <div v-else class="cell trail">
          <span class="popup-title">Priority: </span>
          {{ PriorityEnum.NON_URGENT }}
        </div>
      </div>
      <div class="cells-bar">
        <div v-if="props.msg.createdTime" class="cell">
          <span class="popup-title">Created: </span>{{ props.msg.createdTime }}
        </div>
        <div v-if="props.msg.modifiedTime" class="cell">
          <span class="popup-title">Modified: </span
          >{{ props.msg.modifiedTime }}
        </div>
        <div v-if="props.msg.completedTime" class="cell">
          <span class="popup-title">Completed: </span
          >{{ props.msg.completedTime }}
        </div>
        <div v-else class="cell">
          <span class="popup-title">Status: </span>Not Completed
        </div>
      </div>
    </div>
    <div class="hide-wrapper">
      <button class="hide" @click="$emit(Response.HIDE)">X</button>
    </div>
  </div>
</template>

<style scoped>
@import "./../assets/base.css";

.modal {
  color: black;
  font-weight: bold;
  font-size: medium;
  width: 100%;
  height: 7.5vh;
  text-align: center;
  cursor: default;
  border: 1px solid rgba(118, 118, 118, 0.3);
  background-color: rgb(239, 239, 239);
  padding-left: 1vw;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hide {
  width: 1.75vw;
  height: 1.75vw;
  background-color: lightcoral;
  border-radius: 5px;
  color: black;
}

.message-wrapper {
  width: 95%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.hide-wrapper {
  width: calc(var(--button-width) + 1vw);
}

.hide:active {
  cursor: pointer;
}

.hide:hover {
  box-shadow: 0 2px 3px 1px rgba(12, 12, 12, 0.5);
  cursor: pointer;
}

.popup-title {
  font-weight: bold;
}

.cells-bar {
  width: 100%;
  font-size: 0.75vw;
  display: grid;
  grid-auto-rows: 1fr;
  grid-auto-columns: 33% 33% auto;
}

.cell {
  grid-row: 1;
  text-align: left;
}

.popup-name {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.trail {
  padding-left: 3vw;
}

.urgent {
  font-weight: bold;
  color: red;
}
</style>
