//1. function that counts digits in a number
function getNumberOfDigits(num){
    if(num < 0){
        return num.toString().length - 1;
    }
    else{
        return num.toString().length;
    }
}

//2. function that tells whether a number is even or odd
function checkOddOrEven(num){
    // if(num % 2 === 0){
    //     return "even";
    // }
    // else{
    //     return "odd";
    // }

    let result = num % 2 === 0 ? "even" : "odd";
    return result;
}

//3. function that tells whether a number is positive or negative
function checkPositiveOrNegative(num){
    // let result = num >= 0 ? "positive" : "negative";
    // return result;

    return num >= 0 ? "positive" : "negative";
}


function getNumberStats(num){

    let numOfDigits = getNumberOfDigits(num);
    let oddOrEven = checkOddOrEven(num);
    let isPositiveOrNegative = checkPositiveOrNegative(num);

    console.log(`Number ${num} has ${numOfDigits} digits, is ${oddOrEven} and is ${isPositiveOrNegative}.`);
}

getNumberStats(-125);
getNumberStats(12);
getNumberStats(6743544);