const todos = [];
let instance = null;
// function pattern create deleteSelf instance for every todos
// const createTodos = (todoText) => {
//   const id = Date.now();
//   return {
//     text: todoText,
//     id,
//     deleteSelf() {
//       const index = createTodos.findIndex((item) => {
//         return item.id === id;
//       });
//       todos.splice(index, 1);
//     },
//   };
// };

// es6 class stores deleteSelf prototype which share with every todos
class Todo {
  constructor(todoText) {
    this.id = Date.now();
    this.text = todoText;
  }
  deleteSelf() {
    const index = todos.findIndex((item) => {
      return item.id === this.id;
    });
    todos.splice(index, 1);
  }
}

const TodosStore = {
  getInstance() {
    return instance;
  },
  getTodos() {
    return todos;
  },
  addTodo(todoText) {
    // todos.push(createTodos(todoText));

    todos.push(new Todo(todoText));
  },
};

Object.freeze(TodosStore);
export default TodosStore;
