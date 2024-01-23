
let n = "Tijana"; //global scope

function getFullName(firstName, lastName){
    let name = firstName; //name is born here
    if(firstName.length > 3){
        let fullName = `${firstName} ${lastName}`  //fullName is born
        console.log(fullName); //block scope //fullName exists
        console.log(name); //name exists here, we are still inside the function {} (function scope)
        console.log(n); //n exists here
        n = `${firstName} ${lastName}`; //n gets a new value
    }//fullName dies with this scope {}
    console.log(n); //n exists here
    //console.log(fullName); // block scope, fullName does not exist after the if statement {}
}

console.log(n); //n exists here, Tijana

getFullName("Petko", "Petkovski")

console.log(n); //Petko Petkovski
