<script setup lang="ts">
import { toggleOff, toggleOn, validateInput } from "@/utils/utils";
import type { ITodo } from "@/model/model";
import { Response, StyleEnum } from "@/model/model";
import CheckBox from "@/components/CheckBox.vue";
import { ref, watch } from "vue";
import ModalPopup from "@/components/ModalPopup.vue";
import { useToDoStore } from "@/stores/todos";
import ToggleButton from "@/components/ToggleButton.vue";
import ToolBar from "@/components/ToolBar.vue";

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
  store.editItem(text.value);
};

const save = () => {
  if (!hintMessage.value) {
    store.updateItem(props.item._id, String(text.value));
    toggleOn(isToDoDisabled);
  }
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
    <ToolBar
      :item-id="props.item._id"
      :item-name="props.item.todoName"
      @edit="edit"
      @save="save"
      @info="getInfo"
      v-if="!isModal"
    />
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

.regular:focus {
  background: cadetblue;
  border: blue;
  text-shadow: 2px 2px #2c3e50;
}

.regular:invalid {
  border: 2px dashed red;
}

@media only screen and (min-width: 1440px) {
  .regular {
    width: 65%;
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
}

@media only screen and (max-width: 639px) {
  .todo-item {
    display: none;
  }
}
</style>
