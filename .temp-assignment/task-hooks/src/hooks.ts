import { initialState, reducer } from "./reducer";
import { ITodo, IChange } from "./types";

export function useToDo() {
  // Your code goes here... 
  return {
    todos,
    completedTodos,
    uncompletedTodos,
    numberOfPendingChanges,
    toManyUncompletedTodos,
    addTodo,
    completeTodo,
    syncChanges,
  };
}
