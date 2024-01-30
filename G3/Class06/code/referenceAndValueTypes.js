// numbers are passed by value by default
let a = 10;
let b = 20;
let c = a;
c = 30;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// arrays and objects are passed by reference by default
let array = [1, 2, 3, 4, 5];

// creating a "shallow" copy of the array
// it will not create a new array, but only a reference to the same array 
// both array and newArray will point to the same memory location
let newArray = array; 

// creating a "deep" copy of the array
// it will create a completely new array with a completele new memory location
let newRealCopy = array.slice(); // using slice method
// let newRealCopy = [...array]; // using spread operator

