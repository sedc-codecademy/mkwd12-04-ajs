export class Todo {
  isFinished = false;
  id = "todo-" + String(Math.random()).slice(2);

  constructor(text, priority) {
    this.text = text;
    this.priority = priority;
  }

  finishTodo() {
    this.isFinished = true;
  }

  updateTodo(newText, newPriority) {
    this.text = newText;
    this.priority = newPriority;
  }
}
