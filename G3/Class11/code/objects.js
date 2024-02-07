console.log("=================== OBJECTS PART 1 ===================");
// => representation of entities that exist in the real world
// => consists of PROPERTIES and METHODS


// Anonymous object, created using object-literals (curly brackets {})
const dog = {
    name: "Sharko",
    color: "sharen",
    age: 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    bark: function () {
        console.log("BARK BARK BARK !!!");
    },
    // 'this' examples
    getThis: this,
    printThisAnonymous: () => {
        console.log(this);
    },
    printThis: function () {
        console.log(this);
    }
}
console.log(dog.name);
console.log(dog["name"]);
dog.bark();

// this examples
console.log(dog.getThis); // window
dog.printThisAnonymous(); // window
dog.printThis(); // the dog object
// TIP: when using anonymous objects use 'function' for creating methods

// ? : ===> ternary operator
// firstName === undefined ? "unnamed" : firstName

// breakdown:
// if (firstName === undefined) {
//     return "unnamed"
// }
// else {
//     return firstName
// }

// Created using Constructor Notation Template (Constructor Function)
function Person(firstName, lastName) {
    // this.firstName = firstName === undefined ? "unnamed" : firstName;
    this.firstName = !firstName ? "unnamed" : firstName;
    // ternary operator => if 'firstName' (parameter) is falsy than assign "unnamed" to the property, else assign the firstName (parameter) value to the this.firstName property
    this.lastName = lastName;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
    // 'this' examples
    this.getThis = this;
    this.printThisAnonymous = () => {
        console.log(this);
    };
    this.printThis = function () {
        console.log(this);
    };
}

let john = new Person("John", "Doe")
console.log(john);
console.log(john.getFullName());

// this example
console.log(john.getThis); // john object
john.printThisAnonymous(); // john object
john.printThis(); // john object


console.log(this);
function globalObjectFunction() {
    console.log(this);
}
// window.globalObjectFunction();
globalObjectFunction(); // window

var testVariable = "Global object ?"; // NIKAKO !
console.log(window.testVariable);

// console.log(window.document)
console.log(document)



console.clear();
console.log("");
console.log("=================== OBJECT METHODS ===================");

// *** create *** 
// => method that accepts an object as a parameter and will return a new object with the inherited entities from the object passed as the argument

let person = {
    firstName: "Bob",
    "lastName": "Bobsky",
    greet: function () {
        console.log("Hello !");
    }
}

let newPerson = Object.create(person);
console.log(person);
console.log(newPerson);

let emtpyObject = Object.create(null);
console.log(emtpyObject);


// *** assign ***
// => method that can merge two objects into one. It accepts two objects and tries to merge the second object into the first one

let bobAddress = {
    street: "Bobsky St.",
    city: "Skopje"
}

let bobsInfo = Object.assign(person, bobAddress);
console.log(bobsInfo);
// NOTE : person object is also changed



console.log("");
console.log("============== Exploring the object ==============")

let barnie = {
    name: "Barnie",
    age: 1,
    bark: function () {
        console.log("Aw aw aw !");
    }
}

// *** keys ***
// => returns all the property and method names of our object in an array
let barniesKeys = Object.keys(barnie);
console.log(barniesKeys);

// *** values ***
// => returns all values from our properties and methods ( the whole functions ) in an array
let barniesValues = Object.values(barnie);
console.log(barniesValues);

// *** entries ***
// => returns an array of arrays that have a key and value pair
let barniesEntries = Object.entries(barnie)
console.log(barniesEntries);



console.log("");
console.log("============== Changing the object accessibility ==============")

// *** freeze ***
// => completely lock our object for any modifications
// => adding new properties/methods is not allowed
// => changing the values of existing is also not allowed

console.log(barnie);
Object.freeze(barnie);
barnie.name = "Chapo";
console.log(barnie.name);
barnie.isHappy = true;
console.log(barnie);

// *** seal ***
// => can't add new properties or methods
// => can change the existing ones

let marley = {
    name: "Marley",
    color: "brown"
}
Object.seal(marley)
marley.name = "Bob Marley";
marley.isHappy = true;
console.log(marley);
