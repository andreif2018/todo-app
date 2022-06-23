<script setup lang="ts">
import { ref, watch } from "vue";
import ToolTip from "@/components/ToolTip.vue";
import { toggleOff, toggleOn, validateInput } from "@/utils/utils";
import { useToDoStore } from "@/stores/todos";

const text = ref("");
const hintMessage = ref();
const isNotified = ref(false);
const store = useToDoStore();

const addItem = () => {
  if (!isNotified.value) {
    toggleOn(isNotified);
    hintMessage.value = validateInput(text.value);
  }
  if (!hintMessage.value) {
    store.createNewItem(text.value);
    text.value = "";
    toggleOff(isNotified);
  }
};

const handleBlur = (event: Event) => {
  const target = event.target as HTMLInputElement;
  target?.blur();
};

watch(
  () => text.value,
  (text) => (hintMessage.value = validateInput(text))
);
</script>
<template>
  <div class="add-wrapper" @keyup.enter="addItem">
    <ToolTip v-if="isNotified && hintMessage" :msg="hintMessage" />
    <div class="add-container">
      <button class="add-button" @click="addItem">+</button>
      <input
        class="title"
        placeholder="Type Todo here..."
        type="text"
        v-model="text"
        @keydown.esc="handleBlur($event)"
        @keyup.enter="handleBlur($event)"
      />
    </div>
  </div>
</template>

<style scoped>
@import "./../assets/base.css";

.add-container {
  width: 55.4vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.add-button {
  cursor: pointer;
  width: var(--button-width);
  height: var(--button-height);
  background-color: mediumaquamarine;
  font-weight: bold;
  font-size: x-large;
  border-radius: 5px;
  box-shadow: 1px 1px 1px rgba(69, 69, 69, 0.7);
  text-shadow: 2px 1px 2px azure;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-button:hover,
.add-button:active {
  box-shadow: var(--box-shadow);
  cursor: pointer;
}

.add-wrapper {
  height: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}

.title {
  border: none;
  font-size: var(--todo-font-size);
  padding-left: 15px;
  cursor: pointer;
  width: 50vw;
  height: 6vh;
  background-color: azure;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
}

.title:focus {
  border: blue;
}

.title:invalid {
  border: 2px dashed red;
}
</style>
