<script setup lang="ts">
import { ref } from "vue";
import ToolTip from "@/components/ToolTip.vue";
import { toggleOn, toggleOff } from "@/utils";
import { enumScope } from "@/model";
import TodoText from "@/components/TodoText.vue";

const text = ref("");
const emit = defineEmits(["response"]);
let isValidText = ref(false);
let isTriggeredButton = ref(false);
let isReset = ref(false);

const addItem = () => {
  if (!isTriggeredButton.value) {
    toggleOn(isTriggeredButton);
  }
  if (isValidText.value) {
    emit("response", text.value);
    toggleOn(isReset);
  }
};

const validateText = ([status, inputText]: [boolean, string]) => {
  if (status) {
    toggleOn(isValidText);
    text.value = inputText;
  } else {
    toggleOff(isValidText);
    toggleOff(isReset);
  }
};
</script>
<template>
  <div class="add-wrapper">
    <ToolTip
      v-if="isTriggeredButton && !isValidText"
      :msg="enumScope.LENGTH_HINT"
    />
    <div class="add-container">
      <button class="add-button" @click="addItem">+</button>
      <TodoText
        :reset="isReset"
        place-holder="Type Todo here..."
        @response="(msg) => validateText(msg)"
      />
    </div>
  </div>
</template>

<style scoped>
@import "./../assets/base.css";

.add-container {
  width: 60vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
  box-shadow: 0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19);
  text-shadow: 2px 1px 2px azure;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-button:active {
  cursor: pointer;
}

.add-button:hover {
  box-shadow: 1px 1px 1px rgba(69, 69, 69, 0.7);
  cursor: pointer;
}

.add-wrapper {
  height: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
</style>
