<script setup lang="ts">
import { toggleOff, toggleOn, validateInput } from "@/utils/utils";
import type { ITodo } from "@/model/model";
import { Response } from "@/model/model";
import { ref, watch } from "vue";
import { useToDoStore } from "@/stores/todos";

const props = defineProps<{
  item: ITodo;
}>();
const emit = defineEmits([
  Response.HINT,
  Response.SAVE,
  Response.EDIT,
  Response.INFO,
]);

const store = useToDoStore();
const text = ref(props.item.todoName);
const isToDoDisabled = ref(true);
const hintMessage = ref();

const edit = () => {
  toggleOff(isToDoDisabled);
  emit(Response.EDIT);
};

const save = () => {
  if (!hintMessage.value) {
    store.updateItem(props.item._id, String(text.value));
    toggleOn(isToDoDisabled);
    emit(Response.SAVE);
  }
};

const remove = () => {
  store.deleteItem(props.item._id);
};

const getInfo = () => {
  emit(Response.INFO);
};

watch(
  () => text.value,
  (text) => {
    hintMessage.value = validateInput(text);
    emit(Response.HINT, hintMessage.value);
  }
);
</script>

<template>
  <div class="button-container">
    <button class="edit" v-if="isToDoDisabled" @click="edit" />
    <button class="save" v-else @click="save" />
    <button class="info" @click="getInfo" />
    <button class="remove" @click="remove" />
  </div>
</template>

<style scoped>
@import "./../assets/base.css";

.edit {
  background-image: url(../assets/lock.svg);
}

.edit:hover {
  background-image: url(../assets/lock-hover.svg);
}

.info:hover {
  background-image: url(../assets/info-hover.svg);
}

.remove {
  background-image: url(../assets/remove.svg);
  background-color: lightcoral;
}

.edit,
.save,
.info {
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  outline: none;
  background-size: cover;
  width: var(--toggle-width);
  height: var(--toggle-height);
}

.save {
  background-image: url(../assets/unlock.svg);
}

.info {
  background-image: url(../assets/info.svg);
}

.save:active,
.info:active,
.edit:active,
.remove:active,
.save:hover,
.info:hover,
.edit:hover,
.remove:hover {
  cursor: pointer;
  transform: scale(120%);
}

.remove {
  box-shadow: 1px 1px 1px rgba(69, 69, 69, 0.7);
  font-size: medium;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border-radius: 5px;
  background-size: cover;
  width: var(--toggle-width);
  height: var(--toggle-height);
}

.remove:hover,
.remove:active {
  box-shadow: var(--box-shadow);
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1vw;
}

@media only screen and (min-width: 1440px) {
  .button-container {
    width: 20%;
  }
}

@media only screen and (max-width: 1439px) {
  .button-container {
    width: 15%;
  }
}

@media only screen and (max-width: 1439px) {
  .edit,
  .remove,
  .save,
  .info {
    background-size: 100%;
    width: 37px;
    height: 37px;
  }
}

@media only screen and (min-width: 640px) and (max-width: 959px) {
  .edit,
  .remove,
  .save,
  .info {
    background-size: 100%;
    width: 25px;
    height: 25px;
  }
}

@media only screen and (max-width: 639px) {
  .button-container {
    width: 30%;
  }
}
</style>
