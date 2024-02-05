// In JS everything is an object
// Window is the largest object

// console.log(typeof document);
// console.log(typeof window);
// console.log(document, window.document);
// // window.document.getElementById()
// console.log(typeof console, console);
// console.log(typeof console.log);
// console.log(window.console.log);

// console.log(typeof []);
// console.log(typeof [].push);

// alert('Hi there');
// window.alert('Zdravo pak');

// var something = 'something'; // declaring the variable like this will set it as property to the window object
// let something = 'something'; // use let instead
// const something = 'something'; // or use const instead

// console.log(something);
// console.log(window.something); // has value only when variable is var
// window.somethingElse = 'something else';

// === This ===
// console.log(this);

// function Dog(name, color, age, favoriteFood) {
// 	this.name = name;
// 	this.color = color;
// 	this.age = age;
// 	this.hasOwner = false;
// 	this.favoriteFood = favoriteFood;
// 	this.bark = function () {
// 		console.log('global this', globalThis);
// 		console.log('this', this);
// 		console.log(`${this.name} started barking. AV AV AV!!!`);
// 	};
// }

// let dzeki = new Dog('Dzeki', 'brown', 2, ['meat']);
// let blacky = new Dog('Blacky', 'black', 3, ['vegetables']);

// dzeki.bark();
// blacky.bark();

// === Destructuring Objects ===
// console.log(dzeki);
// console.log(blacky);

// const info = `${dzeki.name}'s is ${
// 	dzeki.age
// } years old and his favorite food is ${dzeki.favoriteFood.join(', ')}`;

// const dzekiName = dzeki.name
// const { name: dogName, age = 1, favoriteFood = [] } = dzeki;
// const {
// 	name: blackyDogName,
// 	age: blackyAge,
// 	favoriteFood: blackyFavFood,
// } = blacky;

// const infoDzeki = `${dogName}'s is ${age} years old and his favorite food is ${favoriteFood.join(
// 	', '
// )}`;

// const infoBlacky = `${blackyDogName}'s is ${blackyAge} years old and his favorite food is ${blackyFavFood.join(
// 	', '
// )}`;

// function logName({ firstName, lastName }) {
// 	console.log(`${firstName} ${lastName}`);
// }

// logName({
// 	firstName: 'Ivo',
// 	lastName: 'Kostovski',
// });

// === Destructuring Arrays ===
