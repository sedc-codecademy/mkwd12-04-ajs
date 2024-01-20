// Declaration of a function

// Hoisting
let pane = getFullName("Panche", "Manaskov");
console.log(pane);

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

let bob = getFullName("Bob", "Bobski");
let john = getFullName("John", "Dow");

console.log(bob);
console.log(john);

// Function Expressions / Anonymous functions

// You can't use hoisting on function expressions
// func1()

let func1 = function () {
    console.log("Hello");
}

func1();

let array = [2, 5, 8, function () {
    return 4 + 2 - 1;
}]

console.log(array);
console.log(array[3]());

// Arrow Functions

let sayHello = () => console.log("Hello g7");
sayHello();

let someResult = num => num + 10;
console.log(someResult(10));

let sumFunc = (num1, num2) => num1 + num2;
console.log(sumFunc(5,4));

let sumFunc2 = (num1, num2) => {
    let result = num1 + num2;
    return result;
}

console.log(sumFunc2(10,15));


const myObject = {
    message: "Hello g7",
    delayedLog: function () {
        setTimeout(function () {
            console.log(this.message)
        }.bind(this), 1000)
    }
}

myObject.delayedLog();

const myObject2 = {
    message: "Hello G7 from arrow function",
    delayedLog: function () {
        setTimeout(() => {
            console.log(this.message);
        }, 1000)
    }
}

myObject2.delayedLog();

// Self invoking functions

let func = () => {
    let result = 5;
    console.log(result);
}

// func() // regular function call

(() => {
    let result = 5;
    console.log(result);
})();


(function (num1, num2) {
    console.log(num1 + num2);
})(2, 5);

let result2 = (function(num1, num2) {
    return num1 + num2;
})(10,20);

console.log(result2);

function sum(num1, num2) {
    console.log(num1 + num2);
}

sum((function sumA(num1, num2) {
    return num1 + num2;
})(7, 5), 18);

// Scope

let x = 6;
x = 5;
// let x = 10

// var y = 6
// var y = 5
// console.log(y)

console.log(x);

let ten = 10;
function sumPlusOne(num1, num2) {
    let one = 1; //Function scope of sumPlusOne 
    one = one + ten;

    console.log(num1 + num2 + one);

    function add5 (number) {
        let insideVar = 100; // Function scope of sumPlusOne
        console.log(number + 5)
    }

    add5(one)

    if(one > 0) {
        console.log("We have a value bigger then zero!")
        let random = 22;
        var randomVar = 25;
    }

    // console.log(random);
    console.log("randomVar:",randomVar);
    // console.log(insideVar);
}

sumPlusOne(10, 15)

// console.log(insideVar);
// console.log(one);


// Recursion

function sumTo(num) {
    let sum = 0;

    for(let i = 1; i <= num; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(10));

function sumToRecursion(num) {
    if (num === 0) {
        return 0
    }

    return num + sumToRecursion(num - 1)
}

console.log(sumToRecursion(10));

// with an arrow function

let sumToArrow = num => num === 0 ? 0 : num + sumToArrow(--num);
console.log(sumToArrow(10));










