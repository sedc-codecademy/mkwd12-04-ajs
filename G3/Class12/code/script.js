// const me = {name: 'Bob'};

let nums = [1, 2, 3];

let greeting = 'Hello world!';
let myNum = 10;
console.log(Object.getPrototypeOf(greeting));
console.log(Object.getPrototypeOf(myNum));

// let bob = {
//     name: 'Bob',
//     sayHello: function() {
//         console.log(`${this.name} says hello!`)
//     }
// }

function Person(name) {
    this.name = name;
}

Person.lastName = 'Stankovska';
const me = new Person('Aneta');
me.age = 32;
const you = new Person('Ile');

// console.log(Person);
// console.log(Person.prototype);
// console.log(you.__proto__);
// console.log(me.__proto__);
// console.log(Person.prototype === Person.__proto__) // false
// console.log(Person.prototype === me.__proto__) // true

// Person.lastName = 'Stankovska';

function User(name, email) {
    this.name = name,
    this.email = email
    this.isOnline = false;
    this.login = function() {
        console.log(`${this.name} has logged in`);
    }
}

let bob = new User('Bob', 'bob@mail.com');
let jill = Object.create(User.prototype);
jill.name = 'Jill';
jill.email = 'jill@mail.com';

// let jill = new User('Jill', 'jill@mail.com');
jill.isPremium = true;
bob.isAdmin = true;

const vehicle = {
    type: 'Generic Vehicle',
    start: function() {
        console.log(`${this.type} is starting`);
    }
}

// Create a car object
const car = {
    type: 'Toyota',
    model: 'Camry'
}

// Assing vehicle as a prototype of car
// Bad way - do not use it
// car.__proto__ = vehicle;
// car.start();

// Better way
Object.setPrototypeOf(car, vehicle);
car.start();


vehicle.stop = function () {
    console.log(`${this.type} is stopping`);
}

// Better way
Object.getPrototypeOf(vehicle).stop = function () {
    console.log(`${this.type} is stopping`);
}

car.stop();

Object.defineProperty(car, 'color', {
    value: 'red'
});


function Pet(name, sound) {
    this.name = name,
    this.sound = sound
}

// Pet.speak = function() {
//     console.log(`The pet says ${this.sound}`);
// }

Pet.prototype.speak = function() {
    console.log(`The pet says ${this.sound}`);
}


let cat = new Pet('Bella', 'meow');
// cat.speak();









