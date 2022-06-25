<script setup lang="ts">
import { toggleOff, toggleOn } from "@/utils/utils";
import { ref } from "vue";
import { Response } from "@/model/model";

const props = defineProps<{
  isChecked?: boolean;
}>();

const emit = defineEmits([Response.TOGGLE]);
const isCheckedRef = ref(props.isChecked);
const handleCheck = () => {
  isCheckedRef.value ? toggleOff(isCheckedRef) : toggleOn(isCheckedRef);
  emit(Response.TOGGLE);
};
</script>

<template>
  <input
    class="toggle"
    type="checkbox"
    @click="handleCheck"
    :checked="isCheckedRef"
  />
</template>

<style scoped>
@import "./../assets/base.css";
.toggle {
  appearance: none;
  width: calc(var(--button-width));
  height: calc(var(--button-height));
  background: url("./../assets/priority.svg") transparent no-repeat center
    center / contain;
  outline: none;
}

.toggle:checked {
  appearance: none;
  background: url("../assets/priority-on.svg") transparent no-repeat center
    center / contain;
}

.toggle:hover {
  transform: scale(105%);
  cursor: pointer;
}

.toggle:active {
  transform: scale(110%);
  cursor: pointer;
}
</style>
