// Interval
// setInterval(() => {
// 	console.log('interval');
// }, 1000);

// Timeout
// setTimeout(() => {
// 	console.log('timeout');
// }, 2000);

// Synchronous code execution
// console.log(1);
// console.log(2);
// console.log(3);

// Asynchronous code execution
// console.log(1);
// setTimeout(() => {
// 	console.log(2);
// });
// console.log(3);

// Examples for async code execution

// const first = () => {
// 	setTimeout(() => console.log('First thing'), 1000);
// 	console.log('Random thing');
// };

// const second = () => {
// 	console.log('Second thing');
// };

// first();
// second();
// second();
// first();

// Multiple async code execution

// function firstFunction(callback) {
// 	setTimeout(() => {
// 		console.log('First thing');
// 		callback();
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
