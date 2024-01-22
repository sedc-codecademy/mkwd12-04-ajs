console.log("works");

// Basic way of defining functions
function printFullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

printFullName("Johnny", "Bravo");

console.log(addTwoNumbers(10, 20));

function addTwoNumbers(numOne, numTwo) {
  return numOne + numTwo;
}

const resultOne = addTwoNumbers(30, 21);

console.log(resultOne);

const multiplyTwoNumbers = function (numOne, numTwo) {
  return numOne * numTwo;
};

console.log(multiplyTwoNumbers(10, 2));
console.log(multiplyTwoNumbers);

// Calling one function inside another one

const calculator = function (operator, numOne, numTwo) {
  // numOne and numTwo below are parameters
  function divideTwoNumbers(numOne, numTwo) {
    return numOne / numTwo;
  }

  //"*", "+"

  //   numOne and numTwo below are arguments a.k.a the values when the parent function was called
  if (operator === "+") {
    return addTwoNumbers(numOne, numTwo);
  }

  if (operator === "*") {
    return multiplyTwoNumbers(numOne, numTwo);
  }

  if (operator === "/") {
    return divideTwoNumbers(numOne, numTwo);
  }

  return "Invalid Operator";
};

console.log(calculator("+", 20, 30));
console.log(calculator("*", 20, 30));
console.log(calculator("=", 20, 30));

//Arrow functions

const sayHello = () => {
  console.log("Hello from the arrow function");
};

sayHello();

// Arrow function without function body brackets
const subractTwoNumbers = (numOne, numTwo) => numOne - numTwo;

console.log(subractTwoNumbers(10, 2));

// const printMoneyFunc = function (money) {
//   return `You have a total of: $${money}`;
// };

const printMoneyFunc = money => `You have a total of: $${money}`;

console.log(printMoneyFunc(320));

const clickBtn = document.querySelector("#clickBtn");

clickBtn.addEventListener("click", event => {
  console.log(event);

  console.log(event.target);

  console.log("btn clicked");
});

// Arrow functions as methods in objects

const person = {
  firstName: "Borche",
  lastName: "Borisovski",
  age: 31,

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },

  printAge: () => {
    console.log(this);

    console.log(`Person is ${this.age} years old`);
  },
};

person.printFullName();
person.printAge();
