import React from "react";

const TodoList = ({ store, todos, setTodos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            onClick={() => {
              todo.deleteSelf();
              setTodos([...store.getTodos()]);
            }}
          >
            {todo.text}
          </li>
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
