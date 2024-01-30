//classic
function sayHello(){
    console.log("Hello");
}

sayHello();

//used as variable
let greeting = function(name){
    console.log(`Hello ${name}`);
}

greeting("SEDC");

let anotherGreeting = name => console.log(`Hello ${name}`);
anotherGreeting("Qinshift");

//used as member of an array
let arrayOfFunctions = [name => console.log(`Hello ${name}`), num => num >= 0 ? "Positive": "Negative"];
arrayOfFunctions[0]("Tanja");

let positiveOrNegativeMessage = arrayOfFunctions[1](55);
console.log(positiveOrNegativeMessage);


//used as an argument of another function
function getSum(num1, num2){
    return num1 + num2;
}

function getDiff(num1, num2){
    return num1 - num2;
}

let result = getSum(1, 2);

function calculate(n1, n2, calculatorFunction){ //2, 7, function getSum(num1, num2)..
    let result = calculatorFunction(n1, n2); //let result = getSum(n1, n2);
    console.log(result);
}
calculate(2, 7, getSum);
calculate(5, 2, getDiff);

//used as return value
function calculator(operator){
    switch(operator){
        case "+":
            return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => num1 - num2;
        case "*":
            return (num1, num2) => num1 * num2;
        default:
            console.log("Invalid operator");
            return null;
    }
}
let plusFunction = calculator("+");
console.log(plusFunction);

console.log(plusFunction(4,7));
let plusFunctionResult = plusFunction(4,7);
console.log(plusFunctionResult);


let minusFunction = calculator("-");
console.log(minusFunction);
console.log(minusFunction(10, 5));

let percentFunction = calculator("%");
console.log(percentFunction);

//GET ALL ARGUMENTS
function getLargestString(){
    console.log("Inside getLargestString function");
    console.log(arguments);
}

getLargestString("SEDC", "QINSHIFT", "Academy");

function message(firstName){
    console.log(`Hello ${firstName}`);
    console.log(arguments);
}
message("SEDC", "QINSHIFT");

