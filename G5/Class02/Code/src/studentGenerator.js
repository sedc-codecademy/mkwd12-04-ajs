function Student(firstName, lastName, age, email){
    this.firstName = !firstName? "unnamed" : firstName;
    this.lastName = !lastName? "No surname" : lastName;
    this.age = age;
    this.email = !email? "No email" : email;

    this.getInfo = function(){
        return `This is student: ${this.firstName} ${this.lastName} ${this.age}`;
    }
}

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let btnSave = document.getElementById("btnSave");

//1. when the button is clicked, we need to read the inputs
//2. create Student object from the inputs' values
let database = [];
btnSave.addEventListener("click", function(event){
    event.preventDefault();
   
    //First name and email are required
    let firstName = firstNameInput.value;
    if(!firstName){
        console.log("You must enter firstName");
        return; //the function won't continue
    }
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let email = emailInput.value;
    if(!email){
        console.log("You must enter email");
        return; //the function won't continue
    }

    let student = new Student(firstName, lastName, age, email);

    database.push(student);
    for(let s of database){
        console.log(s);
    }
})