console.log("Script is working");

// - Generate an array that has all the numbers that are divisible by 3 from 1 to 1000
// - Generate an array that has all the numbers that are divisible by 4 from 1 to 1000
// - Generate an array that has all the numbers that end with the digit 1 from 1 to 1000

// const divisibleByThree = [];
// const divisibleByFour = [];
// const endingInOne = [];

// for (let i = 1; i <= 1000; i++) {
//   if (i % 3 === 0) {
//     divisibleByThree.push(i);
//   }

//   if (i % 4 === 0) {
//     divisibleByFour.push(i);
//   }

//   if (i % 10 === 1) {
//     endingInOne.push(i);
//   }
// }

// console.log(divisibleByThree);
// console.log(divisibleByFour);
// console.log(endingInOne);

function generateArrays() {
  const divisibleByThree = [];
  const divisibleByFour = [];
  const endingInOne = [];

  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
      divisibleByThree.push(i);
    }

    if (i % 4 === 0) {
      divisibleByFour.push(i);
    }

    if (i % 10 === 1) {
      endingInOne.push(i);
    }
  }

  return {
    divisibleByThree,
    divisibleByFour,
    endingInOne,
  };
}

const arrays = generateArrays();

console.log(arrays);

function generateNumArray(maxNumber, divisor, remainder = 0) {
  const resultArr = [];

  for (let i = 1; i <= maxNumber; i++) {
    if (i % divisor === remainder) resultArr.push(i);
  }

  return resultArr;
}

const divisibleByThree = generateNumArray(1000, 3);
const endingInOne = generateNumArray(500, 10, 1);

console.log(divisibleByThree);
console.log(endingInOne);

// - Create a function that cleans an array of any values and leaves only STRINGS
// - Create a function that cleans an array of any values and leaves only NUMBERS
// - Create a function that cleans undefined, null, NaN, false and "" and leaves all other values

const testArr = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

function filterStrings(array) {
  const filteredArr = [];

  for (let el of array) {
    if (typeof el === "string") filteredArr.push(el);
  }

  return filteredArr;
}

console.log(filterStrings(testArr));

function filterNumbers(array) {
  const filteredArr = [];
  for (let el of array) {
    if (typeof el === "number" && !Number.isNaN(el)) filteredArr.push(el);
  }

  return filteredArr;
}

console.log(filterNumbers(testArr));

function filterTruthy(array) {
  const filteredArr = [];
  for (let el of array) {
    if (el) filteredArr.push(el);
  }

  return filteredArr;
}

console.log(filterTruthy(testArr));

// Math.floor() Math.random()
//rgb(243,230,12)
