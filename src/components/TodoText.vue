<script setup lang="ts">
import { ref } from "vue";
import { enumScope } from "@/model";

const props = defineProps<{
  title?: string;
  reset?: boolean;
  placeHolder?: string;
  isDone?: boolean;
  isDisabled?: boolean;
}>();
const emit = defineEmits(["response"]);
const text = ref(props.title ? props.title : "");
let vFocus: { updated: (el: HTMLInputElement) => void };
vFocus = {
  updated: (el: HTMLInputElement) => {
    el.focus();
    if (props.reset) {
      text.value = "";
    }
  },
};

const handleText = () => {
  if (text.value && text.value.length >= enumScope.MIN_TEXT_LENGTH) {
    emit("response", [true, text.value]);
  } else {
    emit("response", [false, text.value]);
  }
};
</script>

<template>
  <input
    v-model="text"
    :class="{
      done: props.isDone,
      todo: props.placeHolder,
      title: !props.placeHolder,
    }"
    type="text"
    :disabled="props.isDisabled"
    v-focus
    maxlength="48"
    minlength="2"
    @input="handleText"
    :placeholder="props.placeHolder"
  />
</template>

<style scoped>
@import "./../assets/base.css";
.done {
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-decoration: line-through;
}

.title {
  width: 70%;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: large;
}

.title:focus {
  background: cadetblue;
  border: blue;
}

.title:invalid {
  border: 2px dashed red;
}

.todo {
  padding-left: 15px;
  cursor: pointer;
  width: 50vw;
  height: 6vh;
  background-color: azure;
  font-weight: bold;
  font-size: large;
  border-radius: 5px;
  box-shadow: 0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19);
}

.todo:invalid {
  border: 2px dashed red;
}
</style>
