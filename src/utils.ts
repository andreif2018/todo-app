import type { Ref } from "vue";
import { InputEnum, DragAndDropEnum } from "@/model";
import type { ITodo } from "@/model";

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

export const validateInput = (inputText: string | undefined) => {
  if (inputText && inputText.length > InputEnum.MAX_LENGTH) {
    return InputEnum.MAX_HINT;
  } else if (inputText && inputText.length < InputEnum.MIN_LENGTH) {
    return InputEnum.MIN_HINT;
  } else if (inputText?.length === 0) {
    return InputEnum.MIN_HINT;
  } else {
    return;
  }
};

/* Drag and Drop API */
export const onDragStart = (event: DragEvent, index: number) => {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData(DragAndDropEnum.ITEM_INDEX, index.toString());
  } else throw Error("drag event error occurs");
};

const swapItems = (startIndex: number, dropIndex: number, list: ITodo[]) => {
  const tempoStart = list[startIndex];
  list[startIndex] = list[dropIndex];
  list[dropIndex] = tempoStart;
};

export const onDrop = (event: DragEvent, index: number, list: ITodo[]) => {
  if (event.dataTransfer) {
    swapItems(
      Number(event.dataTransfer.getData(DragAndDropEnum.ITEM_INDEX)),
      index,
      list
    );
  }
};
/*  *** */
