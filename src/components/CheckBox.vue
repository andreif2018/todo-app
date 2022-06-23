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
  emit(Response.CHECK, isCheckedRef.value);
};
</script>

<template>
  <input
    class="custom-check"
    type="checkbox"
    @click="handleCheck"
    :checked="isCheckedRef"
  />
</template>

<style scoped>
@import "./../assets/base.css";
.custom-check {
  appearance: none;
  width: calc(var(--button-width) / 2);
  height: calc(var(--button-height) / 2);
  border: 1px solid slategray;
  border-radius: 5px;
  background-color: snow;
}

.custom-check:checked {
  appearance: none;
  background: url("./../assets/tick.svg") lightgray no-repeat center center /
    contain;
}

.custom-check:hover,
.custom-check:active {
  box-shadow: 1px 1px 1px 1px mediumaquamarine;
  cursor: pointer;
}
</style>
