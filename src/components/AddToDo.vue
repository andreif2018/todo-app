<script setup>
import { ref } from "vue";

const text = ref("");
const emit = defineEmits(["response"]);
const addItem = () => {
  emit("response", text);
  text.value = "";
};
</script>

<template>
  <div class="add-container">
    <button class="add-button" @click="addItem">+</button>
    <input
      v-model="text"
      class="add-message"
      maxlength="32"
      minlength="1"
      placeholder="Type ToDo name..."
    />
  </div>
</template>

<style scoped>
@import "./../assets/base.css";

.add-container {
  width: 60vw;
  height: 10vh;
  display: flex;
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

.add-message {
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
</style>
