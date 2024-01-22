console.log("Anonymous functions");

//defintion 
//the function is in a variable
let greet = function(name){
    console.log`Hello ${name}`;
}

//the execution of a function
greet("Tijana");

let mixedArray = [2, true, "Hello", function(num){ return num + 5}]

let result = mixedArray[3](6);
console.log(result);


console.log("Arrow functions")
// paramaters part => body of the function

//function with no parameters
let print = () => console.log("Hello"); //when we don't have parameters we use empty brackets ()
//same as
//let print = function(){
//     console.log("Hello";)
// }
print();

//function with one parameter and one line code
let sumWith10 = num => num + 10;  //when we have only ona parameter, we don't need to use ()
let resultWith10 = sumWith10(5);
console.log(resultWith10); //it will print 15

//function with multiple parameters and one line code
 let sum = (num1, num2) => num1 + num2; //when we have multiple parameters we use ()
  console.log(sum(10, 6));

  //function with multiple parameters and multiple lines of code
  let printAndGetFullName = (firstName, lastName) => {  //when we have multiple lines of code we use {} for the body of the function
        console.log(`${firstName} ${lastName}`);
        return `${firstName} ${lastName}`;
  }
let fullName = printAndGetFullName("Petko", "Petkovski");
console.log(`Full name from variable ${fullName}`);


console.log("Self invoked functions"); //functions that are executed immediately after they are defined
//we need to put the anonymous function in small brackets ()

(function () {
    console.log("Hello");
    console.log("I will be executed immediately");
})();


//if we have parameters and use arrow function

(student => console.log(`Hello ${student}`))("Petko");