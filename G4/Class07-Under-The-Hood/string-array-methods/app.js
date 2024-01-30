console.log("working");

// STRINGS

// Accessing characters using indexes

const names = ["Filip", "Marko", "Bojan"];

const firstName = "Borche";

console.log(firstName[0]);
console.log(firstName[1]);
console.log(names[0][0]);

const fullName = "Hristina Bozhinova";

const firstNameSlice = fullName.slice(0, 8);
const lastNameSlice = fullName.slice(9);

console.log(firstNameSlice);
console.log(lastNameSlice);
console.log(fullName);

console.log(fullName.startsWith("Hris"));
console.log(fullName.endsWith("ova"));
console.log(fullName.toLowerCase().includes("b"));

// Arrays

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const leftSide = numbers.slice(0, 5);
const rightSide = numbers.slice(5);

console.log(leftSide, rightSide);
console.log(numbers.join("-"));

//! Splice ( be careful ) THIS MUTATES ARRAYS AND STRINGS , USE WITH CAUTION ⚠️⚠️⚠️

const test = numbers.splice(2, 4);

console.log(test);
console.log(numbers);

const nameOriginal = "Filip";

const nameCopy = nameOriginal;

// Simplest way to copy an array

const numbersCopy = numbers.map(el => el);

const numbersCopyTwo = [...numbers];
