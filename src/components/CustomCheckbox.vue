<script setup lang="ts">
import { toggleOff, toggleOn } from "@/utils";
const props = defineProps<{
  isChecked?: boolean;
}>();
const emit = defineEmits(["check"]);
import { ref } from "vue";
const isCheckedRef = ref(props.isChecked);
const handleCheck = () => {
  isCheckedRef.value ? toggleOff(isCheckedRef) : toggleOn(isCheckedRef);
  emit("check", isCheckedRef.value);
};
</script>

<template>
  <input
    class="customCheck"
    type="checkbox"
    @click="handleCheck"
    :checked="isCheckedRef"
  />
</template>

<style scoped>
@import "./../assets/base.css";
.customCheck {
  appearance: none;
  width: calc(var(--button-width) / 2);
  height: calc(var(--button-height) / 2);
  border: 1px solid slategray;
  border-radius: 5px;
  background-color: snow;
}

.customCheck:checked {
  appearance: none;
  background-color: lightgray;
  background-size: contain;
  background-image: url("./../assets/tick.svg");
  background-repeat: no-repeat;
  background-position: center center;
}

.customCheck:active {
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px mediumaquamarine;
}

.customCheck:hover {
  box-shadow: 1px 1px 1px 1px mediumaquamarine;
  cursor: pointer;
}
</style>
