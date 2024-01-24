const numbers = [2, 5, -5, 8, 10, -15, 7, 3, -12, 17, -34, 53];
const users = [
    {id: 1, name: 'Alice', age: 28, occupation: 'Software Engineer'},
    {id: 2, name: 'Bob', age: 35, occupation: 'Data Scientist'}, 
    {id: 3, name: 'Charlie', age: 22, occupation: 'Graphic Designer'}, 
    {id: 4, name: 'Jane', age: 42, occupation: 'QA'},
    {id: 5, name: 'David', age: 42, occupation: 'Product Manager'},
];

const students = ['Sasho', 'Boris', 'Slavko', 'Sirma', 'Marija', 'Vladimir'];

// *** map ***
// - executes a provided function once for each array element
// - returns a value for each element in the array and stores it in a new array
// - does not modify the original array
const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);
// console.log(numbers);
const userNames = users.map(e => e.name);
console.log(userNames);



// *** forEach ***
// - executes a provided function once for each array element
// - does not return value
// - modifies the original array!!!

// numbers.forEach(num => console.log(num));

users.forEach(user => {
    console.log(`${user.name} - ${user.age} years old is ${user.occupation}`);
})

// Bad practice
// const arr = numbers.forEach((num, index) => numbers[index] = num*2
// )
// console.log(arr); // undefined
// console.log(numbers); // modified numbers array

// *** filter *** 
// - executes a provided function once for each array element
// - if the elemets passes the test it is kept in the new result array
// - does not modify the original array

const positiveNumbers = numbers.filter(num => num > 0);
console.log(positiveNumbers);

const olderUsers = users.filter(user => user.age > 30);
console.log(olderUsers);

// *** reduce ***
// - executes a provided reducer function once for each array element and the result of the calculation on the previous element is passed to the next element
// - returns a single value after running the reducer across all elements
// - does not modify the original array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
const multiplyResult = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(multiplyResult);

// const positiveNums = numbers.filter(num => num > 0);
// const sumOfPostiveNums = positiveNums.reduce((acc, curr) => acc + curr, 0);
const sumOfPostiveNums = numbers.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);
console.log(sumOfPostiveNums);

const averageAge = users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log(averageAge);


// *** sort ***
// - sorts the elements of an array in place and returns the reference to the same array, now sorted
const numbersToSort = [2, 5, -5, 8, 10, -15, 7, 3, -12, 17, -34, 53, 120, 70, -10, 35];
numbersToSort.sort((a, b) => a - b); // ascending
numbersToSort.sort((a, b) => b - a); // descending
console.log(numbersToSort);

students.sort((a, b) => a.localeCompare(b, 'en')); // ascending
students.sort((a, b) => b.localeCompare(a, 'en')); // descending
console.log(students);

// *** includes ***
// - determines whether an array includes a certain value among its entries
// - returns true if the array includes that specific value, otherwise it returns false
// - does not modify the original array
const studentsIncludeIvan = students.includes('Ivan');
console.log(studentsIncludeIvan);
const studentsIncludeSasho = students.includes('Sasho');
console.log(studentsIncludeSasho);


// *** find ***
// - returns the first element in the provided array that satisfies the provided testing function
// - if no elements satisfy the testing function, undefined is returned
// - does not modify the original array
const foundUser = users.find(user => user.age === 42);
console.log(foundUser);

const foundStudent = students.find(student => student === 'Sirma');
console.log(foundStudent);