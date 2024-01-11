console.log("==================== FUNCTIONS ====================");
// reusable piece of code

// Two-step process
// 1) Function Declaration
// 2) Function Execution


// ======== Function without parameters and return ========
function sayHello() {
    console.log("Hello");
}
sayHello();
let hello = sayHello();
console.log(hello); // undefined

// ======== Function with parameters, without return ========
function greet(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
greet("Pink", "Panther");
let greetSomeone = greet("Bob", "Bobsky")
console.log(greetSomeone); // undefined


// ======== Function without parameters, but with return ========
function getPI() {
    console.log("The value of PI is:");
    return Math.PI;
}
let pi = getPI();
console.log(pi);

// ======== Function with parameters and return ========
function multiply(num1, num2) {
    return num1 * num2;
}
let multiplyResult = multiply(200, 3);
console.log(multiplyResult);

// ======== Function with more complex parameters ========

// Example: array of numbers
function getAverage(numbersArray) {
    let sum = 0;
    for (const number of numbersArray) {
        sum += number;
    }
    let average = sum / numbersArray.length;
    return average;
}

// let average = getAverage(500);
// console.log(average); // ERROR
let average = getAverage([100, 200, 300, 400]);
console.log(average);

// Example: array of objects
let students = [
    { id: 1, firstName: "Elena", lastName: "Mitevska" },
    { id: 2, firstName: "Stefan", lastName: "Tomikj" },
    { id: 3, firstName: "Antonio", lastName: "Kazikj" },
    { id: 4, firstName: "Dimitar", lastName: "Nikolov" }
];

function printStudents(studentsArray) {
    for (let student of studentsArray) {
        console.log(`Student #${student.id}. ${student.firstName} ${student.lastName}`);
    }
}
printStudents(students);


// ======== Anonymous function ========
let clickMeBtn = document.getElementById("clickMeBtn")
clickMeBtn.addEventListener("click", function () {
    console.log("Button is clicked");
})


// ============== RETURN KEYWORD ==============
// Use cases:
// 1) Returning a Value
// 2) End function execution

function sum(num1, num2) {
    if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
        return;
    }
    return num1 + num2;
}

console.log(sum(10, 20))
console.log(sum(NaN, 20))

console.clear();

// THE BIG QUESTION => "WHEN TO PUT SOMETHING IN A FUNCTION ?!?!"

// The sense of what to put into a function improves with experience and LOTS OF CODING...
// However, here are some of the cases when you should use a function:

// 1) Code duplication => if you use same code more than once, add it in function

let numbersArray = [1232, 2344, 3434, 3434, 2342];

// ***** WITHOUT FUNCTION => BAD EXAMPLE *****
let sum1 = 0;
for (const number of numbersArray) {
    sum1 += number;
}
let average1 = sum1 / numbersArray.length;
console.log(average1);

// ... CODE CODE CODE ...
numbersArray.push(2345, 3000, 5000, 2500);
// ... CODE CODE CODE ...

let sum2 = 0;
for (const number of numbersArray) {
    sum2 += number;
}
let average2 = sum2 / numbersArray.length;
console.log(average2);


// ***** WITH FUNCTION => GOOD EXAMPLE *****
function calculateAverage(numbersArray) {
    let sum = 0;
    for (const number of numbersArray) {
        sum += number;
    }
    let average = sum / numbersArray.length;
    return average;
}

let firstAverage = calculateAverage(numbersArray)
console.log(firstAverage)

// ... CODE CODE CODE ...
numbersArray.push(3000, 8000, 5000, 9500);
// ... CODE CODE CODE ..

let secondAverage = calculateAverage(numbersArray);
console.log(secondAverage);

// 2) Modularity => breaking down your code into smaller, managable chunks by separating logical pieces into functions
