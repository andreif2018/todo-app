export enum InputEnum {
  MIN_HINT = "Text length should be at least 3 characters",
  MAX_HINT = "Text length should be maximum 48 characters",
  MIN_LENGTH = 3,
  MAX_LENGTH = 48,
  DUPLICATE = "ToDo with such name already exists",
  OVERFLOW = "List is full, remove todo to add new one",
  LIST_MAX_LENGTH = 12,
}

export enum Response {
  HINT = "hint",
  HIDE = "hide",
  CHECK = "check",
  TOGGLE = "toggle",
  EDIT = "edit",
  SAVE = "save",
  INFO = "info",
}

export type ITodo = {
  _id: string;
  todoName: string;
  createdTime: string;
  modifiedTime?: string;
  completedTime?: string;
  isCompleted: boolean;
  isUrgent: boolean;
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

export enum FilterEnum {
  COMPLETED = "Completed",
  NON_URGENT_ITEMS = "Non-urgent",
}

export enum PriorityEnum {
  URGENT = "Urgent !!!",
  NON_URGENT = "Non-urgent",
}

export type IStore = {
  todos: {
    list: ITodo[];
    titles: string[];
    hideCompleted: boolean;
    hideLowPriority: boolean;
  };
};
