const todos = [];
let instance = null;

class Todos {
  constructor() {
    if (instance !== null) {
      throw new Error("We have one instance");
    }
    instance = this;
  }
  getInstance() {
    return instance;
  }
  getTodos() {
    return todos;
  }
  addTodo(todoText) {
    todos.push(todoText);
  }
}

// const TodosStore = {
//   getInstance() {
//     return instance;
//   },
//   getTodos() {
//     return todos;
//   },
//   addTodo(todoText) {
//     todos.push(todoText);
//   },
// };

const todosInstance = new Todos();
Object.freeze(todosInstance);
// Object.freeze(TodosStore);
// export default TodosStore;

export default todosInstance;
