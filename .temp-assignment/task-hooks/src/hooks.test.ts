import { renderHook, act } from "@testing-library/react-hooks";
import { useToDo } from "./hooks";
import { v4 as uuidv4 } from "uuid";

const TODO = { label: "test2", id: uuidv4(), completed: false };

test("allows you to undo and redo", () => {
  const { result } = renderHook(() => useToDo());

  expect(result.current.todos.length).toStrictEqual(0);
  expect(result.current.completedTodos.length).toStrictEqual(0);
  expect(result.current.uncompletedTodos.length).toStrictEqual(0);
  expect(result.current.numberOfPendingChanges).toStrictEqual(0);
  expect(result.current.toManyUncompletedTodos).toStrictEqual(false);

  act(() => {
    result.current.addTodo({ label: "test1", id: uuidv4(), completed: false });
  });
  expect(result.current.todos.length).toStrictEqual(1);
  expect(result.current.completedTodos.length).toStrictEqual(0);
  expect(result.current.uncompletedTodos.length).toStrictEqual(1);
  expect(result.current.numberOfPendingChanges).toStrictEqual(1);
  expect(result.current.toManyUncompletedTodos).toStrictEqual(false);

  act(() => {
    result.current.addTodo(TODO);
  });
  act(() => {
    result.current.addTodo({ label: "test3", id: uuidv4(), completed: false });
  });
  act(() => {
    result.current.addTodo({ label: "test4", id: uuidv4(), completed: false });
  });
  act(() => {
    result.current.addTodo({ label: "test5", id: uuidv4(), completed: false });
  });
  act(() => {
    result.current.addTodo({
      label: "test6",
      id: uuidv4(),
      completed: false,
    });
  });

  expect(result.current.todos.length).toStrictEqual(6);
  expect(result.current.completedTodos.length).toStrictEqual(0);
  expect(result.current.uncompletedTodos.length).toStrictEqual(6);
  expect(result.current.numberOfPendingChanges).toStrictEqual(6);
  expect(result.current.toManyUncompletedTodos).toStrictEqual(true);

  act(() => {
    result.current.completeTodo(TODO.id);
  });

  expect(result.current.todos.length).toStrictEqual(6);
  expect(result.current.completedTodos.length).toStrictEqual(1);
  expect(result.current.uncompletedTodos.length).toStrictEqual(5);
  expect(result.current.numberOfPendingChanges).toStrictEqual(7);
  expect(result.current.toManyUncompletedTodos).toStrictEqual(false);

  act(() => {
    result.current.syncChanges();
  });

  expect(result.current.todos.length).toStrictEqual(6);
  expect(result.current.completedTodos.length).toStrictEqual(1);
  expect(result.current.uncompletedTodos.length).toStrictEqual(5);
  expect(result.current.numberOfPendingChanges).toStrictEqual(0);
  expect(result.current.toManyUncompletedTodos).toStrictEqual(false);
});
