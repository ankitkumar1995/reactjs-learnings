class Todos {
  todos = [];
  constructor() {}
  getTodos() {
    return this.todos;
  }
  addTodo(todoText) {
    this.todos.push(todoText);
  }
}
export default Todos;
