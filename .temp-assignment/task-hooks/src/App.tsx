import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { useToDo } from "./hooks";
import { ITodo } from "./types";

function App() {
  const {
    todos,
    completedTodos,
    uncompletedTodos,
    numberOfPendingChanges,
    toManyUncompletedTodos,
    addTodo,
    completeTodo,
    syncChanges,
  } = useToDo();
  const [label, setLabel] = useState("");

  const handleAddTodo = () => {
    addTodo({ label: label, id: uuidv4(), completed: false } as ITodo);
    setLabel("");
  };

  const handleComplete = (todo: ITodo) => {
    completeTodo(todo.id);
  };

  return (
    <div className="app">
      <div>
        <input
          type="text-area"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <button onClick={() => handleAddTodo()} disabled={label.length < 1}>
          Add todo
        </button>
      </div>
      <div>
        <p>
          Number of pending changes: {numberOfPendingChanges}
          <button
            onClick={() => syncChanges()}
            disabled={numberOfPendingChanges < 1}
          >
            Sync all changes AAA
          </button>
        </p>
        <p>{toManyUncompletedTodos && "To many uncompleted Todos!!!"}</p>
      </div>
      <div className="container">
        <div className="list">
          <h2>List of all todos</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.label}</li>
            ))}
          </ul>
        </div>

        <div className="list">
          <h2>List of all completed todos</h2>
          <ul>
            {completedTodos.map((todo) => (
              <li key={todo.id}>{todo.label}</li>
            ))}
          </ul>
        </div>

        <div className="list">
          <h2>List of all uncompleted todos</h2>
          <ul>
            {uncompletedTodos.map((todo) => (
              <li key={todo.id}>
                {todo.label}{" "}
                <button onClick={() => handleComplete(todo)}>
                  complete todo
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
