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
    <label v-if="!isCheckedRef" for="tab">Hide <br />{{ props.msg }}</label>
    <label v-else for="tab">Show <br />{{ props.msg }}</label>
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
  border: 1px solid cadetblue;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: smaller;
  text-align: center;
}

.tab-wrapper.checked {
  border: 2px solid mediumaquamarine;
  background: cadetblue;
  font-size: medium;
  font-weight: bold;
  text-shadow: 2px 2px #2c3e50;
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
  border: 2px solid mediumaquamarine;
  box-shadow: 1px 1px 1px 1px mediumaquamarine;
  cursor: pointer;
  text-decoration: underline;
}

.left {
  border-radius: 10px 0 0 10px;
}

.right {
  border-radius: 0 10px 10px 0;
}

@media only screen and (min-width: 1920px) {
  .tab-wrapper {
    width: 9vw;
  }
}

@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .tab-wrapper {
    width: 11vw;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1439px) {
  .tab-wrapper {
    width: 12vw;
  }
}

@media only screen and (min-width: 960px) and (max-width: 1199px) {
  .tab-wrapper {
    width: 14vw;
  }
}

@media only screen and (min-width: 780px) and (max-width: 959px) {
  .tab-wrapper {
    width: 20vw;
  }
}

@media only screen and (min-width: 640px) and (max-width: 779px) {
  .tab-wrapper {
    width: 22vw;
  }
}

@media only screen and (min-width: 360px) and (max-width: 639px) {
  .tab-wrapper {
    width: 28vw;
    flex-direction: column;
  }
}
</style>
