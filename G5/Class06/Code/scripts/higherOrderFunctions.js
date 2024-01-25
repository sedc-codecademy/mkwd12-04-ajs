function Student(fName, lName, age, averageGrade){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.averageGrade = averageGrade;
}

let students = [new Student("Bob", "Johnson", 17, 2), new Student("Petko", "Petkovski", 23, 5), new Student("Kate", "Markovska", 20, 4)];

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
console.log("=====HOF - forEach======");
students.forEach(logFullName); //for each member of students, the function logFullname will be called
students.forEach(s => console.log(`${s.firstName} ${s.age}`)); //s will be each member of students
students.forEach(function(student){console.log(`${student.firstName} ${student.averageGrade}`)});

//HOF - filter
console.log("=====HOF filter=====");
function checkAge(student){
    return student.age > 18;
}
let studentsAbove18 = students.filter(checkAge);
console.log("studentsAbove18:");
console.log(studentsAbove18);
console.log("students array after filter:");
console.log(students);
studentsAbove18.forEach(logFullName);
console.log("====chaining======");
students.filter(s => s.age < 18).forEach(logFullName);

//HOF map
console.log("=====HOF map======");
let studentsDescriptions = [];
for(let student of students){
    if(student.averageGrade > 3){
        studentsDescriptions.push(`${student.firstName} ${student.lastName} ${student.age}`);
    }
}
console.log("studentsDescriptions:");
console.log(studentsDescriptions);

console.log("studentDescs:");
let studentDescs = students.filter(s => s.averageGrade > 3)
.map(student => `${student.firstName} ${student.lastName} ${student.age}`);
studentDescs.forEach(sd => console.log(sd));

function returnStudentInfo(student){
    return `${student.firstName} ${student.age}`;
}
let studentInfos = students.map(returnStudentInfo);
console.log("studentInfos:");
console.log(studentInfos);
students.map(returnStudentInfo).forEach(si => console.log(si));

let studentInfosLengths = studentInfos.map(si => si.length);
console.log(studentInfosLengths);
studentInfos.map(si => si.length).forEach(sl => console.log(sl));

students.filter(s => s.age > 18).map(s => `${s.firstName} ${s.age} ${s.averageGrade}`)
.map(s => s.length).forEach(sl => console.log(sl));

//HOF reduce
console.log("===reduce=====");
//studentsWithAvgGradeAboveOne is an array of student objects
let studentsWithAvgGradeAboveOne = students.filter(s => s.averageGrade > 1);
//studentsAverageGrades is an array of numbers (average grades)
let studentsAverageGrades = studentsWithAvgGradeAboveOne.map(s => s.averageGrade);
console.log(studentsAverageGrades);

function aggregate(currentSum, grade){
    return currentSum += grade;
}
//reduce has two parameters:
// - a function
// - an initial value
//the function (first param), takes the initial value as her first param, and each array member as second param
console.log(`Result of reduce: ${studentsAverageGrades.reduce(aggregate,0)}`);

let sumOfAverageGrades = students.filter( s => s.averageGrade > 1)
.map(s => s.averageGrade).reduce(aggregate, 0);
console.log(`sumOfAverageGrades: ${sumOfAverageGrades}`);

//HOF - sort
console.log("======sort========");
//SORT CHANGES THE ORIGINAL ARRAY!!!!
students.sort((s1, s2) => s1.averageGrade - s2.averageGrade ); //asc
students.forEach(s => console.log(s));
students.sort((s1, s2) => s2.averageGrade - s1.averageGrade); //desc
console.log(students);

function copyArray(array){
    let copiedArray = [];
    // for(let item of array){
    //     copiedArray.push(item);
    // }
    array.forEach(item => copiedArray.push(item));
    return copiedArray;
}
//copy = students; PASS BY REFERENCE, each change in copy will also be change in students, IT IS THE SAME ARRAY!!
let copy = copyArray(students);
console.log("copy:");
console.log(copy);
copy.sort((c1, c2) => c1.averageGrade - c2.averageGrade); //asc
console.log("copy:");
console.log(copy);
console.log("students");
console.log(students);

