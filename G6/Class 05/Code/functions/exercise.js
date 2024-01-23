// Make 3 functions: (we will use full number)

// Function that takes a number through a parameter and returns how many digits that number has
// Function that takes a number through a parameter and returns if its even or odd
// Function that takes a number through a parameter and returns if its positive or negative
// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.

// Ex:
// Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative

//1.function that counts digits in a number
function getNumberOfDigits(num){
    if(num < 0){  //-23 ->the length is 3, we need 2 (without the -)
        return num.toString().length -1;
    }else{ //23 ->the length is 2
        return num.toString().length;
    }
}

//2.function that tells whether a number is even or odd
function checkOddOrEven(num){
    // if(num %2 == 0){
    //     return "even";
    // }else{
    //     return "odd";
    // }

    let result = num % 2 == 0 ? "even" : "odd"; //ternary operator
    return result;
}

//3.function that tells whether a number is positive or negative
function checkPositiveOrNegative(num){
    let result = num >= 0 ? "positive" : "negative";
    return result;
}

function getNumberStats(num){
    let numberOfDigits = getNumberOfDigits(num);
    let isOddOrEven = checkOddOrEven(num);
    let isPositiveOrNegative = checkPositiveOrNegative(num);

    console.log(`Number ${num} has ${numberOfDigits}, is ${isOddOrEven} and is ${isPositiveOrNegative}`);
}

getNumberStats(-123);
getNumberStats(1);
getNumberStats(546546);

//the getStats function as self invoked function
// (function(num){
//     let numberOfDigits = getNumberOfDigits(num);
//     let isOddOrEven = checkOddOrEven(num);
//     let isPositiveOrNegative = checkPositiveOrNegative(num);

//     console.log(`Number ${num} has ${numberOfDigits}, is ${isOddOrEven} and is ${isPositiveOrNegative}`);
// })(-45);   