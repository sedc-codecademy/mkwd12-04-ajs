let dog = {
    dogName: "Barnie",
    dogColor: "brown",
    dogAge: 3
}

console.log(dog.dogAge);

//destructuring
const {dogName, dogColor, dogAge} = dog; 
console.log("after destructuring:");
console.log(dogAge);

let student = {
    firstName : "John",
    age: 20,
    grades: {
        JavaScript: 5,
        CSharp: 3
    }
}

console.log(student.firstName);
console.log(student.grades.JavaScript);

const {firstName, grades:{JavaScript, CSharp}} = student;
console.log(JavaScript);