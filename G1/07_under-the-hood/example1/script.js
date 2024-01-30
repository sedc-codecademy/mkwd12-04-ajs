// Interval
// interval is a function that takes two arguments, a callback function and a number, which represents the time in milliseconds
// it is used to execute a function every X milliseconds
// setInterval(() => {
// 	console.log('interval');
// }, 1000);

// Timeout
// Timeout is a function that takes two arguments, a callback function and a number, which represents the time in milliseconds
// it is used to execute a function after X milliseconds
// setTimeout(() => {
// 	console.log('timeout');
// }, 2000);

// Synchronous code execution
// Synchronous code execution means that the code is executed line by line
// console.log(1);
// console.log(2);
// console.log(3);

// Asynchronous code execution
// Asynchronous code execution means that the code is executed line by line, but the async code is executed after the sync code
// console.log(1);
// setTimeout(() => {
// this code will be executed after 2 seconds, meaning that the code below will be executed first as this is async code
// 	console.log(2);
// });
// console.log(3);

// Examples for async code execution
// const first = () => {
// 	setTimeout(() => console.log('First thing'), 1000); // this is async code
// 	console.log('Random thing'); // this is sync code
// };

// const second = () => {
// 	console.log('Second thing'); // this is sync code
// };

// first();
// second();
// second();
// first();

// Multiple async code execution

// function firstFunction(callback) {
// 	setTimeout(() => {
// 		console.log('First thing');
// 		callback(); // this is the second function, it is executed after the first function
// 	}, 1000);
// }

// function secondFunction() {
// 	console.log('Second thing');
// }

// function firstFunction(callback) {
// 	setTimeout(() => {
// 		console.log('First thing');
// 	}, 1000);
// 	callback();
// }

// function secondFunction() {
// 	console.log('Second thing');
// }

// function firstFunction(callback) {
// 	setTimeout(() => {
// 		console.log('First thing');
// 		callback();
// 	}, 1000);
// }

// function secondFunction() {
// 	setTimeout(() => {
// 		console.log('Second thing');
// 	}, 2000);
// }

// firstFunction(secondFunction);

// Callbacks & Callback Hell

// function fetchSwapi(url, handlePerson, theEndFunc) {
// 	fetch(url)
// 		.then(response => response.json())
// 		.then(body => {
// 			console.log('The response has succeeded');
// 			handlePerson(body, theEndFunc);
// 		});
// }

// function printPerson(person, callbackEnd) {
// 	console.log(person);
// 	callbackEnd();
// }

// function theEnd() {
// 	console.log('Call has finished!');
// }

// fetchSwapi('https://swapi.dev/api/people/1/', printPerson, theEnd);

// Promise
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise is in one of these states:
// 1. Pending
// 2. Fulfilled   |  Rejected
// (succeeded) | (failed / error)

// function first(workTime) {
// 	return new Promise((resolve, reject) => {
// 		if (workTime <= 0) {
// 			reject('Work time is too short. Please try again.');
// 		}
// 		setTimeout(() => {
// 			resolve('Work time is OK.');
// 		}, workTime);
// 	});
// }

// function second() {
// 	console.log('Second thing');
// }

// first(0)
// 	.then(response => console.log(response)) // Fulfilled - Resolve
// 	.catch(error => console.log(error)); // Rejected - Reject

// first(1000)
// 	.then(response => console.log(response)) // Fulfilled - Resolve
// 	.catch(error => console.log(error)); // Rejected - Reject

// second();

// let res = null;

// first(500).then(response => {
// 	res = response;
// 	console.log('2', response);
// });

// second();
// console.log('1', res);

// Greeting Example

// function delayedGreeting(name, delay) {
// 	return new Promise((resolve, reject) => {
// 		if (!name || typeof name !== 'string') {
// 			reject('Invalid name!');
// 		}

// 		setTimeout(() => {
// 			resolve(`Hello ${name}`);
// 		}, delay);
// 	});
// }

// let response = delayedGreeting('John', 2000);

// response
// 	.then(message => console.log(message))
// 	.catch(error => console.error(error));

// delayedGreeting(123, 2000)
// 	.then(message => console.log(message))
// 	.catch(error => console.error(error));

// Posts Example

function getUserData(userId) {
	return new Promise((resolve, reject) => {
		// we simulate a delay of 1 second
		setTimeout(() => {
			// We simulate a database query
			const users = [
				{ id: 1, name: 'John' },
				{ id: 2, name: 'Jack' },
				{ id: 3, name: 'Mike' },
			];
			const user = users.find(u => u.id === userId);

			if (user) {
				// If the user has been found, we resolve the promise with the user
				resolve(user);
			} else {
				// If the user has not been found, we reject the promise with an error message
				reject(`User with ID ${userId} has not been found`);
			}
		}, 1000);
	});
}

function getUserPosts(userId) {
	return new Promise((resolve, reject) => {
		// We simulate a delay of 1 second
		setTimeout(() => {
		// We simulate a database query
			const posts = [
				{ id: 1, userId: 1, content: 'Hello, world!' },
				{ id: 2, userId: 1, content: 'Good morning!' },
				{ id: 3, userId: 2, content: 'Good afternoon!' },
				{ id: 4, userId: 3, content: 'Good evening!' },
				{ id: 5, userId: 4, content: 'Good night!' },
			];

			// We filter the posts by the user ID
			const userPosts = posts.filter(post => post.userId === userId);

			if (userPosts.length) {
				// If the user has posts, we resolve the promise with the posts
				resolve(userPosts);
			} else {
				// If the user has no posts, we reject the promise with an error message
				reject(`User with ${userId} has no posts`);
			}
		}, 1000);
	});
}

// We call the function, which returns a promise, meaning that we can use .then() and .catch() on it, as it's asynchronous
getUserData(1)
	.then(user => {
		// In this block we are sure that the user has been fetched, as the promise has been resolved
		// if the promise was rejected, we would be in the .catch() block
		console.log('This is the user:', user);
		// getUserPosts(user.id).then((posts) => {
		// 	// DO NOT NEST .then() INSIDE ANOTHER .then()!!
		// })
		return getUserPosts(user.id); // We return a promise, so we can chain .then() and .catch() on it
	})
	.then(posts => {
		// In this block we are sure that the posts have been fetched, as the promise has been resolved
		// if the promise was rejected, we would be in the .catch() block
		console.log('Here are the posts:', posts);
	})
	.catch(error => console.error(error)) // We catch the error from any of the promises above
	.finally(() => console.log('THE END')); // We execute this block no matter if the promises above are resolved or rejected

// This is not correct as it will not wait for the first promise to finish and will execute the second one
// meaning that the user will be undefined possibly and still the posts will be fetched for the undefined user
// getUserData(10)
// 	.then(user => console.log(user))
// 	.catch(error => console.error(error));
// getUserPosts(10);

// The function above would look like this if it was synchronous
// function getUserData(userId) {
// 	const users = [
// 		{ id: 1, name: 'John' },
// 		{ id: 2, name: 'Jack' },
// 		{ id: 3, name: 'Mike' },
// 	];
// 	const user = users.find(u => u.id === userId);

// 	if (user) {
// 		return user;
// 	} else {
// 		return `User with ID ${userId} has not been found`;
// 	}
// }

// const user1 = getUserData(1);
// console.log(user1);

// const user10 = getUserData(10);
// console.error(user10);
