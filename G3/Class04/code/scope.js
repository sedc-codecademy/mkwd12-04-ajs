// Global scope
var y = 5;
console.log(y);
y = 6;
console.log(y);
let x = 5;
x = 6;
console.log(x);
const name = 'Bob';

let a = 'Hello';

function greet() {
    return 'Hello world!';
}

let greetArrow = () => 'Hello world!';

// block scope 
function sumArrayOfNumbersBlock (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];  
    }
    console.log(sum);
}

sumArrayOfNumbersBlock([1, 4, 7, 9]);

let two = 2;
// function scope
function addFive(number) {
    console.log(two);
    // let seven = 7;
    // return seven;
    console.log(number + 5);

    function addTen(number) {
        console.log(number + 10);
    }

    addTen(two);
}

addTen(50); // will throw an error since addTen is not accessible outside of the scope of the addFive function

addFive(10);
// console.log(seven);
