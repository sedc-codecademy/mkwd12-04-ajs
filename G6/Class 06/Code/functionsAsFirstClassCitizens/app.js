//used as variables
let greeting = function(name){
    console.log(`Hello ${name}`);
}
greeting("Tijana");

function greetingFunction(name){
    console.log(`Hello ${name}`);
}
greetingFunction("Tijana");

let anotherGreeting = name => console.log(`Hello ${name} from SEDC`);
anotherGreeting("Berat");
anotherGreeting("Matej");


//used as member of an array
let numberStatsFunctions = [
    num => num > 0 ? "Positive number" : "Negative number",
    num => num % 2 == 0 ? "Even" : "Odd"
];

console.log(numberStatsFunctions[0](25));
console.log(numberStatsFunctions[1](65));

//used as an argument
function sum(num1, num2){
    return num1 + num2;
}

function diff(num1, num2){
    return num1 - num2;
}

function calculator(number1, number2, calculatorFunction){
   return calculatorFunction(number1, number2);  //sum(number1, number2) or diff(number1, number2)
}

//sum is the argument that will be placed inside the calculatorFunction parameter
console.log(`First call of calculator: ${calculator(2,3, sum)}`); 

//diff is the argument that will be placed inside the calculatorFunction parameter
console.log(`Second call of calculator: ${calculator(7, 3, diff)}`);

//used as return value
function calculate(operator){
    switch(operator){
        case "+":
            return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => {
                console.log(num1);
                console.log(num2);
                return num1 - num2;
                };
        default:
            console.error(`${operator} is invalid operator!`);
            return;
    }
}

//"-" is the argument for operator param, 9,5 are the arguments for num1, num2
console.log(calculate("-")(9,5)); 
//console.log(calculate("!")(9,5)); 

let resultFunction = calculate("+");
console.log(resultFunction(3,5));


//functions as objects
function sayHello(name){
    console.log(`Hello ${name}`);
}
sayHello.defaultName = "Mark";
sayHello.defaultGreeting = function(){
    console.log("Hi!");
}

//this is how we do it with an object
let sayHi = new Object();
sayHi.greeting = "Hi";
sayHi.greetingFunction = function(){
    console.log("Hi!");
}; 

sayHello("SEDC");
console.log(sayHello.defaultName);
sayHello.defaultGreeting();


//Function arguments
function longestString(){
    console.log(arguments);
    let longest = arguments[0];
    for(let argument of arguments){
        if(argument.length > longest.length){
            longest = argument;
        }
    }

    console.log(`The longest string is ${longest}`);
}

longestString("Tijana", "Bob", "Programming", "SEDC");
longestString("2024", "G6", "Jana", "Matej");