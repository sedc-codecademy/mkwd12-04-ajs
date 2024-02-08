// HIGHER ORDER FUNCTIONS
let students = [
  {firstName: "Bob", lastName: "H", grade: 5, age: 19},
  {firstName: "Mel", lastName: "B", grade: 2, age: 33},
  {firstName: "Jill", lastName: "M", grade: 3, age: 15},
  {firstName: "Lucky", lastName: "J", grade: 5, age: 18},
  {firstName: "Strike", lastName: "K", grade: 4, age: 16},
  {firstName: "Eric", lastName: "I", grade: 1, age: 17}
]
let students2 = [
  {
    firstName: "Bob", lastName: "H", grades: [
      {subject: "Math", grade: 2},
      {subject: "Science", grade: 3}
    ], age: 19
  },
  {
    firstName: "Mel", lastName: "B", grades: [
      {subject: "Math", grade: 3},
      {subject: "Science", grade: 5}
    ], age: 33
  }
]

// Without higher order function
for (let i = 0; i < students.length; i++) {
  console.log(`
	${students[i].firstName} ${students[i].lastName}
	`);
}

// With higher order function using a function
function logFullNames(student) {
  console.log(`
	${student.firstName} ${student.lastName}
	`);
}

students.forEach(logFullNames);

// With higher order function using annonimous function
students.forEach(function (student) {
  console.log(`
${student.firstName} ${student.lastName}
`)
});

// With higher order function using arrow function
students2
    .forEach(student =>
        student.grades.filter(grade =>
            grade.grade === 5)
            .forEach(grade =>
                console.log(`${grade.subject}: ${grade.grade}`)));
// step 1: get all students
// step 2: for every student get their grades array
// step 3: filter the grades array so that only grade 5 will pass
// step 4: filter will return a result array with only grade 5 grades
// step 5: we will use forEach on the new result array with only 5
// step 6: forEach will print them in the console

// Without higher order function
let above18 = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].age >= 18) {
    above18.push(students[i]);
  }
}

// With higher order function using a function
function above18check(student) {
  return student.age >= 18;
}

let studentsAbove18 = students.filter(above18check);

// With higher order function using annonimous function
let aboveEighteen = students.filter(function (student) {
  return student.age >= 18
});

// With higher order function using arrow function
let filteredAbove18 = students
    .filter(student => student.age >= 18)
    .filter(student => student.grade > 4);

console.log(above18);

let names = students
    .map(student => {
      return {
        name: `${student.firstName} ${student.lastName}`
        , grade: student.grade
      }
    });
console.log(names);

let allGradesExeptLowest = students
    .filter(student => student.grade > 1)
    .map((student) => student.grade)
    .reduce((sum, grade) => sum *= grade, 0);
console.log(allGradesExeptLowest);

let filteredGrades = students
    .filter(student => student.grade > 1)
    .reduce((sum, student) => sum += student.grade, 0);
console.log(allGradesExeptLowest);

let filteredGradesExceptLowest = students
    .filter(student =>
        student.grade > 1)
    .reduce((names, student) =>
        names += student.firstName + " ", "Students:");
console.log(allGradesExeptLowest);


let studentss = [
  {name: "Bob", grade: 2},
  {name: "Jill", grade: 3},
  {name: "Greg", grade: 1},
  {name: "Ann", grade: 5},
  {name: "Bill", grade: 4},
  {name: "Jane", grade: 4},
];

let sum = studentss.reduce((suma, student) =>
    suma = (suma + student.grade), 0) / studentss.length;
console.log(sum);
let sumNames = studentss.reduce((suma, student) =>
    suma = (suma + student.name + " "), "Students: ");
console.log(sumNames);
// step 1: suma = 0; student = {name: "Bob", grade: 2}
// step 2: suma(0) = suma(0) + student.grade(2)
// step 3: suma = 2; stident = {name: "Jill", grade: 3}
// step 4: suma(2) = suma(2) + student.grade(3)
// itn. itn.
// step 16: suma = 19;
// step 17 return suma;

// let numbers = [2,43,5,6,3,6,7];

function sortFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].grade < arr[j].grade) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let sorted = sortFunc(students);
console.log(sorted);

// Spread syntax
function sumThreeNums(num1, num2, num3) {
  return num1 + num2 + num3;
}

let arrayNumbers = [2, 6, 8, 6, 2, 6, 8, 6];
console.log(sumThreeNums(...arrayNumbers));

let sortedStudents = [...studentss];
sortedStudents.sort((student1, student2) => student2.grade - student1.grade); // Descending
sortedStudents.sort((student1, student2) => student1.grade - student2.grade); // Ascending
// let names = studentss.sort((a,b) => {
// 	return a.name < b.name ? 1 : -1;
// })
console.log(studentss);
console.log(sortedStudents);
// console.log(names);

// Strict and arguments
'use strict';

function longestString(num1) {
  console.log(arguments) // first argument
  //console.log(arguments[1]) // second argument
  // console.log(arguments[2]) // third argument
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    //console.log(i+1 + ": " + arguments[i])
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

console.log("Result:" + longestString("Hello", "Yo", "Super", "Hello SEDC", "HelLo SEDC", 2, true, null));












