// *** Storing function as a variable ***
function add(first, second) {
    return first + second;
}

const sumFunction = add;
const sumResult = sumFunction(5, 10);

function subtract (first, second) {
    return first - second;
}
const subtractFunction = subtract;

// *** Storing functions in an array and using them
function multiply (first, second) {
    return first * second;
}

const multiplyFunction = multiply;

function divide (first, second) {
    if (second === 0) {
        return 'Cannot divide by zero';
    }
    return first / second;
}
const divideFunction = divide;

const operations = [add, subtract, multiply, divide];
console.log(operations[2](20, 6));

// *** USing function as an arguement ***
function operation (func, firstNumber, secondNumber) {
    return func(firstNumber, secondNumber);
}

let operationResult = operation(add, 30, 50);
console.log(operationResult);

// *** Returning a function from another function ***
const greetingGenerator = (language) => {
    switch (language.toLowerCase()) {
        case 'english':
            return (name) => console.log(`Hello ${name}!`);
        case 'spanish':
            return (name) => console.log(`Hola ${name}!`);
        case 'french':
            return (name) => console.log(`Bonjour ${name}!`)
        default:
            console.log('Unsopported language')
            return null;
    }
}

const greetInEnglish = greetingGenerator('english');
const greetInSpanish = greetingGenerator('spanish');
const greetInFrench = greetingGenerator('french');

// greetInSpanish('Pablo');

// *** A function with properties and a method
const taskHandler = (taskName) => {
    return `Task ${taskName} completed!`;
}

taskHandler.defaultTask = 'learn coding';
taskHandler.description = 'This is a task handler function.'

// Getting property values from the function
console.log(taskHandler.defaultTask);
const defaultTaskResult = taskHandler(taskHandler.defaultTask);
console.log(defaultTaskResult);

// Adding method to the function
taskHandler.customTaskResult = (taskName, customAction) => {
    return `The result for the task ${taskName}: ${customAction}.`;
}

const customResult = taskHandler.customTaskResult('play soccer', (() => {
    return 'still in progress';
})());

console.log(customResult);
