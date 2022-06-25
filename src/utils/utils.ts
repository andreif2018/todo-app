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
  if (inputText?.length > InputEnum.MAX_LENGTH) {
    return InputEnum.MAX_HINT;
  } else if (inputText?.length < InputEnum.MIN_LENGTH) {
    return InputEnum.MIN_HINT;
  } else if (inputText?.length === 0) {
    return InputEnum.MIN_HINT;
  } else {
    return;
  }
};
