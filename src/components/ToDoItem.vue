<script setup lang="ts">
const props = defineProps<{
  title?: string;
  created?: string;
  modified?: string;
}>();
const emit = defineEmits(["update", "remove"]);
import { ref } from "vue";
const text = ref(props.title);

const removeTodo = () => {
  emit("remove");
};

let isToDoDisabled = ref(true);
const updateTodo = () => {
  if (isToDoDisabled.value === true) {
    isToDoDisabled.value = !isToDoDisabled.value;
  }
  emit("update", text.value);
};

const getInfo = () => {
  let info;
  if (props.modified) {
    info =
      "Created at: " + props.created + "\n" + "Modified at: " + props.modified;
  } else {
    info = "Created at: " + props.created;
  }
  alert(info);
};
</script>

<template>
  <li class="todo-item">
    <input
      class="item-title"
      type="text"
      v-model="text"
      :disabled="isToDoDisabled"
      @blur="isToDoDisabled = !isToDoDisabled"
    />
    <div class="button-wrapper">
      <button class="info" @click="getInfo">?</button>
      <button class="update" @click="updateTodo" :disabled="!isToDoDisabled" />
      <button class="remove" @click="removeTodo" />
    </div>
  </li>
</template>

<style scoped>
@import "./../assets/base.css";

.update {
  background-image: url("./../assets/edit.png");
}

.remove {
  background-image: url("./../assets/delete.png");
}

.info,
.update,
.remove {
  width: var(--button-width);
  height: var(--button-height);
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
  box-shadow: 0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19);
  text-shadow: 2px 1px 2px azure;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.info:active,
.update:not(:disabled):active,
.remove:active {
  cursor: pointer;
}

.info:hover,
.update:not(:disabled):hover,
.remove:hover {
  box-shadow: 1px 1px 1px rgba(69, 69, 69, 0.7);
  cursor: pointer;
}

.update:disabled {
  opacity: 50%;
}

.todo-item {
  border: 1px solid cadetblue;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 10px 10px;
}

.button-wrapper {
  width: 10vw;
  display: flex;
  justify-content: space-between;
}

.item-title {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
}
</style>
