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
