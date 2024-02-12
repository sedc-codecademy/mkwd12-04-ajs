console.log("=================== Exercises ===================")
// 1. Read the requirment
// 2. Brake the requirement into smaller pieces
// 3. Implement them separately

class Academy {
    constructor(name, students, subjects, start, end) {
        this.name = name;
        // this.students = students === undefined ? [] : students;
        this.students = !students ? [] : students;
        this.subjects = !subjects ? [] : subjects;
        this.start = new Date(start);
        this.end = new Date(end);
        this.numberOfClasses = this.subjects.length * 10;
    }

    printStudents() {
        if (!this.students.length) {
            console.log("Still no students assigned.");
            return;
        }
        this.students.forEach(student => {
            console.log(`${student.firstName} ${student.lastName}`)
        });
    }

    printSubjects() {
        if (!this.subjects.length) {
            console.log("Still no subjects assigned.");
            return;
        }
        this.subjects.forEach(subject => {
            console.log(subject.title)
        });
    }
}

class Subject {
    constructor(title, isElective, academy, students) {
        this.title = title;
        this.numberOfClasses = 10;
        this.isElective = isElective;
        this.academy = academy;
        this.students = students;
    }

    overrideClasses(classesNumber) {
        this.numberOfClasses = classesNumber;
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
    }

    // 1. accepts Academy object that it sets to the Academy property of the student
    // 2. the student should also be added to the Academy property Students ( The academy that he is starting )
    startAcademy(academy) {
        if (!(academy instanceof Academy)) {
            throw new Error("Invalid value for academy!");
        }
        console.log(this);
        this.academy = academy;
        academy.students.push(this);
    }
}



let javascript = new Subject("javascript", false, null, []);
let html = new Subject("html", false, null, []);
let cSharp = new Subject("C#", false, null, []);

let codeAcademy = new Academy("Code", [], [javascript, cSharp], "12/10/2019", "12/10/2020");

let bob = new Student("Bob", "Bobsky", 35);
let jill = new Student("Jill", "Riely", 29);

bob.startAcademy(codeAcademy)