const individualValue = "individual";
const groupValue = "group";

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

function Student(firstName, lastName, age, studentId, academyName){
    //inheritance
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    //specific properties of each student
    this.studentId = studentId;
    this.academyName = academyName;
    this.study = function(){
        console.log(`The student ${this.firstName} ${this.lastName} studies on ${this.academyName} `);
        console.log(`The student ${this.getFullName()} studies on ${this.academyName}`);
    }
}

Person.prototype.checkAcademy = function(student){
    console.log('The academy is '+ student.academyName);
}

let person = new Person("Tanja", "Stojanovska", 27);
person.checkAcademy(new Student("Ana", "Anovska", 30, 1, "Web Programming"));

function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, studentId, "design"));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function(){
        console.log(`The student ${this.firstName} ${this.lastName} attended the Adobe exam`);
    }
}

let designStudent = new DesignStudent("Marija", "Anovska", 30, 1, true);
designStudent.attendAdobeExam();

function CodeStudent(firstName, lastName, age, studentId){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, studentId, "code"));
    //default values
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = function(type){
        if(type == individualValue){
            console.log(`The student ${this.getFullName()} has individual project`);
            this.hasIndividualProject = true;
        }
        else if(type == groupValue){
            console.log(`The student ${this.getFullName()} has group project`);
            this.hasGroupProject = true;
        }
        else{
            console.log("Invalid type!!!");
        }
    }
}

let codeStudent = new CodeStudent("Bojan", "Bojanovski", 22, 2, "QA");
codeStudent.doProject(individualValue);
console.log(codeStudent);

function NetworkStudent(firstName, lastName, age, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, studentId, "network"));
    this.academyPart = academyPart;
    this.attendCiscoExam = function(){
        console.log(`The student ${this.getFullName()} attended the Cisco exam`);
    }
}

let networkStudent = new NetworkStudent("Marko", "Stefanovski", 25, 5, 1);
console.log(networkStudent.academyName);