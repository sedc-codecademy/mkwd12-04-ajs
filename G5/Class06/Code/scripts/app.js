//used as variables
let greeting = function(name){
    console.log(`Hello ${name}`);
}
greeting('Tanja');
greeting("Bojan");

let anotherGreeting = name => console.log(`Hello ${name} from SEDC`);
anotherGreeting("Ana");
anotherGreeting("Marko");

//used as member of an array
let numberStatsFunctions = [
    num => num > 0 ? "Positive number" : "Negative or equal to zero",
    num => num%2 == 0 ? "Even number" : "Odd number"
];
console.log(numberStatsFunctions[0](25));
console.log(numberStatsFunctions[1](25));

//used as an argument
function sum(num1, num2){
    return num1 + num2;
}
function diff(num1, num2){
    return num1 - num2;
}
function calculator(number1, number2, calculatorFunction){
    return calculatorFunction(number1, number2); //sum(number1, number2); or diff(number1, number2);
}
console.log(`First call of calculator ${calculator(3, 4, sum)}`);
console.log(`Second call of calculator ${calculator(3, 4, diff)}`);

//used as return value
function calculate(operator){
    switch(operator){
        case "+":
            return (num1, num2) => num1 + num2;
        case "-":
            return (num1, num2) => num1 - num2;
        default:
            console.log(`${operator} is invalid operator!!!`);
            return null;
    }
}

let resultFunction = calculate("+"); // resultFunction = (num1, num2) => num1 + num2;
console.log("resultFunction(9,7):")
console.log(resultFunction(9,7));
console.log(`calculate('-'): ${calculate("-")(7,2)}`);



//FUNCTION ARGUMENTS
function longestString(){
    console.log(arguments);
    let longest = arguments[0];
    debugger
    for(let argument of arguments){
        if(argument.length > longest.length){
            longest = argument;
        }
    }
    console.log(`The longest string is ${longest}`);
}
longestString("Bob", "Johnson", "SEDC", "Programming");
longestString("2022", "Web programming");
