const inidvidualValue = "individual";
const groupValue = "group";

function Person(firstName, lastName, age){
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.age = age;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

function Student(firstName, lastName, age, academyName, studentId){
    //inheritance
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));

    //specific properties and methods of each student
    this.studentId = studentId;
    this.academyName = academyName;
    this.study = function(){
       // console.log(`The student ${this.firstName} studies on ${this.academyName}`);
     console.log(`The student ${this.getFullName()} studies on ${this.academyName}`);
    }
}
let student1 = new Student("Petko", "Petkovski", 25, "SEDC Web programming", 1);
let student2 = new Student("Nikola", "Nikolovski", 30, "SEDC QA", 2);

student1.study();
student2.study();

Person.prototype.checkAcademy = function(student){
    console.log(`The academy is ${student.academyName}`);
}

let person = new Person("Tijana", "Stojanovska", 24); //this person does not have to be a student
console.log(person);
console.log(person.__proto__);
person.checkAcademy(new Student("Marko", "Markovski", 20, "Web programming", 3));

let student = new Student("Marko", "Markovski", 20, "Web programming", 3);
console.log(student);
console.log(student.__proto__);
console.log(student.__proto__.__proto__);

function DesignStudent(firstName, lastName,age, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "design", studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function(){
        console.log(`The student ${this.getFullName()} attended Adobe exam`);
    }
}

let designStudent = new DesignStudent("Jana", "Guguloska", 25, 4, true);
designStudent.attendAdobeExam();
designStudent.checkAcademy(designStudent);

function CodeStudent(firstName, lastName, age, studentId){
Object.setPrototypeOf(this, new Student(firstName, lastName, age, "code", studentId));

//default values
this.hasIndividualProject = false;
this.hasGroupProject = false;

    this.doProject = function (type) {
        if (type == inidvidualValue) {
            console.log(`The student ${this.getFullName()} has individual project`);
            this.hasIndividualProject = true;
        }
        else if (type == groupValue) {
            console.log(`The student ${this.getFullName()} has group project`);
            this.hasGroupProject = true;
        } else {
            console.log("Invalid type!");
        }
    }
}

let codeStudent = new CodeStudent("Roze", "Dobrinova", 20, 5);
codeStudent.doProject(inidvidualValue);
console.log(codeStudent);

function NetworkStudent(firstName, lastName, age, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "network", studentId));
    this.academyPart = academyPart;
    this.attendCiscoExam = function(){
        console.log(`The student ${this.getFullName()} attended the Cisco exam`);
    }
}

let networkStudent = new NetworkStudent("Stefan", "Stefanovski", 27, 8, 1);
networkStudent.attendCiscoExam();

designStudent.checkAcademy(designStudent);
codeStudent.checkAcademy(codeStudent);
networkStudent.checkAcademy(networkStudent);