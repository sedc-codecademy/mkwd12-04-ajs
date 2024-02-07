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


console.log("====Array destructuring====");
let rgb = [254, 5, 200, 10];
let [r, g, b] = rgb;

console.log(`r: ${r}`);
console.log(`g: ${g}`);
console.log(`b: ${b}`);

console.log("====Spread operator====")

let numbers = [4, 7, 8];

function printNumbers(num1, num2, num3){
    console.log(`${num1} ${num2} ${num3}`);
}
//printNumbers(numbers[0], numbers[1], numbers[2]);

printNumbers(...numbers);