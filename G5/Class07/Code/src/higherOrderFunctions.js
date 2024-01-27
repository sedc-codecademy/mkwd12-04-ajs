function Student(firstName, lastName, age, averageGrade){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.averageGrade = averageGrade;
}

let students = [new Student("Ana", "Anevska", 20, 4),
 new Student("Marko", "Markovski", 30, 5), new Student("Kate", "Petrovska", 17, 5)];

//we need to log full name for each student
for(let student of students){
    console.log(`${student.firstName} ${student.lastName}`);
}

function logFullName(student){
    console.log(`${student.firstName} ${student.lastName}`);
}
for(let student of students){
    logFullName(student);
}

//HOF - forEach
console.log("====FOREACH with arrow function====");
//function that is given to forEach, will be called for each member of the array students
//the parameter student of this function, will get the value of the current array member
students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));

console.log("====FOREACH with logFullName====");
students.forEach(logFullName);

console.log("====FOREACH with anonymous function====");
students.forEach(function(student){console.log(`${student.firstName} ${student.lastName}`)})

//HOF - filter
let studentsAbove18 = [];
for(let student of students){
    if(student.age >= 18){
        studentsAbove18.push(student);
    }
}

//the function that is given to filter is called for each member of the array
//the members for which this function returns true, will be included in the result
console.log("====FILTER arrow function");
let filteredStudentsAbove18 = students.filter(student => student.age > 18);
console.log(filteredStudentsAbove18);

function checkAge(student){
    return student.age >= 18;
}
console.log("====FILTER named function");
let filteredStudentsWithNamedFunction = students.filter(checkAge);
console.log(filteredStudentsWithNamedFunction);

console.log("Students above 18:")
// for(let s of filteredStudentsWithNamedFunction){
//     logFullName(s);
// }
filteredStudentsWithNamedFunction.forEach(logFullName);

//as a result of filter function, we get an array, but it should be filtered

//we can chain HOF
students.filter(checkAge).forEach(logFullName);
students.filter(s => s.age >= 18).forEach(s => console.log(`${s.firstName} ${s.lastName}`));

//we want to get description for each student (firstName, lastName and age)
//students -> ["Ana Anevska 20", "Marko Markovski 30", "Kate Petrovska 17"]
let studentDescriptions = [];
for(let student of students){
    studentDescriptions.push(`${student.firstName} ${student.lastName} ${student.age}`);
}
console.log("Student descriptions:");
console.log(studentDescriptions);

//HOF MAP
console.log("====MAP with arrow functions====")
let resultDescriptions = students.map(student => `${student.firstName} ${student.lastName} ${student.age}`);
console.log(resultDescriptions);

function getStudentDescription(student){
    return `${student.firstName} ${student.lastName} ${student.age}`;
}

let descriptions = students.map(getStudentDescription);
descriptions.forEach(d => console.log(d));

//chain
console.log("===chained student descriptions===")
students.map(getStudentDescription).forEach(d => console.log(d));

//for all students aged above 18, get and log the average grade
//1. get the students aged above 18
let studentsAb18 = students.filter(s => s.age >=18); //students is an array of Student objects
//2. for each of the filtered students get the average grade
let averageGrades = studentsAb18.map(function(s){return s.averageGrade;}); //averageGrades => [4, 5]
let averageGrades2 = studentsAb18.forEach(function(s){return s.averageGrade;}); 
console.log(averageGrades2); //undefined
//3. log each of the average grades
averageGrades.forEach(ag => console.log(ag));

students.filter(s => s.age >=18).map(function(s){return s.averageGrade;}).forEach(ag => console.log(ag));

//we can call the same HOF multiple times in one chain

//we want to get all students older than 20 and with avg grade > 4
let studentsAbove20AndGradeAbove4 = 
 students.filter(s => s.age > 20).filter(s => s.averageGrade > 4);
 console.log("Students above 20 and avg grade > 4")
 studentsAbove20AndGradeAbove4.forEach(s => console.log(s));

let studentsAbove20AndAvgGradeAbove4 = 
    students.filter(s => s.age > 20 && s.averageGrade > 4);
console.log("Students above 20 and avg grade > 4 example 2:")
studentsAbove20AndAvgGradeAbove4.forEach(s => console.log(s));


//we want to get length of the description of all students with avg grade > 3
//1. students -> ["Ana Anevska 20", "Marko Markovski 30", "Kate Petrovska 17"]
//2. ["Ana Anevska 20", "Marko Markovski 30", "Kate Petrovska 17"] -> [14, 18, 17]
console.log("Student descriptions' lengths:")
students.filter(s => s.averageGrade > 3).map(getStudentDescription) //here we have array of strings as result
 .map(studentDescription => studentDescription.length).forEach(l => console.log(l));

//REDUCE
console.log("====REDUCE====")
let sum = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].averageGrade > 1) {
    sum += students[i].averageGrade;
  }
}
console.log(sum);

let sumOfAverageGrades = students.filter(s => s.averageGrade > 1)
.reduce(function(currentSum, student){
   return currentSum += student.averageGrade;
}, 0)
console.log(sumOfAverageGrades);

let sumOfAverageGrades2 = students.filter(s => s.averageGrade > 1)
.reduce((currentSum, student) => {
    currentSum *= student.averageGrade;
    return currentSum;
}, 1)

let currentSumOfAvgGrades = 25;
let sumOfAverageGrades3 = students.filter(s => s.averageGrade > 1)
.reduce((currentSum, student) => {
    currentSum += student.averageGrade;
    return currentSum;
}, currentSumOfAvgGrades)

//Ana grade 4, Marko grade 5, Kate grade 5
//1. Ana -> current Sum = 0, student = Ana -> currentSum = 4
//2. Marko -> currentSum = 4, student = Marko -> currentSum = 9
//3. Kate -> currentSum = 9, student = Kate -> currentSum = 14

//as a result of reduce we always get one value, in this case 14

// get "Students with avg grade > 1: Ana Marko Kate"
let studentsWithAvgGradeAboveOne = students.filter(s => s.averageGrade > 1)
.reduce(function(concatenatedString, student){
    return concatenatedString += ` ${student.firstName}`;
}, "Students with avg grade > 1:")
console.log(studentsWithAvgGradeAboveOne);
//1. "Students with avg grade > 1:" + " Ana"
//2. "Students with avg grade > 1: Ana" + " Marko"
//3. "Students with avg grade > 1: Ana Marko" + " Kate" -> "Students with avg grade > 1: Ana Marko Kate"


//SORT
//SORT CHANGES THE ORIGINAL ARRAY!!!!!
console.log("===SORT====")
console.log("Students array before sort:");
students.forEach(s => console.log(s));
console.log("Descending:");
students.sort((student1, student2) => student2.averageGrade - student1.averageGrade);
console.log("Students array after sort:");
students.forEach(s => console.log(s));

console.log("Ascending:");
students.sort((student1, student2) => student1.averageGrade - student2.averageGrade);
students.forEach(s => console.log(s));

//in order not to change the original array, we can make a copy and sort the copy

function copyArray(originalArray){
    let copiedArray = [];
    // for(let item of originalArray){
    //     copiedArray.push(item);
    // }
    originalArray.forEach(item => copiedArray.push(item));
    return copiedArray;
}
let copy = copyArray(students);
copy.sort((student1, student2) => student2.averageGrade - student1.averageGrade);
console.log(copy); //descending
console.log(students); //ascending





