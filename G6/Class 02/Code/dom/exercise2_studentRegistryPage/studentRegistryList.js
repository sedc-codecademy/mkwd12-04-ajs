// * Create an HTML page with student registry form with
//   * First Name
//   * Last Name
//   * Age
//   * Email
// * Create a student generator function
// * When the form is submitted, the inputs should be compiled into a new object from the generator function Student
// * Validate that input was entered in all fields
// * This student should be added to a list called "database"
// * After adding a student the database should be printed in the console
// * The input fields should be cleared

let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let submitBtn = document.getElementById("submitBtn");

function Student(firstName, lastName, age, email) {
    this.firstName = !firstName ? "unnamed" : firstName;
    this.lastName = !lastName ? "unnamed" : lastName;
    this.age = age;
    this.email = !email ? "no email" : email;
    this.getInfo = function () {
        return `This is student ${this.firstName} ${this.lastName} aged ${this.age}, with email ${this.email}!`
    }
}

let database = [];

submitBtn.addEventListener("click", function(){
    if(!firstNameInput.value || !lastNameInput.value || !ageInput.value || !emailInput.value){
        console.log("There is some missing information about the student!");
        return;
    }
    
    let student = new Student(firstNameInput.value, lastNameInput.value, ageInput.value, emailInput.value)
    database.push(student)
    console.log(student.getInfo());
    //console.log(database);

    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
})

