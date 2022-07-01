import type { Ref } from "vue";
import { InputEnum } from "@/model/model";
import { useToDoStore } from "@/stores/todos";

export const toggleOn = (element: Ref) => {
  if (element.value === false) {
    element.value = !element.value;
  }
};

export const toggleOff = (element: Ref) => {
  if (element.value === true) {
    element.value = !element.value;
  }
};

export const validateInput = (inputText: string) => {
  const store = useToDoStore();
  const data = String(inputText);
  if (store.todos.list.length >= InputEnum.LIST_MAX_LENGTH) {
    return InputEnum.OVERFLOW;
  }
  if (data.length > InputEnum.MAX_LENGTH) {
    return InputEnum.MAX_HINT;
  } else if (data?.length < InputEnum.MIN_LENGTH) {
    return InputEnum.MIN_HINT;
  } else if (store.todos.titles.includes(data)) {
    return InputEnum.DUPLICATE;
  } else {
    return;
  }
};
