const fs = require('fs');

// fs.readFile('input.txt', 'utf8', (error, data) => {
// 	if (error) {
// 		console.error(error);
// 		return;
// 	}

// 	console.log('File read successfully', data);
// });

// fs.writeFile('input.txt', 'Hello from the JS side', 'utf8', err => {
// 	if (err) {
// 		console.error('There was an error', err);
// 		return;
// 	}

// 	console.log('File written successfully!');
// });

class Todo {
	constructor() {
		this.todos = [];
	}

	addTodo(todo) {
		this.todos.push(todo);
		this.#writeTodosToFile();
	}

	deleteTodo(todo) {
		const index = this.todos.findIndex(t => t === todo);
		const deleted = this.todos.splice(index - 1, 1);
		console.log('TODOS:', this.todos);
		console.log('Todo was been deleted:', deleted);
		this.#writeTodosToFile();
	}

	// This is how we define a private method in JS
	#writeTodosToFile() {
		fs.writeFileSync('todos.txt', this.todos.join('\n'), 'utf8', err => {
			if (err) {
				console.error(err);
				return;
			}

			console.log('Todos written successfully!');
		});
	}
}

const todoApp = new Todo();
todoApp.addTodo('Learn Node JS!');
todoApp.addTodo('Write Node JS Homework!');
todoApp.deleteTodo('Write Node JS Homework!');
