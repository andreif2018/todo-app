<script setup lang="ts">
import type { IModal } from "@/model/model";
import { Response } from "@/model/model";

const props = defineProps<{
  msg: IModal;
}>();
</script>
<template>
  <div class="modal">
    <div class="message-wrapper">
      <div>Todo: {{ props.msg.todo }}</div>
      <div v-if="props.msg.created">Created: {{ props.msg.created }}</div>
      <div v-if="props.msg.modified">Modified: {{ props.msg.modified }}</div>
      <div v-if="props.msg.completed">Completed: {{ props.msg.completed }}</div>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
}

.hide {
  width: 1.75vw;
  height: 1.75vw;
  background-color: lightcoral;
  border-radius: 5px;
  color: black;
}

.message-wrapper {
  width: 75%;
  height: 75%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
</style>
