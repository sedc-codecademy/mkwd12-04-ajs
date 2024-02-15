let colors = require('colors');

console.log('Hello world!');
// console.log(window);
// console.log(global);

let getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

let displayNumber = (number) => {
    if (number % 2 === 0) {
        console.log(`The number ${number} is even` .green);
    } else {
        console.log(`The number ${number} is odd` .red);
    }
}

let randomNumber = getRandomNumber();

displayNumber(randomNumber);



