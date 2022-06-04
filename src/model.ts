export enum InputEnum {
  MIN_HINT = "Text length should be at least 3 characters",
  MAX_HINT = "Text length should be maximum 32 characters",
  MIN_LENGTH = 3,
  MAX_LENGTH = 32,
}

export enum Response {
  VALIDATE = "validate",
  SAVE = "save",
  REMOVE = "remove",
  HINT = "hint",
  CHECK = "check",
}

export type ITodo = {
  _id?: number;
  text: string;
  createdTime: string;
  modifiedTime?: string;
  isDone: boolean;
};
