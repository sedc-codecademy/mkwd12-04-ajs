class Academy {
    constructor(name, students, subjects, start, end) {
        this.name = name;
        this.students = students === undefined ? [] : students;
        this.subjects = subjects === undefined ? [] : subjects;
        this.start = new Date(start);
        this.end = new Date(end);
        this.numberOfClasses = this.subjects.length * 10;
        this.printStudents = () =>{
            
            console.log(this)
            this.students.forEach(student => {
                console.log(student);
            });
        };
        this.printSubjects = function () {
            this.subjects.forEach(subject => {
                console.log(subject);
            });
        };
    }
}

class Subject {
    constructor(title, isElective, academy, students) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective;
        this.academy = academy;
        this.students = students;
        this.overrideClasses = function (classes) {
            this.numberOfClasses = classes <= 3
                ? console.log("The classes can't be smaller than 3") : classes;
        };
    }
}

class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.completedSubjects = [];
        this.academy = null;
        this.currentSubject = null;
        this.startAcademy = function (someAcademy) {
            this.academy = someAcademy;
            someAcademy.students.push(this);
        };
        this.startSubject = function (someSubject) {
            if (this.academy === null) {
                console.log("You can't enrol on a subject without academy!");
            } else if (this.currentSubject !== null) {
                this.completedSubjects.push(this.currentSubject);
                this.currentSubject = someSubject;
                someSubject.students.push(this);
            } else {
                this.currentSubject = someSubject;
                someSubject.students.push(this);
            }
        };
    }
}

let javascript = new Subject("javascript", false, undefined, []);
let html = new Subject("html", false, undefined, []);
let cSharp = new Subject("C#", false, undefined, []);
let sedc = new Academy("SEDC", [], [javascript, html, cSharp], "12/10/2019","12/10/2020");
let bob = new Student("Bob", "Bobsky", 35);
let jill = new Student("Jill", "Riely", 29);
console.log("=== classes ===")
console.log(sedc);
console.log(javascript);
console.log(html);
console.log(cSharp);
console.log(bob);
console.log(jill);
console.log("==== method ====")
console.log("==== printStudents ====")
sedc.printStudents();
console.log("==== printSubjects ====")
sedc.printSubjects();
cSharp.overrideClasses(8);
sedc.printSubjects();
cSharp.overrideClasses(4);
sedc.printSubjects();
bob.startAcademy(sedc);
bob.startSubject(html);
sedc.printStudents();
bob.startSubject(javascript);
sedc.printStudents();
bob.startSubject(cSharp);
sedc.printStudents();

console.log(sedc);

console.log("==========")
sedc.printStudents();
