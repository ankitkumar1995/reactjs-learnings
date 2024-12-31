import React from "react";
import TodoList from "./TodoList";

const ConstructorPattern = () => {
  return (
    <div>
      <div>
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
};

export default ConstructorPattern;
