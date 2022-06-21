export enum InputEnum {
  MIN_HINT = "Text length should be at least 3 characters",
  MAX_HINT = "Text length should be maximum 32 characters",
  MIN_LENGTH = 3,
  MAX_LENGTH = 32,
}

export enum Response {
  HINT = "hint",
  HIDE = "hide",
}

export type ITodo = {
  _id: string;
  todoName: string;
  createdTime: string;
  modifiedTime?: string;
  completedTime?: string;
  isDone: boolean;
};

export enum DragAndDropEnum {
  ITEM_INDEX = "ITEM_INDEX",
}

export const regular = {
  borderColor: "cadetblue",
  borderStyle: "solid",
};

export const target = {
  borderColor: "azure",
  borderStyle: "dashed",
};

export enum StyleEnum {
  NONE = "none",
  FLEX = "flex",
}

export type IStore = {
  todos: ITodo[];
};
