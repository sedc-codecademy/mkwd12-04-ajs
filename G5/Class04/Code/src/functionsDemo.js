//here, the function is only defined, it will not be executed
//this function has two parameters
function printFullName(firstName, lastName){
    console.log(`${firstName} ${lastName}`);
}


//here the function will be executed
printFullName("Tanja", "Stojanovska");
printFullName("Ivan", "Ivanov");

function getFullName(firstName, lastName){
    console.log("Before return");
    let fullName = `${firstName} ${lastName}`

    //when we have return, the function stops execution
    return fullName;

    //this code will not be executed, because there is return before it
    console.log("After return");
}

//in resultFullname we will save the value of fullName that was returned
let resultFullname = getFullName("Tanja", "Stojanovska");
console.log(resultFullname);

//this function needs to print fullname
//need to print age and address
function printPersonDetails(fName, lName, age, address){

    //function printPersonDetails calls printFullName to print fullName
    //it passes fName and lName as arguments
    printFullName(fName, lName);

    let fullName = getFullName(fName, lName);
    console.log(`${fullName} has ${age} years and lives on ${address}`);
}

printPersonDetails("Marko", "Markovski", 25, "Adresa 1");




