<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title?: string;
  isDone?: boolean;
  isDisabled?: boolean;
}>();
const text = ref(props.title);
let vFocus: { updated: (el: HTMLInputElement) => void };
vFocus = {
  updated: (el: HTMLInputElement) => el.focus(),
};
</script>

<template>
  <input
    class="item-title"
    v-model="text"
    :class="{ done: props.isDone }"
    type="text"
    :disabled="props.isDisabled"
    v-focus
    maxlength="48"
    minlength="2"
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
</style>
