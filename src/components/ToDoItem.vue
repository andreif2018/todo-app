<script setup lang="ts">
import { toggleOff, toggleOn, validateInput } from "@/utils";
import { Response } from "@/model";
import CustomCheckbox from "@/components/CustomCheckbox.vue";
import { ref, watch } from "vue";

const props = defineProps<{
  title?: string;
  created?: string;
  modified?: string;
  isDone?: boolean;
}>();
const emit = defineEmits([
  Response.SAVE,
  Response.REMOVE,
  Response.HINT,
  Response.CHECK,
]);

const text = ref(props.title);
const isToDoDisabled = ref(true);
const isChecked = ref(props.isDone);
const hintMessage = ref();
let vFocus: { updated: (el: HTMLInputElement) => void };
vFocus = {
  updated: (el: HTMLInputElement) => el.focus(),
};

const edit = () => {
  toggleOff(isToDoDisabled);
};

const save = () => {
  if (!hintMessage.value) {
    emit(Response.SAVE, text.value);
    toggleOn(isToDoDisabled);
  }
};

const getInfo = () => {
  let info;
  if (props.modified) {
    info = `Created at: ${props.created}\nModified at: ${props.modified}`;
  } else {
    info = `Created at: ${props.created}`;
  }
  alert(info);
};

const handleCheck = () => {
  isChecked.value ? toggleOff(isChecked) : toggleOn(isChecked);
  emit(Response.CHECK, isChecked.value);
};

watch(
  () => text.value,
  (text) => {
    hintMessage.value = validateInput(text);
    emit(Response.HINT, hintMessage.value);
  }
);
</script>

<template>
  <li class="todo-item" draggable="true">
    <CustomCheckbox :is-checked="isChecked" @check="handleCheck" />
    <input
      :class="{ done: isChecked }"
      class="regular"
      type="text"
      v-model="text"
      :disabled="isToDoDisabled"
      v-focus
    />
    <div class="button-wrapper">
      <button class="edit" v-if="isToDoDisabled" @click="edit" />
      <button class="save" v-else @click="save">save</button>
      <button class="info" @click="getInfo">?</button>
      <button class="remove" @click="$emit(Response.REMOVE)" />
    </div>
  </li>
</template>

<style scoped>
@import "./../assets/base.css";

.edit {
  background-image: url("./../assets/edit.png");
}

.remove {
  background-image: url("./../assets/delete.png");
}

.save,
.info,
.edit,
.remove {
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  text-shadow: 2px 1px 2px azure;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.save {
  font-size: 1vw;
  background-color: lightskyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.save,
.info,
.edit,
.remove {
  width: var(--button-width);
  height: var(--button-height);
  font-weight: bold;
}

.save:not(:disabled):active,
.info:active,
.edit:not(:disabled):active,
.remove:active {
  cursor: pointer;
}

.save:not(:disabled):hover,
.info:hover,
.edit:not(:disabled):hover,
.remove:hover {
  box-shadow: 1px 1px 1px rgba(69, 69, 69, 0.7);
  cursor: pointer;
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
  width: max-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1vw;
}

.done {
  text-decoration: line-through;
}

.regular {
  border: none;
  font-size: var(--todo-font-size);
  padding-left: 15px;
  cursor: pointer;
  width: 50vw;
  height: 6vh;
  background-color: transparent;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  color: var(--color-text);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.done {
  text-decoration: line-through;
}

.regular:focus {
  background: cadetblue;
  border: blue;
}

.regular:invalid {
  border: 2px dashed red;
}
</style>
