
//here the function is only defined, it will not be executed
//this function has two parameters - firstName and lastName
function getFullName(firstName, lastName){
    console.log(firstName);
    //..........
    return `${firstName} ${lastName}`
}

 //here the function is called and will be executed
 //the function has two arguments = "Tijana", "Stojanovska"
getFullName("Tijana", "Stojanovska");

function checkIfNumberIsOdd(number){
    if(number %2 != 0){
        return true; //the execution of the function will end here
        console.log("This is after return"); //this will not be printed, because the functions ends with the return
    }else{
        return false; //the execution of the function will end here
    }

    console.log("After return"); //this will not be printed, because the functions ends with the return
}

if(checkIfNumberIsOdd(7)){  //the function is called and executed in an if clause
    console.log("The number is odd")
}else{
    console.log("The number is even")
}

//the function is called in a variable
let resultFullName = getFullName("Tijana", "Stojanovska");
console.log(resultFullName);

function printPersonDetails(fName, lName, age, email){
    let fullName = getFullName("Tijana", "Stojanovska"); //we are calling and executing a function inside another function
    console.log(`${fullName} has ${age} years and his/her email is ${email}`);
}

printPersonDetails("Tijana", "Stojanovska", 24, "stojanovska_tijana@outlook.com")