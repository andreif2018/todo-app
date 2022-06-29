<script setup lang="ts">
import { Response } from "@/model/model";
import type { ITodo } from "@/model/model";
import { PriorityEnum } from "@/model/model";

const props = defineProps<{
  msg: ITodo;
}>();
</script>
<template>
  <article class="modal">
    <ul class="message-wrapper">
      <li><span class="popup-title">Todo: </span>{{ props.msg.todoName }}</li>
      <li>
        <span class="popup-title">Priority: </span>
        <span v-if="props.msg.isUrgent" class="urgent">{{
          PriorityEnum.URGENT
        }}</span>
        <span v-else>{{ PriorityEnum.NON_URGENT }}</span>
      </li>
      <li>
        <span class="popup-title">Created: </span>{{ props.msg.createdTime }}
      </li>
      <li v-if="props.msg.modifiedTime">
        <span class="popup-title">Modified: </span>{{ props.msg.createdTime }}
      </li>
      <li v-if="props.msg.completedTime">
        <span class="popup-title">Completed: </span>{{ props.msg.createdTime }}
      </li>
      <li v-else><span class="popup-title">Status: </span>Not Completed</li>
    </ul>
    <div class="hide-wrapper">
      <button class="hide" @click="$emit(Response.HIDE)">X</button>
    </div>
  </article>
</template>

<style scoped>
@import "./../assets/base.css";

.modal {
  color: black;
  font-weight: bold;
  font-size: medium;
  width: 100%;
  text-align: center;
  cursor: default;
  border: 1px solid rgba(118, 118, 118, 0.3);
  background-color: rgb(239, 239, 239);
  padding-left: 1vw;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50%;
  left: 0;
  z-index: 100;
  height: max-content;
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

.urgent {
  font-weight: bold;
  color: red;
}
</style>
