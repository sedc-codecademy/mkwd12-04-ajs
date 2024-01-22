
// Dataset for the examples
// const students = [
//   { name: "Nenad", age: 20, grade: 5 },
//   { name: "Zoran", age: 17, grade: 4 },
//   { name: "Dimitar", age: 21, grade: 2 },
//   { name: "Kole", age: 31, grade: 1 },
//   { name: "Ljupco", age: 41, grade: 4 },
// ];

// === find === - used to find a single element in an array
// find returns the first element that matches the condition

// const nenad = students.find((student) => student.name === "Nenad");
// const iva = students.find((student) => student.name === "Iva");

// longest version
// if (student.name === "Nenad") {
//   return true; // return the element
// } else {
//   return false; // continue searching
// }

// medium version
// return student.name === "Nenad"

// console.log(nenad);
// console.log(iva);

// === findIndex === - used to find the index of a single element in an array
// findIndex returns the index of the first element that matches the condition
// const ljupcoIndex = students.findIndex((student) => student.name === "Ljupco");
// const ivaIndex = students.findIndex((student) => student.name === "Iva");

// longest version
// if (student.name === "Ljupco") {
//   return true; // return the index
// } else {
//   return false; // continue searching
// }

// medium version
// return student.name === "Ljupco";

// console.log(ljupcoIndex);
// console.log(ivaIndex);

// Find and findIndex ALWAYS return a SINGLE element
// const theStudentWithGradeFour = students.find((student) => student.grade === 4);
// console.log(theStudentWithGradeFour);

// RECURSION
// recursion is a function that calls itself with a different input within the function
// function sumTo(num) {
// make sure that the function will stop at some point
//   if (num === 0) {
//     return 0;
//   }
//   return num + sumTo(num - 1);
// }

// const sumResult = sumTo(5);
// console.log(sumResult);
// 5 + 4 + 3 + 2 + 1 = 15

// this array is nested, it has arrays inside of it
const numbers = [1, 2, [3, 4, [5, 6, [7, [8], 9], 10, 11, [12, 13]]]];
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// flattenArray is a function that will flatten an array meaning that it will remove all the nested arrays and return all items in a single array
function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      // concat will merge two arrays
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
// console.log(flattenArray(numbers));

// flat
const flattenArr = numbers.flat(5); // 5 is the depth (how many levels of nested arrays to flatten)
const flattenArr1 = numbers.flat(1); // 1 is the depth (how many levels of nested arrays to flatten)
const flattenArr2 = numbers.flat(Infinity); // Infinity is the depth (how many levels of nested arrays to flatten) - used when we don't know how many levels of nested arrays we have

// console.log(flattenArr);
// console.log(flattenArr1);
// console.log(flattenArr2);

// === flatMap === - used to flatten an array and map it at the same time
const words = ["banana", "lemon", "kiwi"];

//
const characters = words.flatMap((word) => word.split(""));
// same as using map + flat
const characters2 = words.map((word) => word.split("")).flat(Infinity);
// words[0].split("") + words[1].split("") + words[2].split("");
// console.log(characters);
// console.log(characters2);

// === reduce === - used to reduce an array to a single value
const numbers2 = [1, 2, 3, 4, 5]; // 15

// reduce has two parameters: 1. callback function, 2. initial value
// the callback function has two parameters: 1. accumulator, 2. current value
// const sum = numbers2.reduce((sum, number) => {
//   sum = sum + number; // you need to return the sum so that it can be used in the next iteration with the current value
//   return sum;
// }, 0);

// const sum = numbers2.reduce((sum, number) => (sum += number), 0);
const sum = numbers2.reduce((sum, number) => sum + number, 0);
// console.log(sum);

// === sort === - used to sort an array
const students = [
  { name: "Nenad", age: 20, grade: 5 },
  { name: "Zoran", age: 17, grade: 4 },
  { name: "Dimitar", age: 21, grade: 2 },
  { name: "Kole", age: 31, grade: 1 },
  { name: "Ljupco", age: 41, grade: 4 },
];

// sorting without HOF
// we need to compare each element with each other, so we need two loops
// for (let i = 0; i < students.length; i++) {
//   for (let j = i + 1; j < students.length; j++) {
//    // compare the ages of the students and swap them if needed
//     if (students[i].age > students[j].age) {
//       const temp = students[i]; // save the first student in a temp variable so that we don't lose it
//       students[i] = students[j]; // swap the first student with the second student
//       students[j] = temp; // swap the second student with the first student
//     }
//   }
// }

// console.log(students);

// sorting with HOF
// sort will sort the array in place, meaning that it will change the original array
// sort has one parameter: a callback function
// the callback function has two parameters: 1. first element, 2. second element
// the callback function should return a number
// if the number is positive, the first element will be placed after the second element
// if the number is negative, the first element will be placed before the second element
// if the number is zero, the order of the elements will not change
// const sortedStudents = students.sort((a, b) => a.age - b.age);

// Ascending
// a.age - b.age

// Descending
// b.age - a.age

// 20 - 18 = 2 - positive number
// 20 - 40 = -20  - negative number
// 20 - 20 = 0 - just a zero

// Detailed sorting
// if (a.age > b.age) {
//   return -1;
// } else if (a.age < b.age) {
//   return 1;
// } else {
//   return 0;
// }

// console.log(sortedStudents);
// console.log(students);

// Pass by value VS Pass by reference

// Pass by value - all simple value types
// pass by value means that the value of the variable is copied to another variable
// let name = "Ivo";
// let otherName = name;
// otherName = "Iva";

// Pass by reference - Arrays and Objects
// pass by reference means that the reference of the variable is copied to another variable
// (the reference is the address in memory where the value is stored) - both variables point to the same value in memory
// (the same address) - if you change the value of one variable, the value of the other variable will also change because
// they point to the same value in memory.
// let dogs = ['murdzo', 'sharko'];
// let otherDogs = dogs;
// otherDogs.sort()

// How to copy an array
// case 1: Use slice
// let copyOfStudents1 = students.slice();

// case 2: use for loop
// let copyOfStudents2 = [];
// for (const student of students) {
//   copyOfStudents2.push(student);
// }

// case 3: Spreading
// Spread operator - used to spread the elements of an array into another array (copy the elements)
// let copyOfStudents3 = [...students];

// const sortedStudents = copyOfStudents3.sort((a, b) => a.age - b.age);

// const sortedStudents = [...students].sort((a, b) => a.age - b.age);

// console.log(students);
// console.log(sortedStudents);

// === includes ===
// includes is used to check if an array includes a certain element
// it returns true or false
// const numbers3 = [1, 2, 3];

// const hasNumberTwo = numbers3.includes(2);
// const hasNumberFour = numbers3.includes(4);

// console.log(hasNumberTwo);
// console.log(hasNumberFour);

// === indexOf ===
// indexOf is used to check if an array includes a certain element
// it returns the index of the element if it exists, otherwise it returns -1 (not found)
// const numbers3 = [1, 2, 3];

// const hasNumberTwo = numbers3.indexOf(2);
// const hasNumberFour = numbers3.indexOf(4);

// console.log(hasNumberTwo >= 0);
// console.log(hasNumberFour >= 0);
