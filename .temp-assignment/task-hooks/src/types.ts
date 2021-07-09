export interface ITodo {
  id: string;
  label: string;
  completed: boolean;
}

export interface IChange {
  todo: ITodo;
  action: "ADD" | "COMPLETE";
}
