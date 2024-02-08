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