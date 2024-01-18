console.log("===Anonymous functions=====");

//EXAMPLE 1

//definition
let greet = function(name){
    console.log(`Hello ${name}`);
}

//execution
greet("Ana");

//EXAMPLE 2
let mixedArray = [2, true, "Hello", function(num){return num + 5;}]
//mixedArray[3] -> function, so we call it with argument 4
let result = mixedArray[3](4);
console.log(result);

//EXAMPLE 3
function printResult(sumFunction){
    let sum = sumFunction(2, 3);
    console.log(sum);
}

printResult(function(num1, num2){return num1 + num2});

console.log("====Arrow functions=====");
//function with no parameters
let print = () => console.log("Hello");
//same as
// let print = function(){
//     console.log("Hello");
// }
print();

//function with one parameter and one line code
// let sumWith10 = function(num){
//     return num + 10;
// }
let sumWith10 = num => num + 10;
//num -> 5, sumWith10result will get the value of num + 10
let sumWith10result = sumWith10(5);
console.log(sumWith10result);

//function with multiple params and one line of code
let sum = (num1, num2) => num1 + num2;
//let sum = (num1, num2) => { return num1 + num2};
//num1 -> 5, num2 -> 3
let sumResult = sum(5,3);
console.log(sumResult);


//function with multiple params and multiple lines of code
let printAndGetFullName = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
    return `${firstName} ${lastName}`;
}
let fullName = printAndGetFullName("Student", "Student");

console.log("===self invoked functions=====");
(function(){
    console.log("Hello");
    console.log("I will be executed immediatelly");
})();

(student => console.log(`Hello ${student}`))("Kate");