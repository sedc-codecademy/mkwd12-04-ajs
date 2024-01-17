// Function declaration
function getStudentName (firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Function execution
getStudentName('John', 'Doe');
let firstStudent = getStudentName('John', 'Doe');
console.log(firstStudent);

// Calling a function inside another function
function getStudentDetails (firstName, lastName, academy = 'DevOps Academy') {
    // return `The student ${firstName} ${lastName} is studying ${academy} at Qinshift`;
    return `The student ${getStudentName(firstName, lastName)} is studying ${academy} at Qinshift.`
}

let studentDetails = getStudentDetails('Jill', 'Wayne', 'Academyfor Programming');
console.log(studentDetails);

// Bad Example
function getStudentDetailsBad(firstStudent, lastName, academy) {
    let fullName;
    function getStudentFullName(firstName, lastName) {
        fullName = `${firstName} ${lastName}`
    };
    return `The student ${fullName} is studying ${academy} at Qinshift`;
};

let undefinedStudentInfo = getStudentDetailsBad('Ivan', 'Ivanovski', 'QA Academy');
console.log(undefinedStudentInfo);

// Better way but still bad :)
function getStudentDetailsBetter (firstName, lastName, academy) {
    function getStudentFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
        console.log('This will not execute')
    };
    return `The student ${getStudentFullName(firstName, lastName)} is studying ${academy} at Qinshift`;
};
let betterStudentInfo = getStudentDetailsBetter('Ivan', 'Ivanovski', 'QA Academy');
console.log(betterStudentInfo);