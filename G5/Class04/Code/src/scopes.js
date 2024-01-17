//GLOBAL SCOPE
let studentName = "Stefan";

function printFullName(firstName, lastName){
    //FUNCTION SCOPE of printFullName function
    //this is possible, studentName is part of the global scope
    console.log(`${studentName} is one of the students`);

    //result belongs to the function scope, because it is declared between the {} of printFullName
    let result = `${firstName} ${lastName}`;
    console.log(result);

    //firstName and lastName also have function Scope

    if(result.length > 5){
        //BLOCK scope
        let message = `${result} contains more than 5 characters`;
        console.log(message);
    }
    //console.log(message); ERROR //message is part of block between line 15 and 19
}

printFullName("Test", "Student");
//console.log(result); //ERROR, result is not part of the global scope
//console.log(firstName); //ERROR, firstName is param of printFullName, part of its function scope


if(5 > 3){
    let dummyMessage = "5 is greater than 3";
}
//console.log(dummyMessage); //ERROR block scope!!!!

//global scope
let sum = 10;
function exampleOverride(){
    //function
    let sum = 15;
    console.log(sum); //15, finds sum in the function scope
}

function exampleOverride2(){
    //function
    console.log(sum); //10 didn't find sum in the function scope, look into the global scope
}

exampleOverride();
exampleOverride2();