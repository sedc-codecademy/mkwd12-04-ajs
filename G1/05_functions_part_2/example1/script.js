// const students = [
//   { name: "Nenad", age: 20, grade: 5 },
//   { name: "Zoran", age: 17, grade: 4 },
//   { name: "Dimitar", age: 21, grade: 2 },
//   { name: "Kole", age: 31, grade: 1 },
//   { name: "Ljupco", age: 41, grade: 4 },
// ];

// find
// const nenad = students.find((student) => student.name === "Nenad");
// const iva = students.find((student) => student.name === "Iva");

// longest version
// if (student.name === "Nenad") {
//   return true;
// } else {
//   return false;
// }

// medium version
// return student.name === "Nenad"

// console.log(nenad);
// console.log(iva);

// findIndex
// const ljupcoIndex = students.findIndex((student) => student.name === "Ljupco");
// const ivaIndex = students.findIndex((student) => student.name === "Iva");

// longest version
// if (student.name === "Ljupco") {
//   return true;
// } else {
//   return false;
// }

// medium version
// return student.name === "Ljupco";

// console.log(ljupcoIndex);
// console.log(ivaIndex);

// Find and findIndex ALWAYS return a SINGLE element
// const theStudentWithGradeFour = students.find((student) => student.grade === 4);
// console.log(theStudentWithGradeFour);

// RECURSION
// function sumTo(num) {
//   if (num === 0) {
//     return 0;
//   }
//   return num + sumTo(num - 1);
// }

// const sumResult = sumTo(5);
// console.log(sumResult);
// 5 + 4 + 3 + 2 + 1 = 15

const numbers = [1, 2, [3, 4, [5, 6, [7, [8], 9], 10, 11, [12, 13]]]];
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
// console.log(flattenArray(numbers));

// flat
const flattenArr = numbers.flat(5);
const flattenArr1 = numbers.flat(1);
const flattenArr2 = numbers.flat(Infinity);

// console.log(flattenArr);
// console.log(flattenArr1);
// console.log(flattenArr2);

// flatMap
const words = ["banana", "lemon", "kiwi"];

const characters = words.flatMap((word) => word.split(""));
// same as using map + flat
const characters2 = words.map((word) => word.split("")).flat(Infinity);
// words[0].split("") + words[1].split("") + words[2].split("");
// console.log(characters);
// console.log(characters2);

// reduce
const numbers2 = [1, 2, 3, 4, 5]; // 15

// const sum = numbers2.reduce((sum, number) => {
//   sum = sum + number;
//   return sum;
// }, 0);

// const sum = numbers2.reduce((sum, number) => (sum += number), 0);
const sum = numbers2.reduce((sum, number) => sum + number, 0);
// console.log(sum);

// sort
const students = [
  { name: "Nenad", age: 20, grade: 5 },
  { name: "Zoran", age: 17, grade: 4 },
  { name: "Dimitar", age: 21, grade: 2 },
  { name: "Kole", age: 31, grade: 1 },
  { name: "Ljupco", age: 41, grade: 4 },
];

// without HOF
// for (let i = 0; i < students.length; i++) {
//   for (let j = i + 1; j < students.length; j++) {
//     // console.log(students[i], students[j]);
//     if (students[i].age > students[j].age) {
//       const temp = students[i];
//       students[i] = students[j];
//       students[j] = temp;
//     }
//   }
// }

// console.log(students);

// with HOF
// const sortedStudents = students.sort((a, b) => a.age - b.age);

// Ascending
// a.age - b.age

// Descending
// b.age - a.age

// 20 - 18 = 2 - positive number
// 20 - 40 = -20  - negative number
// 20 - 20 = 0 - just a zero

// Detailed sorting
// if (a.age > b.age) {
//   return -1;
// } else if (a.age < b.age) {
//   return 1;
// } else {
//   return 0;
// }

// console.log(sortedStudents);
// console.log(students);

// Pass by value VS Pass by reference

// Pass by value - all simple value types
// let name = "Ivo";
// let otherName = name;
// otherName = "Iva";

// Pass by reference - Arrays and Objects
// let dogs = ['murdzo', 'sharko'];
// let otherDogs = dogs;
// otherDogs.sort()

// How to copy an array
// case 1: Use slice
// let copyOfStudents1 = students.slice();

// case 2: use for loop
// let copyOfStudents2 = [];
// for (const student of students) {
//   copyOfStudents2.push(student);
// }

// case 3: Spreading
// let copyOfStudents3 = [...students];

// const sortedStudents = copyOfStudents3.sort((a, b) => a.age - b.age);

// const sortedStudents = [...students].sort((a, b) => a.age - b.age);

// console.log(students);
// console.log(sortedStudents);

// includes
// const numbers3 = [1, 2, 3];

// const hasNumberTwo = numbers3.includes(2);
// const hasNumberFour = numbers3.includes(4);

// console.log(hasNumberTwo);
// console.log(hasNumberFour);

// indexOf
// const numbers3 = [1, 2, 3];

// const hasNumberTwo = numbers3.indexOf(2);
// const hasNumberFour = numbers3.indexOf(4);

// console.log(hasNumberTwo >= 0);
// console.log(hasNumberFour >= 0);
