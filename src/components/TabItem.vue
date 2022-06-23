<script setup lang="ts">
import { toggleOff, toggleOn } from "@/utils/utils";
import { ref } from "vue";
const props = defineProps<{
  msg: string;
  isChecked: boolean;
  left?: boolean;
}>();
const isCheckedRef = ref(props.isChecked);
const handleCheck = () => {
  isCheckedRef.value ? toggleOff(isCheckedRef) : toggleOn(isCheckedRef);
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

<style scoped></style>
