import type { Ref } from "vue";

export const toolTipEnum = Object.freeze({
  LENGTH: "Text length should be at least 2 characters",
  DUPLICATE: "Todo with such name already exists",
});

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

export default {
  toolTipEnum,
  toggleOn,
  toggleOff,
};
