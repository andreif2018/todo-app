export enum enumScope {
  LENGTH_HINT = "Text length should be at least 3 characters",
  MIN_TEXT_LENGTH = 3,
}

export interface ITodo {
  _id?: number;
  text: string;
  createdTime: string;
  modifiedTime?: string;
  isDone: boolean;
}
