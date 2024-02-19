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

// === This is function VS arrow function
// const dog1 = {
// 	name: 'Sharko',
// 	age: 2,
// 	bark: function () {
// 		console.log(this);
// 		console.log(`${this.name} started barking`);
// 	},
// 	aggressiveBark: () => {
// 		console.log(this);
// 		console.log(`${this.name} started barking aggressively!`);
// 	},
// };

// dog1.bark();
// dog1.aggressiveBark();

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

// const rgb = [12, 200, 60];
// const red = rgb[0]
// const green = rgb[1]
// const blue = rgb[2]

// const [red, green, blue] = rgb;
// const [, , blue] = rgb;

// === Spread Operator ===

// const dogNames = ['Sharko', 'Barkly', 'Murdzo'];
// const moreDogNames = [...dogNames]

// const person1 = {
// 	name: 'Marko',
// 	age: 20,
// };

// const person2 = person1; // DO NOT REASSIGN OBJECT AND ARRAYS
// const person2 = { ...person1 }; // USE SPREAD OPERATOR
// person2.name = 'Sharko';

// const person3 = { name: 'Darko', ...person1, isMarried: false }; // Wrong
// const person3 = { ...person1, name: 'Darko', isMarried: false }; // Wright

// console.log('p1', person1);
// console.log('p2', person2);
// console.log('p3', person3);

// === Object Create ===
// let car1 = {
// 	model: 'Tesla',
// 	gas: 'Electric',
// 	noOfBatteries: 4,
// };
// let car = Object.create(null);
// let car2 = Object.create(car1);

// car2.model = 'Golf';
// car2.gas = 'Diesel';
// car2.noOfSeats = 5;

// console.log('car1', car1);
// console.log('car2', car2);

// === Object Assign ===
// let car3 = Object.assign(car1, car2);

// car3.noOfBatteries = 0;

// let car3 = { ...car1, ...car2 };

// console.log('car3', car3);

// === Object Values ===

// const values = Object.values(car3);
// console.log(values);

// === Object Keys ===

// let students = {
// 	abcd123: { name: 'Ivo' },
// 	abcd123: { name: 'Ivo' },
// };

// const keys = Object.keys(car3);
// console.log(keys);

// === Object Entries ===
// const entries = Object.entries(car3);
// console.log(entries);

// === Object fromEntries ===
// const fromEntries = Object.fromEntries(entries);
// console.log(fromEntries);

// === Object Seal ===
// let cat = {
// 	name: 'Garfield',
// 	age: 3,
// };

// console.log(cat);
// Object.seal(cat);
// cat.age = 4;
// cat.hasOwner = true;
// delete cat.age;
// console.log(cat);

// === Object Freeze ===
// let cat2 = {
// 	name: 'Thomas',
// 	age: 2,
// };

// console.log(cat2);
// Object.freeze(cat2);
// cat2.age = 3;
// cat2.hasOwner = false;
// delete cat2.age;
// console.log(cat2);

// Exercise
// Create an object named user with properties username,
// email, password, and profile(which should be another
// object with properties firstName, lastName, age, and
// hobbies(an array)).

let mark = {
	username: 'mark_123',
	email: 'mark@gmail.com',
	password: 'Lozinka1',
	profile: {
		firstName: 'Mark',
		lastName: 'Johnson',
		age: 30,
		hobbies: ['coding', 'reading', 'hiking'],
	},
};

// Add methods to the user object:
// - getFullName: This should return the user's full name.

const getFullName = function () {
	return `${this.profile.firstName} ${this.profile.lastName}`;
};
mark.getFullName = getFullName;
// console.log(mark.getFullName());

// - getHobbies: This should return a string of the user's
// hobbies separated by commas.

const getHobbies = function () {
	return `This user has the following hobbies: ${this.profile.hobbies.join(
		', '
	)}.`;
};
mark.getHobbies = getHobbies;
// console.log(mark.getHobbies());

// - login: this should accept username and password and
// return boolean value if logged in successfully

mark.login = function (username, password) {
	if (this.username === username && this.password === password) {
		console.log(`Welcome ${this.username}`);
		return true;
	} else {
		console.log('Invalid username or password');
		return false;
	}
};

// mark.login('ivo', '123');
// mark.login('mark_123', 'Lozinka1');

// - changePassword: This should accept a new password as a
// parameter and change the user's password to the new one.

mark.changePassword = function (newPassword) {
	this.password = newPassword;
};
mark.changePassword('123456');
// console.log(mark);

// Create a new user named user2 and copy all properties
// from user. Change the username, email, and password
// properties of user2, and user2 with have an empty profile.

let mike = {
	...mark,
	username: 'mike123',
	password: 'Lozinka2',
	email: 'mike@yahoo.com',
	profile: {
		...mark.profile,
		firstName: 'Mike',
		hobbies: [...mark.profile.hobbies],
	},
};

// console.log(mike);
// Add a new hobby to mike hobbies array.

// mike.profile.hobbies.push('dancing');
// mark.profile.hobbies.push('snorkeling');

// console.log(mark);
// console.log(mike);

// Create a function displayUser that accepts a user object
// and displays the user's full name, email, and hobbies.

// function displayUserInfo({ email, profile: { firstName, lastName, hobbies } }) {
// 	console.log('Full Name', firstName, lastName);
// 	console.log('Email', email);
// 	console.log('Hobbies', hobbies.join(', '));
// }

// displayUserInfo(mark);
// displayUserInfo(mike);
