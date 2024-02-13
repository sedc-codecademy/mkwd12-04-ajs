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

let student1 = new Student("Ana", "Anovska", 30, 1, "Web Programming");
let student2 = new Student("Bojan", "Bojanovski", 22, 2, "QA");

student1.study();
student2.study();
console.log(student1.getFullName());

Person.prototype.printAcademy = function(student){
    console.log(`${student.firstName} ${student.lastName} studies at ${student.academyName}`);
}

let person = new Person("Marko", "Markovski", 23);
person.printAcademy(student1);


function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth){
    //inheritance
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, studentId, "Design Academy"));
    //specific property for DesignStudent
    this.isStudentOfTheMonth = isStudentOfTheMonth;

    this.attendAdobeExam = function(){
        console.log(`${this.firstName} ${this.lastName} is attending Adobe exam.`);
    }
}

let designStudent = new DesignStudent("Jake", "Peterson", 39, 12, true);
designStudent.attendAdobeExam();



