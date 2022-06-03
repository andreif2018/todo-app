import type { Ref } from "vue";

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
