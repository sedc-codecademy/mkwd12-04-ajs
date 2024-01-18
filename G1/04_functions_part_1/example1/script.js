// Function declaration

function saySomething() {
  console.log("Somethiiing!");
}

// Function execution
// saySomething(); // Somethiiing! - in console

// Anonymous function
let anonFunc = function () {
  console.log(`I'm anonymous!`);
};

// anonFunc();

// Arrow functions
// () => {}

const sayAnotherThing = () => {
  console.log(`I'm an arrow function`);
};

// sayAnotherThing();

// Single line
const dogBark = () => console.log("Av Av Av");

// dogBark();

// Return in an Arrow function

const sum1 = function () {
  return 1 + 1;
};
// console.log(sum1());

const sum2 = () => {
  console.log(`I'm calculating something...`);
  return 2 + 2;
};
// console.log(sum2());

// Arrow is declaring a function + is used as return of value
const sum3 = () => 3 + 3;
// console.log(sum3());

// Parameters
const calcTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

// console.log(calcTwoNumbers(1, 2));
// console.log(calcTwoNumbers(2, 3));

const calcTwoNumbers2 = (num1, num2) => {
  return num1 + num2;
};
// console.log(calcTwoNumbers2(2, 3));

const calcTwoNumbers3 = (num1, num2) => num1 + num2;
// console.log(calcTwoNumbers3(4, 4));

// Callback functions are easier to be written with Arrow functions
document.addEventListener("click", () => {});

// Self Invoke Function
// (() => {
//   console.log(`I called myself`);
// })();

// Parameter/s in Self Invoke Function
// ((name) => {
//   console.log(`Hello ${name}!`);
// })("Ivo");

// (function () {
//   console.log("I am a simple function");
// })();

// Arguments
function printNames() {
  console.log("These are all the students: ", arguments);
}

// printNames("Nenad", "Zoran", "Dejan");

// Function in an array
let arr = [
  () => console.log(`I'm inside an array`),
  (name) => console.log(`Hello ${name}`),
];

// arr[0]();
// arr[1]("Nenad");

// Function declaration hoisting

// sayHello();

function sayHello() {
  console.log("Hello!!");
}

// sayHello();

// Const VS Let
let name = "Ivo";
name = "Ivan";
// console.log(name);

const surname = "Petkovski";
// surname = "Jordanovski"; INVALID
// console.log(surname);

let arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = [1, 2, 3];
// arr2 = ["nesto dr"]; INVALID
arr2.push(4);

// console.log(arr2);

