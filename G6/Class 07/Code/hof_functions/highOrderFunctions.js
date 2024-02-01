function Student(firstName, lastName, age, averageGrade){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.averageGrade = averageGrade;
}

let students = [new Student("Bob", "Johnson", 17, 2), new Student("Petko", "Petkovski", 23, 5), new Student("Nikola", "Nikolovski", 24, 4)];

for(let student of students){
    console.log(`${student.firstName} ${student.lastName}`);
}

function logFullName(student){
    console.log(`${student.firstName} ${student.lastName}`);
}

//Hof - forEach

students.forEach(logFullName); //for each member of students, the function logFullName is called

// students.forEach(logFullName) is same as
for(let student of students){
    logFullName(student);
}

//arrow function
//students is the array, for each student of the array, the arrow function is called
//s is the parameter of the function (each student for whom the function is called)
students.forEach(s => console.log(`${s.firstName} ${s.lastName}`));

//same as calling the function logFullName
//anonymous function
students.forEach(function(student){console.log(`${student.firstName} ${student.lastName}`)});

//HOF - filter
function checkAge(student){
    return student.age > 18;  //if the condition is true, it will return true, else it will return false
}

let studentsAbove18 = students.filter(checkAge);

//arrow function
//chaining
//it will filter the students array and return another array with students above age of 18 
//and then it will iterate trough the new filtered array and log the names of the students
students.filter(s => s.age > 18).forEach(logFullName);

//anonymous function
let studentsAbove18Anonymous = students.filter(
    function(student){return student.age > 18}
);

//HOF - map
let studentDescriptions = [];
for(let student of students){
    if(student.averageGrade > 2){
        studentDescriptions.push(`${student.firstName} ${student.lastName} ${student.age}`);
    }
}

console.log(studentDescriptions);

//with map, we will have a new array returned with a value for each element
//the number of elements in allStudentsDesc will be the same as students, because we return a value for each student 
let allStudentsDesc = students.map(s => `${s.firstName} ${s.lastName} ${s.age}`)
console.log(allStudentsDesc);

let studentAverageAbove3 = students.filter(s => s.averageGrade > 2)
.map(s => `${s.firstName} ${s.lastName} ${s.age} with average grade ${s.averageGrade}`);
console.log(studentAverageAbove3);

//with filter we will have a new array with students with age above 18 studentsAbove18 = [StudentPetko, StudentNikola]
//with map we go through studentsAbove18 and we get a new array with elements for each memeber of studentsAbove18  stud = ["Petko Petkovski 23", "Nikola Nikolovski 24"]
//with sd.length we go through the stud array and we will return the length of each element (each element is a string) studentD = [18, 20]
//with forEach we will go through studentsD and we will print each memeber of studentsD (18, 20)
students.filter(s => s.age > 18).map(st => `${st.firstName} ${st.lastName} ${st.age}`) 
.map(sd => sd.length).forEach(sl => console.log(sl));

let sl = students.filter(s => s.age > 18).map(st => `${st.firstName} ${st.lastName} ${st.age}`) 
.map(sd => sd.length);

console.log(sl);

//HOF - reduce

function addition(sum, grade){
    return sum += grade;
}

function multiply(mul, grade){
    return mul *= grade;
}


let studentsWithGradeAbove2 = students.filter(s => s.averageGrade > 2);
let gradesOfStudentsWithAverageAbove2 = studentsWithGradeAbove2.map(s => s.averageGrade);

//reduce has two parameters
//-a function
//-an initial value
//the function (first param) takes the inital value as her first param, 
//and each array member as her second param
//5,4
console.log(gradesOfStudentsWithAverageAbove2.reduce(addition, 0));

console.log(gradesOfStudentsWithAverageAbove2.reduce(multiply, 1));


//HOF - sort
//SORT CHANGES THE ORIGINAL ARRAY



//2,5,4 - asc => 2,4,5
console.log(students);

debugger
// <0 a.averageGrade (the first element in a-b) should be in the position with lower index
// =0 the elements have the same value, nothing changes
//>0 b.averageGrade (the second element in a-b) should be in the position with lower index
students.sort((a, b) => a.averageGrade - b.averageGrade); //asc
console.log(students);

// debugger
students.sort((a, b) => b.averageGrade - a.averageGrade); //desc
console.log(students);

//we need to copy our array - but not by reference
//let stud = students => by reference

function copyArray(array){
    let copiedArray = [];
    // for(let item of array){
    //     copiedArray.push(item)
    // }
    array.forEach(item => copiedArray.push(item));
    return copiedArray;
}

//let copiedArray = students.map(s => s);

let copy = copyArray(students);
console.log(copy); // Bob, Petko, Nikola
debugger
copy.sort((a, b) => a.averageGrade - b.averageGrade);
console.log(copy); //Bob, Nikola,Petko
console.log(students);  // Bob, Petko, Nikola