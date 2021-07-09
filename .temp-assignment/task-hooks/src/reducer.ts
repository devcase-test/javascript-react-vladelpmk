import { IChange, ITodo } from "./types";

export function reducer(state: ITodo[], change: IChange) {
  switch (change.action) {
    case "ADD":
      return [...state, change.todo];
    case "COMPLETE":
      return [
        ...state.filter((todo) => todo.id !== change.todo.id),
        change.todo,
      ];
    default:
      throw new Error("Not valid reducer");
  }
}

export const initialState = [] as ITodo[];
