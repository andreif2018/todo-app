<script setup lang="ts">
import { toggleOff, toggleOn } from "@/utils/utils";
import { ref } from "vue";
import { useToDoStore } from "@/stores/todos";

const props = defineProps<{
  msg: string;
  left?: boolean;
  right?: boolean;
}>();

const store = useToDoStore();
const isCheckedRef = ref(false);

const handleCheck = () => {
  isCheckedRef.value ? toggleOff(isCheckedRef) : toggleOn(isCheckedRef);
  store.setFilter(props.msg);
};
</script>

<template>
  <div
    class="tab-wrapper"
    :class="{ checked: isCheckedRef, left: props.left, right: props.right }"
    @click="handleCheck"
  >
    <label v-if="!isCheckedRef" for="tab">Show<br />{{ props.msg }}</label>
    <label v-else for="tab">Hide<br />{{ props.msg }}</label>
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
  border: 1px solid mediumaquamarine;
  width: 8vw;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: smaller;
  text-align: center;
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
  border: 2px solid cadetblue;
  box-shadow: 1px 1px 1px 1px cadetblue;
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
