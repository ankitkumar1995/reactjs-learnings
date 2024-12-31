import React, { useState } from "react";
import Todos from "./Todo";

const TodoList = () => {
  const [store] = useState(new Todos());
  const [todos, setTodos] = useState(store.getTodos());
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li>{todo}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => {
            store.addTodo("Test todo" + (Math.random() * 300).toFixed());
            setTodos([...store.getTodos()]);
            console.log(store.getTodos());
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
