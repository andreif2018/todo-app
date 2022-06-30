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
  <div :class="{ onState: props.isChecked }" @click="handleCheck">
    <input
      v-if="!isCheckedRef"
      class="toggle"
      type="checkbox"
      :checked="!isCheckedRef"
    />
    <input
      v-else
      class="toggle checked"
      type="checkbox"
      :checked="isCheckedRef"
    />
  </div>
</template>

<style scoped>
@import "./../assets/base.css";
.toggle {
  appearance: none;
  width: calc(var(--toggle-width) / 1.5);
  height: calc(var(--toggle-height) / 1.5);
  background: url("../assets/non-urgent.svg") transparent no-repeat center
    center / contain;
  outline: none;
}

.checked {
  appearance: none;
  background: url("../assets/urgent.svg") transparent no-repeat center center /
    contain;
}

.toggle:hover {
  transform: scale(110%);
  cursor: pointer;
}

.toggle:active {
  transform: scale(125%);
  cursor: pointer;
}

.onState {
  transform: scale(160%);
}

@media only screen and (max-width: 779px) {
  .toggle {
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
  }

  .onState {
    transform: scale(135%);
  }
}
</style>
