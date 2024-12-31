import React, { useState } from "react";
import TodoList from "./TodoList";
import todosInstance from "./Todos";
const FactoryPattern = () => {
  const [todos, setTodos] = useState(todosInstance.getTodos());
  return (
    <div>
      FactoryPattern
      <div>
        <TodoList store={todosInstance} todos={todos} setTodos={setTodos} />
        <TodoList store={todosInstance} todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default FactoryPattern;
