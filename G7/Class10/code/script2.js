// -------- Destructuring ---------------
// Destructuring simply implies breaking down a complex structure into simpler part
// In JS, those complex structeres are usualy objects and arrays.


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20
}


const person2 = {
    firstName: 'Bob',
    lastName: 'Bobski',
    age: 21
}

const namePerson = person.firstName;
const lastNamePerson = person.lastName;
console.log(namePerson, lastNamePerson);


// ------------- Object destructuring --------------

const { firstName, lastName } = person;
console.log(firstName, lastName);

const { firstName: myName, lastName: myLastName } = person2;

// without object destructuring
// const myName = person2.firstName;
// const myLastName = person2.lastName;

console.log(myName)
console.log(myLastName);


// ---------- Array destructuring --------------

const hobbies = ["reading", "hiking", "biking"];

const hobby1 = hobbies[0];
const hobby2 = hobbies[1];

console.log(hobby1);
console.log(hobby2);


// with destructuring

const [hobby01, , hobby02] = hobbies;
console.log(hobby01);
console.log(hobby02);


// -------- Object methods --------

const dog = {
    isHappy: true,
    bark: function () {
        console.log("WOOF WOOF!");
    }
}

// Object.create()

// Object create is a method that accepts an object as a paratameter and will return a new object with all the inherited entitites (properties and methods) from the object that was passed as a parameter

const barnie = Object.create(dog); // barnie will have everything that dog has
barnie.name = "Barnie";
barnie.breed = "Dzukela";

console.log("---- barnie with create---", barnie);

barnie.bark();


// ----- Object assign -------------

// Assign is a method that can merge two objects into one. It will accepts two objects as paratameters an it will try to merge the second object to the first one


const addressInfo = {
    street: "Dog street",
    streetNumber: 22,
    phoneNumber: "077 223 305"
}


const barnieChip = Object.assign(barnie, addressInfo);
console.log("barnie chip: ", barnieChip);


const anotherAddress = {
    street: "New street",
    streetNumber: 55,
    phoneNumber: "077 223 305",
    dogYears: 5
}

const barnieChipUpdate = Object.assign(barnieChip, anotherAddress);
console.log("Barnie chip update", barnieChipUpdate);


// -------- Object keys --------
// all property names (keys) from the object returned in a array

const barnieKeys = Object.keys(barnie);
console.log("Barnie keys", barnieKeys);


// -------- Object values -----------
// all values from the object returned in a array

const barnieValues = Object.values(barnie);
console.log("barnie values: ", barnieValues);

// console.log(barnie);

// ---- Object entries -----
// array of smaller arrays with two elements, the key and value

const barnieEntries = Object.entries(barnie);
console.log("barnie entries: ", barnieEntries);


// ----- Object Freeze ---------
// Object.freeze will complitly lock the object.
// We cannot add new properties or change existing ones

Object.freeze(barnie);
barnie.name = "Reks";
barnie.friend = "Sharko";
console.log("barnie freeze:", barnie);


// ----- Object Seal ---------
// Object seal only allows us to modify existing properties, but we cannot add new ones


const myPuppy = {};
myPuppy.name = "Joni";

console.log(myPuppy);
Object.seal(myPuppy);
myPuppy.name = "Reks";
myPuppy.friend = "Sharko";

console.log("myPuppy seal:", myPuppy);


// --------- Dynamicly adding properties ---------

const newDog = {}
const nameProperty = "dogName";

newDog[nameProperty] = "Random Dog Name";

console.log(newDog);


// ---------- spread operator ----------

const numbers = [1, 2, 3]

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers));