// Functions as arguments
// + OR -
function calculator(operationFunc, num1, num2) {
  return operationFunc(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

function difference(num1, num2) {
  return num1 - num2;
}

// console.log(calculator(sum, 1, 2)); // 3
// console.log(calculator(difference, 5, 1)); // 4

// Returning a function from another function
function calculator2(operation) {
  switch (operation) {
    case "+":
      return function (num1, num2) {
        return num1 + num2;
      };
      break;
    case "-":
      return function (num1, num2) {
        return num1 - num2;
      };
      break;
    default:
      console.log("ERROR");
      break;
  }
}

// console.log(calculator2("+")(2, 2));
// console.log(calculator2("-")(6, 2));

// A function with properties and a method
function greetMe(name) {
  console.log(`Hello ${name}`);
}

// greetMe("Pero");
// greetMe.defaultName = "Nikola";
// console.log(greetMe.defaultName);
// greetMe.saySomethingElse = () => console.log("HEEEEY");
// greetMe.saySomethingElse();

// Higher-order functions
const students = [
  { name: "Nenad", age: 20, grade: 5 },
  { name: "Zoran", age: 17, grade: 4 },
  { name: "Dimitar", age: 21, grade: 2 },
  { name: "Kole", age: 31, grade: 1 },
  { name: "Ljupco", age: 41, grade: 4 },
];

// for (const student of students) {
//   console.log(student.name);
// }

// === forEach ===
// Higher-order functions can be used with normal functions as well as with arrow functions
// students.forEach(function () {
// })

// students.forEach((student) => {
//     console.log(student.name);
// });

// forEach DOESN'T RETURN ANYTHING
// it just iterates over the array and executes the callback function for each element
// Example: it's used to show something on the screen
// const result = students.forEach((student) => {
//   //   return "NESTO";
//   console.log(student.name);
// });
// console.log(result); //undefined

// === filter ===
const matureAndPassingStudents = [];

for (const student of students) {
  if (student.age >= 18 && student.grade > 1) {
    matureAndPassingStudents.push(student);
  }
}
// console.log(matureStudents);

// Filter returns a new array
// Filter returns an array of elements that pass the condition - It can be either equal or less than the original array
// Filter returns an empty array if no elements pass the condition
// Filter DOESN'T CHANGE THE ORIGINAL ARRAY
// The callback needs a return statement that returns a boolean value
// let matureStudents = students.filter((student) => {
//   if (student.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// });

// students = students.filter((s) => s.age > 70); DO NOT REASSIGN (FOR NOW)

// let matureStudents = students.filter((student) => student.age >= 18);

// let matureAndGoodStudents = students.filter(
//   (student) => student.age >= 18 && student.grade >= 3
// );

// console.log("ALL", students);
// console.log("MATURE", matureStudents);
// console.log("MATURE AND GOOD", matureAndGoodStudents);

// === map ===
// let studentNames = [];
// let uppercaseStudentNames = [];

// for (const student of students) {
//   studentNames.push(student.name);
//   uppercaseStudentNames.push(student.name.toUpperCase());
// }

// Map returns a new array
// Map returns an array of the same length as the original array
// Map DOESN'T CHANGE THE ORIGINAL ARRAY
// Map returns an empty array if the original array is empty
// Map returns an array of the same elements as the original array but with different values (depending on the logic in the callback)
// It can be used to map an array of objects to an array of strings, numbers, booleans, etc. Basically any type of data to any other type of data in arrays
// const studentNames = students.map((student) => {
//   return student.name;
// });

// const studentNames = students.map((student) => student.name);
// const uppercaseStudentNames = students.map((student) =>
//   student.name.toUpperCase()
// );

// console.log("ALL", students);
// console.log("STUDENT NAMES", studentNames);
// console.log("UPPERCASE STUDENT NAMES", uppercaseStudentNames);

// === slice ===

// Slice returns a new array
// Slice returns a part of the original array
// Slice DOESN'T CHANGE THE ORIGINAL ARRAY
// Slice returns an empty array if the original array is empty
// Slice has two parameters - start and end, both are optional, start is inclusive, end is exclusive
// const studentsCopy = students.slice(); //copy
// const studentsCopy2 = students.slice(2); //copy
// const studentsCopy3 = students.slice(2, 4); //copy

// console.log("ALL", students);
// console.log("SLICE 1", studentsCopy3);

// === splice ===

// Splice returns a new array
// Splice returns a part of the original array
// Splice CHANGES THE ORIGINAL ARRAY (it removes the elements from the original array)
// Slice has two parameters - start & deleteCount, start is inclusive, deleteCount is optional. If deleteCount is not provided, it will remove all elements from the start index to the end of the array
// const splicedStudents = students.splice(2);
// const splicedStudents2 = students.splice(2, 1);

// console.log("ALL", students);
// console.log("splicedStudents", splicedStudents2);

// === some ===
// Some returns a boolean value
// Some returns true if at least one element passes the condition
// Some returns false if no elements pass the condition
// Some DOESN'T CHANGE THE ORIGINAL ARRAY
// const isThereNenadInTheClass = students.some(
//   (student) => student.name === "Nenad"
// );
// const isThereNikolaInTheClass = students.some(
//   (student) => student.name === "Nikola"
// );

// console.log(isThereNenadInTheClass);
// console.log(isThereNikolaInTheClass);

// === every ===
// Every returns a boolean value
// Every returns true if all elements pass the condition
// Every returns false if at least one element doesn't pass the condition
// Every DOESN'T CHANGE THE ORIGINAL ARRAY
// const areAllStudentsExcellent = students.every(
//   (student) => student.grade === 5
// );

// const doAllStudentsHaveNames = students.every((student) => !!student.name);

// console.log(areAllStudentsExcellent);
// console.log(doAllStudentsHaveNames);

// === join ===
// Join returns a string
// Join returns a string of all the elements in the array separated by the provided argument
// Join DOESN'T CHANGE THE ORIGINAL ARRAY
// Join requires a string as an argument (it will use that string to separate the elements in the array)
let studentNames = ["Pero", "Klime", "Nenad"];
let message = `The students: ${studentNames.join(", ")}`;
// console.log(message);

// let studentsNamesFromArr =
//     students.map((student) => student.name)

// let joinedStudentNames = studentsNamesFromArr.join(", ");

// console.log(studentsNamesFromArr, joinedStudentNames);

let joinedNames = students // original arr
  .filter((s) => s.grade > 1) // returns an array of objects without the failing student
  .map((student) => student.name) // returns an array of strings with the student names
  .join(", "); // returns a single string

// console.log(joinedNames);

// === split ===
// Split is a string method
// Split returns an array
// Split returns an array of strings
// Split DOESN'T CHANGE THE ORIGINAL STRING
// Split requires a string as an argument (it will use that string to split the original string)
let sportsTeams = "Bayern, Dortmund, Barca, Real";
let teamsArr = sportsTeams.split(", ");
// console.log(teamsArr);

let team = "Real Madrid";

let reversedString = team.split("").reverse().join("");

console.log(reversedString);

// We can chain Higher-order functions, and they are executed from left to right. Make sure you know exactly what each function does and what it returns before you chain them!
