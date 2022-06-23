<script setup lang="ts">
import { toggleOff, toggleOn } from "@/utils/utils";
import { ref } from "vue";

const props = defineProps<{
  msg: string;
  isChecked: boolean;
  left?: boolean;
  right?: boolean;
}>();

const isCheckedRef = ref(props.isChecked);

const handleCheck = () => {
  isCheckedRef.value ? toggleOff(isCheckedRef) : toggleOn(isCheckedRef);
};
</script>

<template>
  <div
    class="tab-wrapper"
    :class="{ checked: isCheckedRef, left: props.left, right: props.right }"
    @click="handleCheck"
  >
    <label for="tab">{{ props.msg }}</label>
    <input
      class="custom-tab"
      type="checkbox"
      :checked="isCheckedRef"
      name="tab"
    />
  </div>
</template>

<style scoped>
.tab-wrapper {
  border: 1px solid var(--color-border-custom);
  width: 7vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: smaller;
}

.tab-wrapper.checked {
  border: 2px solid var(--color-border-custom);
  background: mediumaquamarine;
  font-size: medium;
  font-weight: bold;
  color: #1c1e1c;
}

.custom-tab {
  appearance: none;
  border: none;
  background: none;
}

.custom-tab:checked {
  appearance: none;
  border: none;
  background: none;
}

.tab-wrapper:hover,
.tab-wrapper:active {
  border: 1px solid mediumaquamarine;
  box-shadow: 1px 1px 1px 1px var(--color-border-custom);
  cursor: pointer;
  text-decoration: underline;
}

.left {
  border-radius: 10px 0 0 10px;
}

.right {
  border-radius: 0 10px 10px 0;
}
</style>
