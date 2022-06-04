import type { Ref } from "vue";
import { TextEnum } from "@/model";

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

export const validateInput = (
  inputText: string | undefined,
  minHint: Ref,
  MaxHint: Ref
) => {
  if (inputText && inputText.length > TextEnum.MAX_LENGTH) {
    toggleOff(minHint);
    toggleOn(MaxHint);
  } else if (inputText && inputText.length >= TextEnum.MIN_LENGTH) {
    toggleOff(MaxHint);
    toggleOff(minHint);
  } else {
    toggleOff(MaxHint);
    toggleOn(minHint);
  }
};
