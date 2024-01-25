console.log("houston we are online and ready to go");

// Recursion

function sumTo(num) {
  if (num === 0) {
    return 0;
  }

  return num + sumTo(num - 1);
}

const result = sumTo(3);

console.log(result);

// Scope

const playGame = () => {
  const currentScore = 10;
  printScore(currentScore);
};

const printScore = currentScore => {
  console.log(currentScore);
  const printScoreResult = "Testint Print Score";
  console.log(printScoreResult);
};

playGame();

//Functions as first class citizens

// 1. Stored in a variable
const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;

const multiplyTwoNumbers = (numOne, numTwo) => numOne * numTwo;

// 2. Stored in an array (extremely rare)

const mathFunctions = [(numOne, numTwo) => numOne + numTwo, multiplyTwoNumbers];

console.log(mathFunctions[0](10, 5));
console.log(mathFunctions[1](32, 10));

// 3. Used as an arugment in another function

const calculator = (operatorFunc, numOne, numTwo) => {
  console.log(operatorFunc);

  const result = operatorFunc(numOne, numTwo);

  return result;
};

const resultOneCalc = calculator(addTwoNumbers, 10, 5);
const resultTwoCalc = calculator(multiplyTwoNumbers, 5, 10);
const resultThreeCalc = calculator((numOne, numTwo) => numOne - numTwo, 50, 32);
const resultFourCalc = calculator((numOne, numTwo) => numOne / numTwo, 60, 6);

console.log(resultOneCalc);
console.log(resultTwoCalc);
console.log(resultThreeCalc);
console.log(resultFourCalc);

document.querySelector("#clickBtn").addEventListener("click", event => {
  console.log("clicked");
  console.log(event);
});

//4. Returning a function from another function

const calculatorTwo = operator => {
  if (operator === "+") {
    return (numOne, numTwo) => numOne + numTwo;
  }

  if (operator === "*") {
    return (numOne, numTwo) => numOne * numTwo;
  }

  return () => {
    console.log("Invalid Operator");
  };
};

const addFunc = calculatorTwo("+");

console.log(addFunc);

console.log(addFunc(10, 20));

console.log(calculatorTwo("*")(2, 2));

// 5. FUnctions with properties and methods

const printHello = name => {
  console.log(`Hello there ${name}`);
};

printHello("Borche");

printHello.defaultName = "Hristina";

console.log(printHello.defaultName);

printHello(printHello.defaultName);

function printFullName(firstName, lastName) {
  console.log(arguments);

  console.log(`${firstName} ${lastName}`);
}

printFullName("Borche", "Borisovski", "test", 10, true, 1000, "rest");

//HIGHER ORDER FUNCTIONS

const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    averageGrade: 4,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    averageGrade: 3,
  },
  {
    firstName: "Susan",
    lastName: "Sarandon",
    age: 17,
    averageGrade: 3,
  },
  {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 30,
    averageGrade: 2,
  },
  {
    firstName: "Alice",
    lastName: "Ripley",
    age: 18,
    averageGrade: 5,
  },
  {
    firstName: "Robert",
    lastName: "Duvall",
    age: 50,
    averageGrade: 4,
  },
  {
    firstName: "Ricky",
    lastName: "Balboa",
    age: 16,
    averageGrade: 1,
  },
];

//1. forEach

//Without forEach
const printStudentInfo = students => {
  for (let student of students) {
    console.log(
      `${student.firstName} ${student.lastName}, Age: ${student.age}`
    );
  }
};

// printStudentInfo(students);

// forEach doesn't return anything, watch out when using it when you code
students.forEach(student => {
  console.log(`${student.firstName} ${student.lastName}, Age: ${student.age}`);
});

console.log(students);

//2. filter

// Goal: filter out only students that are aged 18 or above

// Without filter

const filterStudents = students => {
  const resultArr = [];
  for (let student of students) {
    if (student.age >= 18) resultArr.push(student);
  }

  return resultArr;
};

console.log(filterStudents(students));

// With filter
const filteredStudents = students.filter(student => student.age >= 18);

console.log(filteredStudents);

//3. map

const numbers = [-100, 3, 4, 1, 6, 5, 4, 7, 8];

// Without map
const multiplyNumbers = numArr => {
  const resultArr = [];
  for (let num of numArr) {
    resultArr.push(num * 8);
  }
  return resultArr;
};

const generateFullNames = students => {
  const resultArr = [];
  for (let student of students) {
    resultArr.push(`${student.firstName} ${student.lastName}`);
  }

  return resultArr;
};

console.log(generateFullNames(students));

console.log(multiplyNumbers(numbers));

const multipliedNumbers = numbers.map(num => {
  return num * 120;
});

const fullNamesArr = students.map(student => {
  return `${student.firstName} ${student.lastName}`;
});

console.log(fullNamesArr);

console.log(multipliedNumbers);

//4. reduce

const numArrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const sumNumbers = numbers => {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum;
};

console.log(sumNumbers(numArrTwo));

//with reduce

// const sum = numArrTwo.reduce((acc, el) => acc + el,0);

const smallNums = [1, 2, 3];

const sum = smallNums.reduce((acc, num) => {
  console.log(`Accumulator: ${acc}`);
  console.log(`Num: ${num}`);
  console.log("=================");

  return acc + num;
}, 0);

console.log(sum);

const numbersData = numArrTwo.reduce(
  (acc, num) => {
    acc.sum += num;

    if (num % 2 === 0) {
      acc.evens++;
    } else {
      acc.odds++;
    }

    if (acc.max < num) {
      acc.max = num;
    }

    if (acc.min > num) {
      acc.min = num;
    }

    // console.log(acc);

    return acc;
  },
  { sum: 0, evens: 0, odds: 0, min: Infinity, max: -Infinity }
);

console.log(numbersData);

// 5. find

// without find

const findStudent = students => {
  for (let student of students) {
    if (student.firstName === "asdasd") return student;
  }
};

console.log(findStudent(students));

const foundStudent = students.find(student => student.firstName === "John");

const filterJohn = students.filter(student => student.firstName === "John");

console.log(foundStudent);
console.log(filterJohn);

// 6. some

// const numArrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(
  "Some Output",
  numArrTwo.some(num => num > 10)
);

// 7. every
console.log(
  "Every Output",
  numArrTwo.every(num => num > 7)
);

// 8. sort

const numArrThree = [1, 3, 52, 3, 2, 4, 109, 2, 23, 1, 2];

console.log("Numbers before sort", numArrThree);

numArrThree.sort((a, b) => b - a);

console.log("Numbers after sort", numArrThree);

console.log("Students before sort", students);

const studentsCopy = students.map(student => student);

studentsCopy.sort((a, b) => a.age - b.age);

console.log("Students after sort", students);

console.log("Students copy after sort", studentsCopy);

//Method chaining

const oldButGoodStudents = students
  .filter(student => student.age > 25)
  .map(
    student => `${student.firstName} ${student.lastName}, Age: ${student.age}`
  );

console.log(oldButGoodStudents);
