<script setup lang="ts">
import { ref, watch } from "vue";
import ToolTip from "@/components/ToolTip.vue";
import { toggleOn, validateInput } from "@/utils";
import { Response, TextEnum } from "@/model";

const text = ref("");
const emit = defineEmits([Response.VALIDATE, Response.SAVE]);
const isOverMax = ref(true);
const isBelowMin = ref(true);
const isNotified = ref(false);

const addItem = () => {
  if (!isNotified.value) {
    toggleOn(isNotified);
  }
  if (!isBelowMin.value && !isOverMax.value) {
    emit(Response.SAVE, text.value);
    text.value = "";
  }
};

watch(
  () => text.value,
  (text) => {
    validateInput(text, isBelowMin, isOverMax);
    console.log(`handling ${text}`);
  }
);
</script>
<template>
  <div class="add-wrapper">
    <ToolTip v-if="isNotified && isOverMax" :msg="TextEnum.MAX_HINT" />
    <ToolTip v-else-if="isNotified && isBelowMin" :msg="TextEnum.MIN_HINT" />
    <div class="add-container">
      <button class="add-button" @click="addItem">+</button>
      <input
        class="title"
        placeholder="Type Todo here..."
        type="text"
        v-model="text"
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
  box-shadow: var(--box-shadow);
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

.title {
  border: none;
  font-size: 1.2vw;
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
