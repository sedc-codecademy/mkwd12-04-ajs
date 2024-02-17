// Module imports, the file paths must always end with .js
import { Todo } from "./src/todo.model.js";

const app = () => {
  //Data variables
  let todos = [
    new Todo("Edit Me", "high"),
    new Todo("Do Dishes", "low"),
    new Todo("Edit me as well", "high"),
  ];
  let editTodoId = "";

  //Selectors
  const todoListEl = document.querySelector(".todo-list");
  const todoTextInputEl = document.querySelector("#todoText");
  const todoPriorityInputEl = document.querySelector("#todoPriority");
  const todoFormEl = document.querySelector(".todo-form");
  const submitBtnEl = document.querySelector("#submitBtn");

  //Functions
  const renderTodos = (todos, element) => {
    element.innerHTML = "";

    todos.forEach(todo => {
      //1. Create an html element
      const todoEl = document.createElement("LI");
      todoEl.classList.add("todo", todo.priority);
      if (todo.isFinished) todoEl.classList.add("finished");
      //2. Update the innerHTML of that element
      todoEl.innerHTML = `
        <span class="todo-priority">
            <strong>${todo.priority[0].toUpperCase()}</strong> ${todo.text}
        </span>
        <span>
            <button id="edit-${todo.id}">Edit</button>
            <button id="${todo.isFinished ? "delete" : "finish"}-${todo.id}">
            ${todo.isFinished ? "Delete" : "Finish"}</button>
        </span>
      `;

      addTodoEventListener(todo, todoEl);

      //3. Append that element to the parent element
      element.appendChild(todoEl);
    });
  };

  const onEditTodo = todo => {
    todoTextInputEl.value = todo.text;
    todoPriorityInputEl.value = todo.priority;
    submitBtnEl.innerText = "Update";
    editTodoId = todo.id;
  };

  const addTodoEventListener = (todo, todoEl) => {
    todoEl.addEventListener("click", event => {
      if (event.target.id.includes("edit")) {
        console.log("edit btn clicked");
        //Set the value of the inputs to the clicked todo
        onEditTodo(todo);
      }

      if (event.target.id.includes("delete")) {
        console.log("delete btn clicked");
        todos = todos.filter(existingTodo => existingTodo.id !== todo.id);
      }

      if (event.target.id.includes("finish")) {
        console.log("finish btn clicked");
        todo.finishTodo();
      }

      renderTodos(todos, todoListEl);
    });
  };

  //Listeners
  todoFormEl.addEventListener("submit", event => {
    // Prevents default behavior of a specific event
    // Here on submit it prevents a refresh when the event fire
    event.preventDefault();

    //Get values from inputs
    const todoTextInputValue = todoTextInputEl.value;
    const todoPriorityInputValue = todoPriorityInputEl.value;

    if (!editTodoId) {
      //Create new todo object
      const newTodo = new Todo(todoTextInputValue, todoPriorityInputValue);
      //Add todo to todos array
      todos.push(newTodo);
    }

    if (editTodoId) {
      todos.forEach(todo => {
        if (todo.id === editTodoId) {
          todo.updateTodo(todoTextInputValue, todoPriorityInputValue);
        }
      });
      editTodoId = "";
      submitBtnEl.innerText = "Add";
    }

    //Call renderTodos()
    todoFormEl.reset();
    renderTodos(todos, todoListEl);
  });

  //   We called this first to render out the mock data that was in todos
  renderTodos(todos, todoListEl);
};

app();
