// doesnt work with anonymous and arrow functions, only with traditional function definition
divideNumbers(50, 5);


function divideNumbers (dividend, divisor) {
    let result = dividend/divisor;
    console.log(result);
    return result;
}

// will not work
// divideNumbersAnonymous(20, 50)
// let divideNumbersAnonymous = function(dividend, divisor) {
//     let result = dividend/divisor;
//     console.log(result);
//     return result;
// }

// will not work
// divideNumbersArrow(20, 50)
// let divideNumbersArrow = (dividend, divisor) => {
//     let result = dividend/divisor;
//     console.log(result);
//     return result;
// }

// console.log(a); // will throw an error
// let a = 10;

// console.log(b); // will throw an error
// const b = 10;

console.log(c); // will log undefined
var c = 10;