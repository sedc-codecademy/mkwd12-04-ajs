// normal function declaration and if/else statement

// write a function that checks if a number is positive or negative

function isPositive(number) {
    if(number > 0) {
        return "number is positive"
    } else {
        return "number is negative"
    }
}

console.log(isPositive(5));

let isPositiveArrow = number => number > 0 ? "number is positive" : "number is negative";

console.log(isPositiveArrow(-5));

// storing a function as a variable

let sayHello = function(name) {
    console.log(`Hello there ${name}`);
}

sayHello("Aleksandar");

// storing function in an array

let numberStateFunctions = [
    number => number > 0 ? "number is positive" : "number is negative",
    number => number % 2 === 0 ? "number is even" : "number is negative",
    number => number >= 0 ? number.toString().length : number.toString().length - 1
]

console.log(numberStateFunctions[0](50));
console.log(numberStateFunctions[1](50));
console.log(numberStateFunctions[2](-50));

// using functions as arguments

function calculator(calculateFunc, number1, number2) {
    return calculateFunc(number1, number2);
}

function sum(input1, input2) {
    return input1 + input2;
}

function difference(input1, input2) {
    return input1 - input2;
}


let resultAdd = calculator(sum, 120, 50);
console.log(resultAdd);

let resultDifference = calculator(difference, 120, 50);
console.log(resultDifference);


let resultMultiply = calculator(function(number1, number2) {
    return number1 * number2;
}, 2, 10);

console.log(resultMultiply);

let resultDivision = calculator((number1, number2) => number1 / number2, 10, 2);

console.log(resultDivision);

// function with properties and methods

let sayHello2 = function(name) {
    return `Hello there ${name}`;
}

sayHello2.defaultName = "Bob";

console.log(sayHello2("Aleksandar"));
console.log(sayHello2(sayHello2.defaultName));


sayHello2.differentGreeting = function(name) {
    return `Hi ${name}`;
}

console.log(sayHello2.differentGreeting(sayHello2.defaultName));

// function arguments 

function someStrings(str1, str2, str3) {
    console.log(arguments.length);
    console.log(arguments[2]);
}

someStrings("string1", "string2", "string3");