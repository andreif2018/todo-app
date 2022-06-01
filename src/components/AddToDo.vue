<script setup lang="ts">
import { ref } from "vue";
import ToolTip from "@/components/ToolTip.vue";
import { toolTipEnum, toggleOn, toggleOff } from "@/utils";

const text = ref("");
const emit = defineEmits(["response"]);
let isWrongLength = ref(false);

const addItem = () => {
  if (text.value.length >= 2) {
    toggleOff(isWrongLength);
    emit("response", text);
    text.value = "";
  } else {
    toggleOn(isWrongLength);
  }
};
</script>
<template>
  <div class="add-wrapper">
    <ToolTip
      v-if="text.length < 2 && isWrongLength"
      :msg="toolTipEnum.LENGTH"
    />
    <div class="add-container">
      <button class="add-button" @click="addItem">+</button>
      <input
        v-model="text"
        class="todo"
        maxlength="48"
        minlength="2"
        placeholder="Type ToDo name..."
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

.todo {
  padding-left: 15px;
  cursor: pointer;
  width: 50vw;
  height: 6vh;
  background-color: azure;
  font-weight: bold;
  font-size: medium;
  border-radius: 5px;
  box-shadow: 0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19),
    0 2px 3px 1px rgba(255, 255, 255, 0.19);
}

.todo:invalid {
  border: 2px dashed red;
}

.add-wrapper {
  height: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
</style>
