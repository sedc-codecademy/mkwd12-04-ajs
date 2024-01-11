// Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers that are divisible by 4 from 1 to 1000
// Generate an array that has all the numbers that end with the digit 1 from 1 to 1000
// Generate an array that has all the numbers that are divisible by 3 or 6 from 1 to 1000
// Generate an array that has all the numbers that are divisible by 3 and 6 at the same time from 1 to 1000
let numbersDivisibleByThree = [];
let numbersDivisibleByFour = [];
let numbersEndingWIthOne = [];
let numbersDivisibleByThreeOrSix = [];
let numbersDivisibleByThreeAndSix = [];

for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0) {
        numbersDivisibleByThree.push(i);
    }
    if (i % 4 == 0) {
        numbersDivisibleByFour.push(i);
    }
    if (i % 10 == 1) {
        numbersEndingWIthOne.push(i);
    }

    if (i % 3 == 0 || i % 6 == 0) {
        numbersDivisibleByThreeOrSix.push(i);
    }

    if (i % 3 == 0 && i % 6 == 0) {
        numbersDivisibleByThreeAndSix.push(i);
    }
}

console.log("Numbers divisible by 3 from 1 to 1000");
console.log(numbersDivisibleByThree);

console.log("Numbers divisible by 4 from 1 to 1000");
console.log(numbersDivisibleByFour);

console.log("Numbers ending with 1 from 1 to 1000");
console.log(numbersEndingWIthOne);

console.log("Numbers divisible by 3 or 6 from 1 to 1000");
console.log(numbersDivisibleByThreeOrSix);

console.log("Numbers divisible by 3 and 6 from 1 to 1000");
console.log(numbersDivisibleByThreeAndSix);