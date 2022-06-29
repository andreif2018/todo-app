<script setup lang="ts">
import { toggleOff, toggleOn, validateInput } from "@/utils/utils";
import type { ITodo } from "@/model/model";
import { Response, StyleEnum } from "@/model/model";
import CheckBox from "@/components/CheckBox.vue";
import { ref, watch } from "vue";
import ModalPopup from "@/components/ModalPopup.vue";
import { useToDoStore } from "@/stores/todos";
import ToggleButton from "@/components/ToggleButton.vue";

const props = defineProps<{
  item: ITodo;
}>();
const emit = defineEmits([Response.HINT]);

const store = useToDoStore();
const text = ref(props.item.todoName);
const isToDoDisabled = ref(true);
const hintMessage = ref();
const rowStyle = ref(StyleEnum.FLEX);
const modalStyle = ref(StyleEnum.NONE);
const isModal = ref(false);
let vFocus: { updated: (el: HTMLInputElement) => void };
vFocus = {
  updated: (el: HTMLInputElement) => {
    el.focus();
  },
};

const edit = () => {
  toggleOff(isToDoDisabled);
};

const save = () => {
  if (!hintMessage.value) {
    store.updateItem(props.item._id, text.value);
    toggleOn(isToDoDisabled);
  }
};

const remove = () => {
  store.deleteItem(props.item._id);
};

const getInfo = () => {
  rowStyle.value = StyleEnum.NONE;
  modalStyle.value = StyleEnum.FLEX;
  toggleOn(isModal);
};

const closeModal = () => {
  modalStyle.value = StyleEnum.NONE;
  rowStyle.value = StyleEnum.FLEX;
  toggleOff(isModal);
};

const handleCheck = () => {
  store.checkToDo(props.item._id);
};

const handleToggle = () => {
  store.setPriority(props.item._id);
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
  <li class="todo-item">
    <ToggleButton
      :is-checked="props.item.isUrgent"
      @toggle="handleToggle"
      :style="{ display: rowStyle }"
    />
    <CheckBox
      :is-checked="props.item.isCompleted"
      @check="handleCheck"
      :style="{ display: rowStyle }"
    />
    <input
      :class="{ done: props.item.isCompleted, attention: hintMessage }"
      class="regular"
      type="text"
      v-model="text"
      :disabled="isToDoDisabled"
      v-focus
      :style="{ display: rowStyle }"
      @keyup.enter="save"
      @keyup.esc="save"
      minlength="3"
    />
    <div class="button-container" :style="{ display: rowStyle }">
      <button class="edit" v-if="isToDoDisabled" @click="edit" />
      <button class="save" v-else @click="save" />
      <button class="info" @click="getInfo" />
      <button class="remove" @click="remove" />
    </div>
    <ModalPopup
      v-if="isModal"
      :msg="props.item"
      :style="{ display: modalStyle }"
      @hide="closeModal"
    />
  </li>
</template>

<style scoped>
@import "./../assets/base.css";

.edit {
  background-image: url(../assets/lock.svg);
}

.edit:hover {
  background-image: url(../assets/lock-hover.svg);
}

.info:hover {
  background-image: url(../assets/info-hover.svg);
}

.remove {
  background-image: url(../assets/remove.svg);
  background-color: lightcoral;
}

.edit,
.save,
.info {
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  outline: none;
  background-size: cover;
  width: var(--button-width);
  height: var(--button-height);
}

.save {
  background-image: url(../assets/unlock.svg);
}

.info {
  background-image: url(../assets/info.svg);
}

.save:active,
.info:active,
.edit:active,
.remove:active,
.save:hover,
.info:hover,
.edit:hover,
.remove:hover {
  cursor: pointer;
  transform: scale(120%);
}

.remove {
  box-shadow: 1px 1px 1px rgba(69, 69, 69, 0.7);
  font-size: medium;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border-radius: 5px;
  background-size: cover;
  width: var(--button-width);
  height: var(--button-height);
}

.remove:hover,
.remove:active {
  box-shadow: var(--box-shadow);
}

.todo-item {
  border: none;
  height: 4.5vh;
  width: 96%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  position: relative;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1vw;
}

.done {
  text-decoration: line-through;
}

.regular {
  border: 1px solid var(--color-border-custom);
  font-size: var(--todo-font-size);
  padding-left: 15px;
  cursor: pointer;
  height: 4vh;
  background-color: transparent;
  font-weight: bold;
  border-radius: 5px;
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
  text-shadow: 2px 2px #2c3e50;
}

.regular:invalid {
  border: 2px dashed red;
}

.attention {
  border: 2px dashed red;
  border-spacing: 1px;
}

@media only screen and (min-width: 1440px) {
  .regular {
    width: 65%;
  }

  .button-container {
    width: 20%;
  }

  .todo-item {
    padding: 10px;
  }
}

@media only screen and (max-width: 1439px) {
  .regular {
    width: 70%;
  }

  .todo-item {
    padding: 3px;
  }

  .button-container {
    width: 15%;
  }
}

@media only screen and (max-width: 1439px) {
  .edit,
  .remove,
  .save,
  .info {
    background-size: 100%;
    width: 37px;
    height: 37px;
  }
}

@media only screen and (max-width: 959px) {
  .edit,
  .remove,
  .save,
  .info {
    background-size: 100%;
    width: 25px;
    height: 25px;
  }
}
</style>
