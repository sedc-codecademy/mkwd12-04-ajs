// Named exports, we have to use brackets and the exact name to import
import {
  multiplyTwoNumbers,
  divideTwoNumbers,
  printFullName as printName,
} from "./src/math.js";

//Default export, we can import this as any name
import mathMethods from "./src/math.js";

console.log(mathMethods);

// const result = addTwoNumbers(10, 20);
// const resultTwo = subtractTwoNumbers(10, 2);

// console.log(result, resultTwo);

console.log(multiplyTwoNumbers(2, 5));
console.log(divideTwoNumbers(11, 12));
printName("First", "Firstson");
