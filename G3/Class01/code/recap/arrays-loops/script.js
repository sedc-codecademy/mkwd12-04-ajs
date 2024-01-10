console.log("=================== Arrays ===================");
// collection of related data
// zero-indexed 

// let mixedArray = [true, 1213, "test", NaN] // BAD EXAMPLE
let testArray = [1, 23, 234, 4, 543_545, 3];
console.log(testArray[2]); // 234
console.log(testArray.length);

// ========= Array built-in methods =========

// push(item(s)) => adds an item/items at the end of the array
testArray.push(100);
testArray.push(500, 1000, 1500, 2000, 2500);
// pop() => Removes an item from the end of the array and returns it
let lastItem = testArray.pop();
// unshift(item) => adds an item at the beginning of the array
testArray.unshift(123_123)
// shift() => removes an item from the beginning of the array and returns it
let firstItem = testArray.shift();

// splice() => removes elements from an array and, if necessary, inserts new elements in their place
testArray.splice(1, 3);
// delete everything starting from index 2
// testArray.splice(2);
// adding new items at the place of the removed ones
testArray.splice(1, 3, 1_000_000, 1000, 100);
console.log(testArray);


// ========= Storing complex data types in arrays =========

// Ex. Storing objects (most common scenario)
let objectsArray = [
    { id: 1, firstName: "Bob", lastName: "Bobsky" },
    { id: 2, firstName: "Boba", lastName: "Bobsky" },
];

// console.log(objectsArray);
console.table(objectsArray); // display data in the console in form of a table 
// print Boba Bobsky
console.log(objectsArray[1].firstName + " " + objectsArray[1].lastName);

// Ex. Storing functions (not so common)
function sum(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
let functionsArray = [
    sum,
    subtract
]
console.log(functionsArray[0](14, 23));



console.clear();
console.log("");
console.log("=================== Loops ===================");
// => repetitive execution of code
// => iterate over collections of data (arrays)

// ========= WHILE =========
let whileTestArray = [2, 23, 24, 25, 100];
let counter = 0;
while (counter < whileTestArray.length) {
    console.log(whileTestArray[counter]);
    counter++;
}

// ========= DO WHILE =========
let input = "";
// Example: prompt the user to enter name until valid input is entered
// do {
//     // input = prompt("Enter name")
// } while (input === "" || input === null || input === undefined)

// ========= FOR =========
let students = ["Sirma", "Slavko", "Boris", "Saso", "Vladimir", "Marija"];

for (let i = 0; i < students.length; i++) {
    // console.log(`Student #${i + 1}. ${students[i]}`);
}

// ========= FOR OF =========
for (let student of students) {
    console.log(`Student #${students.indexOf(student) + 1}. ${student}`);
}


// ========= BREAK & CONTINUE =========

let numbers = [123, 23, 424, 343, 5, 54, 77];

// BREAK
// => used to terminate the loop immediately when a certain condition is met, regardless of whether the loop condition remains true or not

// Example: Find if a certain number exists in an array
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 343) {
        console.log(`We found our number '${numbers[i]}' at index ${i}, exiting the loop ...`);
        break;
    }
    console.log(`Number: ${numbers[i]}`);
}

// CONTINUE
// => skips the current iteration of the loop and proceeds to the next iteration
// => the code after the continue keyword won't be executed during that iteration

// Example: Log only numbers that are not divisible by 3
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        continue;
    }
    console.log(`Number: ${numbers[i]}`);
}
