<script setup lang="ts">
import { toggleOff, toggleOn } from "@/utils";

const props = defineProps<{
  title?: string;
  created?: string;
  modified?: string;
  isDone?: boolean;
}>();
const emit = defineEmits(["update", "remove", "hint", "check"]);
import { ref } from "vue";
import CustomCheckbox from "@/components/CustomCheckbox.vue";
const text = ref(props.title);
let isToDoDisabled = ref(true);
const isChecked = ref(props.isDone);
let vFocus: { updated: (el: HTMLInputElement) => void };
vFocus = {
  updated: (el: HTMLInputElement) => el.focus(),
};

const removeTodo = () => {
  emit("remove");
};

const editTodo = () => {
  toggleOff(isToDoDisabled);
};

const updateTodo = () => {
  if (text.value && text.value.length >= 2) {
    toggleOn(isToDoDisabled);
    emit("update", text.value);
  }
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

const handleTip = () => {
  if (text.value && text.value.length >= 2) {
    emit("hint", false);
  } else {
    emit("hint", true);
  }
};

const handleCheck = () => {
  isChecked.value ? toggleOff(isChecked) : toggleOn(isChecked);
  emit("check", isChecked.value);
};
</script>

<template>
  <li class="todo-item">
    <CustomCheckbox :is-checked="isChecked" @check="handleCheck" />
    <input
      class="item-title"
      :class="{ done: isChecked }"
      type="text"
      v-model="text"
      :disabled="isToDoDisabled"
      v-focus
      maxlength="48"
      minlength="2"
      @input="handleTip"
    />
    <div class="button-wrapper">
      <button class="edit" v-if="isToDoDisabled" @click="editTodo" />
      <button class="save" v-else @click="updateTodo">save</button>
      <button class="info" @click="getInfo">?</button>
      <button class="remove" @click="removeTodo" />
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

.done,
.save,
.info,
.edit,
.remove {
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

.save {
  font-size: 1.2rem;
  background-color: lightskyblue;
}

.save,
.info,
.edit,
.remove {
  width: var(--button-width);
  height: var(--button-height);
  font-weight: bold;
}

.save:active,
.info:active,
.edit:not(:disabled):active,
.remove:active {
  cursor: pointer;
}

.save:hover,
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

.item-title {
  width: 70%;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.5rem;
}

.item-title:focus {
  background: cadetblue;
  border: blue;
}

.item-title:invalid {
  border: 2px dashed red;
}

.done {
  text-decoration: line-through;
}
</style>
