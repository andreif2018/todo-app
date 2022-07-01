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
    store.createNewItem(String(text.value));
    text.value = "";
    toggleOff(isNotified);
  }
};

const handleBlur = (event: Event) => {
  const target = event.target as HTMLInputElement;
  target?.blur();
};

const hideHint = () => {
  toggleOff(isNotified);
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
        @blur="hideHint"
      />
      <button class="add-button" @click="addItem">Add</button>
    </div>
  </article>
</template>

<style scoped>
@import "./../assets/base.css";

.add-container {
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.add-button {
  cursor: pointer;
  height: var(--button-height);
  background-color: mediumaquamarine;
  font-weight: bold;
  font-size: medium;
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
  height: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  .add-todo-wrapper {
    width: var(--top-block-width);
  }

  .add-button {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .add-todo-wrapper {
    width: var(--top-block-width);
  }

  .add-button {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1439px) {
  .add-todo-wrapper {
    width: var(--top-block-width);
  }

  .add-button {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .add-todo-wrapper {
    width: var(--top-block-width);
  }

  .add-button {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 780px) and (max-width: 959px) {
  .add-todo-wrapper {
    width: var(--top-block-width);
  }

  .add-button {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 640px) and (max-width: 779px) {
  .add-todo-wrapper {
    width: var(--top-block-width);
  }

  .add-button {
    width: var(--button-width);
  }
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .add-todo-wrapper {
    width: var(--top-block-width);
    height: 15vh;
    justify-content: flex-end;
  }

  .add-container {
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1vh;
    height: 11vh;
  }

  .title {
    width: 100%;
    padding-left: 10px;
  }

  .add-button {
    width: var(--button-width);
    font-size: medium;
  }

  .title {
    height: 3.5vh;
  }
}
</style>
