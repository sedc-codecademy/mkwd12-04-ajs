console.log("===================== EXERCISES =====================");

console.log("============ Generating arrays ============");
/*
    * Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
    * Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
    * Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
    * NOTE: Use functions 
*/

// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
function numbersDivisibleBy3() {
    let result = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0) {
            result.push(i);
        }
    }
    return result;
}

// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
function evenNumbersDivisibleBy4() {
    let result = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0 && i % 4 === 0) {
            result.push(i);
        }
    }
    return result;
}

// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
function numbersEndingWith1() {
    let result = [];
    for (let i = 1; i <= 1000; i++) {
        if (i % 10 === 1) {
            result.push(i);
        }
        // if (i.toString().endsWith("1")) {
        //     result.push(i);
        // }
    }
    return result;
}



console.log("");
console.log("============ Clean arrays ============");