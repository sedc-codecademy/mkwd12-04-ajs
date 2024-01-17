// Function declaration

function saySomething() {
  console.log("Somethiiing!");
}

// Function execution
saySomething(); // Somethiiing! - in console

// Anonymous function
let anonFunc = function () {
  console.log(`I'm anonymous!`);
};

anonFunc();

// Arrow functions
// () => {}

const sayAnotherThing = () => {
  console.log(`I'm an arrow function`);
};

sayAnotherThing();

// Single line
const dogBark = () => console.log("Av Av Av");

dogBark();

// Return in an Arrow function

const sum1 = function () {
  return 1 + 1;
};
console.log(sum1());

const sum2 = () => {
  console.log(`I'm calculating something...`);
  return 2 + 2;
};
console.log(sum2());

// Arrow is declaring a function + is used as return of value
const sum3 = () => 3 + 3;
console.log(sum3());

// Parameters
const calcTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

console.log(calcTwoNumbers(1, 2));
console.log(calcTwoNumbers(2, 3));

const calcTwoNumbers2 = (num1, num2) => {
  return num1 + num2;
};
console.log(calcTwoNumbers2(2, 3));

const calcTwoNumbers3 = (num1, num2) => num1 + num2;
console.log(calcTwoNumbers3(4, 4));

// Callback functions are easier to be written with Arrow functions
document.addEventListener("click", () => {});

// Self Invoke Function
(() => {
  console.log(`I called myself`);
})();

// Parameter/s in Self Invoke Function
((name) => {
  console.log(`Hello ${name}!`);
})("Ivo");

(function () {
  console.log("I am a simple function");
})();

// Arguments
function printNames() {
  console.log("These are all the students: ", arguments);
}

printNames("Nenad", "Zoran", "Dejan");

// Function in an array
let arr = [
  () => console.log(`I'm inside an array`),
  (name) => console.log(`Hello ${name}`),
];

arr[0]();
arr[1]("Nenad");

// Function declaration hoisting

sayHello();

function sayHello() {
  console.log("Hello!!");
}

sayHello();

// Const VS Let
let name = "Ivo";
name = "Ivan";
console.log(name);

const surname = "Petkovski";
// surname = "Jordanovski"; INVALID
console.log(surname);

let arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = [1, 2, 3];
// arr2 = ["nesto dr"]; INVALID
arr2.push(4);

console.log(arr2);

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

console.log(calculator(sum, 1, 2)); // 3
console.log(calculator(difference, 5, 1)); // 4

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

console.log(calculator2("+")(2, 2));
console.log(calculator2("-")(6, 2));

// A function with properties and a method

function greetMe(name) {
  console.log(`Hello ${name}`);
}

greetMe("Pero");
greetMe.defaultName = "Nikola";
console.log(greetMe.defaultName);
greetMe.saySomethingElse = () => console.log("HEEEEY");
greetMe.saySomethingElse();

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

// forEach

// students.forEach(function () {
// })

// forEach DOESN'T RETURN ANYTHING
const result = students.forEach((student) => {
  //   return "NESTO";
  console.log(student.name);
});

// console.log(result); //undefined

// filter

const matureStudents = [];

for (const student of students) {
  if (student.age >= 18 && student.grade > 1) {
    matureStudents.push(student);
  }
}

console.log(matureStudents);

// map
