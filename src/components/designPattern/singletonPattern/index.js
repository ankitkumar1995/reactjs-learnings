import React, { useState } from "react";
import TodoList from "./TodoList";
import todosInstance from "./Todos";
// const todos = todosInstance;

const SingletonPattern = () => {
  const [todos, setTodos] = useState(todosInstance.getTodos());
  //   const [store, setStore] = useState(todosInstance);
  return (
    <div>
      <TodoList store={todosInstance} todos={todos} setTodos={setTodos} />
      <TodoList store={todosInstance} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default SingletonPattern;
