<script setup lang="ts">
import { toggleOff, toggleOn } from "@/utils/utils";
import { ref } from "vue";
import { Response } from "@/model/model";
const props = defineProps<{
  isChecked?: boolean;
}>();
const emit = defineEmits([Response.CHECK]);
const isCheckedRef = ref(props.isChecked);
const handleCheck = () => {
  isCheckedRef.value ? toggleOff(isCheckedRef) : toggleOn(isCheckedRef);
  emit(Response.CHECK);
};
</script>

<template>
  <div class="checkbox-wrapper" @click="handleCheck">
    <input
      v-if="!isCheckedRef"
      class="checkbox"
      type="checkbox"
      :checked="!isCheckedRef"
    />
    <input
      v-else
      class="checkbox checked"
      type="checkbox"
      :checked="isCheckedRef"
    />
  </div>
</template>

<style scoped>
@import "./../assets/base.css";
.checkbox {
  appearance: none;
  width: calc(var(--toggle-width) / 2);
  height: calc(var(--toggle-height) / 2);
  border: 1px solid slategray;
  border-radius: 5px;
  background-color: snow;
}

.checked {
  appearance: none;
  background: url("./../assets/tick.svg") lightgray no-repeat center center /
    contain;
}

.checkbox:hover,
.checkbox:active {
  box-shadow: 1px 1px 1px 1px mediumaquamarine;
  cursor: pointer;
}

.checkbox-wrapper {
  width: max-content;
  height: max-content;
}

@media only screen and (max-width: 779px) {
  .checkbox {
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
  }
}
</style>
