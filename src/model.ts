export const toolTipEnum = Object.freeze({
  LENGTH: "Text length should be at least 2 characters",
});

export interface ITodo {
  _id?: number;
  text: string;
  createdTime: string;
  modifiedTime?: string;
  isDone: boolean;
}
