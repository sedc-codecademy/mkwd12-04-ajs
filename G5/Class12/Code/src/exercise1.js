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
