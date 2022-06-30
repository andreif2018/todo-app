import type { Ref } from "vue";
import { InputEnum } from "@/model/model";

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
  const data = String(inputText);
  if (data.length > InputEnum.MAX_LENGTH) {
    return InputEnum.MAX_HINT;
  } else if (data?.length < InputEnum.MIN_LENGTH) {
    return InputEnum.MIN_HINT;
  } else {
    return;
  }
};
