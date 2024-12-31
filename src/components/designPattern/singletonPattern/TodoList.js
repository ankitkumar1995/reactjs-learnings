import React, { useState } from "react";
import Todos from "./Todos";

const TodoList = ({ store, todos, setTodos }) => {
  //   const [todos, setTodos] = useState(store.getTodos());
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
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
