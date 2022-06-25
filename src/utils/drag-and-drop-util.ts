import { DragAndDropEnum } from "@/model/model";
import type { ITodo } from "@/model/model";

/* Drag and Drop API */
export const onDragStart = (event: DragEvent, index: number) => {
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData(DragAndDropEnum.ITEM_INDEX, index.toString());
  } else throw Error("drag event error occurs");
};

export const swapItems = (
  startIndex: number,
  dropIndex: number,
  list: ITodo[]
) => {
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
