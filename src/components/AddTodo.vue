<script setup lang="ts">
import { ref, watch } from "vue";
import HintItem from "@/components/HintItem.vue";
import { toggleOff, toggleOn, validateInput } from "@/utils/utils";
import { useToDoStore } from "@/stores/todos";
import { InputEnum } from "@/model/model";

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
  (text) => {
    hintMessage.value = validateInput(text);
    if (text.length >= InputEnum.MIN_LENGTH) {
      toggleOn(isNotified);
    }
  }
);
</script>
<template>
  <article class="add-todo-wrapper" @keyup.enter="addItem">
    <HintItem v-if="isNotified && hintMessage" :msg="hintMessage" />
    <div class="add-container">
      <input
        class="title"
        placeholder="Type Todo here..."
        type="text"
        v-model="text"
        @keydown.esc="handleBlur($event)"
        @keyup.enter="handleBlur($event)"
        minlength="3"
      />
      <button class="add-button" @click="addItem">+</button>
    </div>
  </article>
</template>

<style scoped>
@import "./../assets/base.css";

.add-container {
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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

.add-todo-wrapper {
  width: var(--width-work-area);
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
  width: 80%;
  height: 5vh;
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

@media only screen and (min-width: 1920px) {
  .add-container {
    width: 60%;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .add-container {
    width: 75%;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1439px) {
  .add-container {
    width: 90%;
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .add-container {
    width: 95%;
  }
}

@media only screen and (min-width: 780px) and (max-width: 959px) {
  .add-container {
    width: 100%;
  }
}

@media only screen and (min-width: 640px) and (max-width: 779px) {
  .add-container {
    width: 100%;
  }
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .add-container {
    width: 100%;
  }
}
</style>
