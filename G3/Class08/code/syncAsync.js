console.log("=============== Debugging ===============");
// => the process of identifying, isolating, and fixing errors or bugs in our program 
// => ensure that the program behaves as expected
// => common ways to debug in Javascript
// 1) console.log
// 2) using browsers Developer Tools (Sources tab)
// 3) using keyword debugger;

// console.log("This is before debugger;");
// debugger;
// console.log("This is after debugger;");

console.log("============== Synchronious executing ==============");
// => JAVASCRIPT IS SINGLE THREADED !!! 
// => the code is executed only on one place in the browser (the call stack)
// => at any given point in time, that single JS thread is running at most ONE line of JS code

// ***Synchronous execution***
// => code is executed sequentially, one line at a time
// => each line of code must be completed before moving on to the next one
// => blocking nature

let test = 123;

function first() {
    console.log("First thing!");
}

function second() {
    console.log("Second thing!");
}

first();
second();
console.log(test);


console.log("============== Asynchronious executing ==============");
// => ability of the program to perform tasks 'in the background'
// => started executing some code, but not waiting for it to complete before moving on to the next line of code
// => when one line of code gets executed later on
// => most common examples: 
// 1) making http request with fetch (Fetch API) & handling the responses without freezing the user's interface
// 2) handling events

// *setTimeout*
// => executes a function (first argument) when a given time passes (second argument)
debugger;
console.log("First");
setTimeout(() => {
    console.log("This is printed after 3 seconds");
}, 3000);
console.log("Second");

// *setInterval*
// => executes a function (first argument) repeatedly on a specified time interval (second argument)
// setInterval(() => {
//     console.log("This is printed every 2 seconds");
// }, 2000)
