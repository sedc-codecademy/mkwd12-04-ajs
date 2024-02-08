function Academy(name, students, subjects, start, end){
    this.name = !name ? "Unnamed" : name;
    this.students = !students ? [] : students;
    this.subjects = !subjects ? [] : subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10; //with this.subjects we are working with the subjects property of our object, not the param that was sent
    this.printStudents = function(){
        this.students.forEach(student => console.log(student));
    };
    this.printSubjects = function(){
        this.subjects.forEach(subject => console.log(subject));
    }
}

function Subject(title, isElective, academy, students){
    this.title = !title ? "Untitled" : title;
    this.numberOfClasses = 10; //default value
    this.isElective = isElective;
    this.academy = academy;
    this.students = !students ? [] : students;
    this.overrideClasses = function(numOfClasses){
        this.numberOfClasses = numOfClasses < 3 ? this.numberOfClasses : numOfClasses;
    };
}

let advancedJS = new Subject("Advanced JS", false, "Quinshift Academy (SEDC)", []);
advancedJS.overrideClasses(15);
console.log(advancedJS.numberOfClasses); //15
advancedJS.overrideClasses(1);
console.log(advancedJS.numberOfClasses); //15

function Student(firstName, lastName, age){
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academy){
        this.academy = academy;
        this.academy.students.push(this); //the student obj that we are working with
    };
    this.startSubject = function(subject){
        if(this.academy == null){
            console.log("The student must be assigned to an academy");
            return;
        }
        if(this.academy.subjects.filter(x => x.title == subject.title).length == 0){
            console.log(`The subject is not a part of ${this.academy.name}`);
            return;
        }
        if(this.currentSubject != null){
            this.completedSubjects.push(this.currentSubject);
        }
       
        this.currentSubject = subject;
        this.currentSubject.students.push(this);
    }
}
let cSharp = new Subject("C#", false, "Quinshift Academy (SEDC)", []);
let academy = new Academy("SEDC", [], [advancedJS, cSharp], new Date(), new Date("10/1/2024"));
var student = new Student("Tijana", "Stojanovska", 24);
console.log(student);
student.startAcademy(academy);
console.log(student);
console.log(academy);
student.startSubject(advancedJS);
// 15 classes go by and advancedJs is completed
//it's time to move to the next subject
student.startSubject(cSharp);