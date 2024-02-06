//OBJECT DESTRUCTING
let dog = {
    dogName: "Barnie",
    dogColor: "brown",
    dogAge: 3
};

console.log(dog.dogName); //Barnie
console.log(dog.dogColor); //brown

let {dogName, dogColor, dogAge} = dog;
console.log("after destructing");
console.log(dogColor);
console.log(dogAge);


let student = {
    firstName: "John",
    age: 35,
    grades: {
        JavaScript : 9,
        CSharp: 10
    }
}

function printStudent(stud){
    console.log(stud.firstName);
    console.log(stud.grades.JavaScript);
}

printStudent(student);

function displayInfo({firstName, grades: {JavaScript, CSharp}}){
    console.log(JavaScript);
    console.log(CSharp);
}

displayInfo(student);

//ARRAY DESTRUCTING
let rgb = [255, 0, 200];
let [r, g, b] = rgb;

console.log(r);
console.log(g);
console.log(b);

//SPREAD
let numbers = [2, 4, 5];

function sumNumbers(num1, num2, num3){
    console.log(`${num1} ${num2} ${num3}`);
    return num1 + num2 + num3;
}

let result = sumNumbers(...numbers);
//let result = sumNumbers(numbers[0], numbers[1], numbers[2])
