function Student(fname, lname, age, averageGrade){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.averageGrade = averageGrade;
}

let students = [
    new Student("Bob","Bobski", 17, 5),
    new Student("Petko","Petkoski", 22, 3),
    new Student("Marko","Markoski", 18, 7),
    new Student("Katerina","Bobski", 16, 4),
    new Student("Ivana","Ivanoska", 20, 9)
]

for(let student of students){
    console.log(`${student.firstName} ${student.lastName} ${student.age}`)
}

function fullName(student){
    console.log(`${student.firstName} ${student.lastName} ${student.age}`)
}

console.log("========= HOF foreach ======");
//HOF forEach
students.forEach(fullName);

students.forEach(student => console.log(`${student.firstName} ${student.lastName}`))

students.forEach(function(student){console.log(`${student.firstName} ${student.lastName}`)})

console.log("========= HOF filter ======");
//HOF filter
function checkAge(student){
    return student.age >= 18;
}

let studentAbove18 = students.filter(checkAge);
console.log("studentAbove18:");
console.log(studentAbove18);

studentAbove18.forEach(student =>  console.log(`${student.firstName} ${student.lastName} ${student.age}`))

console.log("======== filter and forEach ======");
students.filter(student => student.averageGrade > 5).forEach(student => console.log(`${student.firstName} ${student.lastName} ${student.averageGrade}`))

console.log("========= HOF map ======");
//HOF map

function returnFullName(student){
    return `${student.firstName} ${student.lastName}`
}

let studentInfo = students.map(returnFullName);
console.log("studentInfo:");
console.log(studentInfo);

console.log("==== filter, map, forEach ======");

students.filter(student => student.averageGrade >= 5)
        .map(student => `${student.firstName} ${student.lastName} ${student.averageGrade}`)
        .forEach(student => console.log(student));

let array = ['Bob Bobski 5', 'Bob Bobski 5', 'Bob Bobski 5']
for(let student of array) {
    console.log(student);
}

console.log("========= HOF reduce ======");
//HOF reduce

function reduceGradeFunction(sum, grade){
    return sum += grade;
}

console.log(students.map(grade=> grade.averageGrade).reduce(reduceGradeFunction, 0));

console.log(students.map(grade=> grade.averageGrade)
                    .reduce((x, y)=> x+y, 20));

let studentOfGrade = students.filter(x=> x.averageGrade > 5)
                            .map(x=> x.averageGrade)
                            .reduce((x,y)=> x+y, 0);
console.log(`studentOfGrade: ${studentOfGrade}`);

let arrayOfNumber = [5,1,6,7,8,9];

console.log(`arrayOfNumber: ${arrayOfNumber.reduce((x,y) => x+y, 0)}`);


console.log("========= HOF sort ======");
//HOF sort
let copyArray = [...students];
console.log(copyArray);
copyArray.sort((x,y)=>x.averageGrade - y.averageGrade); //ASC
console.log(copyArray);
console.log(students);

copyArray.sort((x,y)=> y.averageGrade - x.averageGrade); //DESC
console.log(copyArray);
console.log(students);


