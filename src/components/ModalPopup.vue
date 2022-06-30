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
        <span class="popup-title">Modified: </span>{{ props.msg.modifiedTime }}
      </li>
      <li v-if="props.msg.completedTime">
        <span class="popup-title">Completed: </span
        >{{ props.msg.completedTime }}
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
  width: max-content;
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
  right: 0;
  z-index: 1000;
  height: max-content;
}

.hide {
  width: calc(var(--toggle-width) * 0.75);
  height: calc(var(--toggle-width) * 0.75);
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
  font-size: small;
  list-style-type: none;
  padding: 10px;
}

.hide-wrapper {
  width: calc(var(--toggle-width) + 1vw);
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

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .message-wrapper {
    width: 100%;
    height: max-content;
  }
  .message-wrapper:first-child {
    width: 250px;
    height: max-content;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
