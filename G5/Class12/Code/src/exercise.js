function Academy(name, students, subjects, startDate, endDate, locations){
    this.name = !name ? "Unnamed" : name;
    this.subjects = !subjects ? [] : subjects;
    this.locations = locations;
    this.students = !students? [] : students;
    this.startDate = startDate;
    this.endDate = endDate;
    this.numberOfClasses = this.subjects.length * 10;

    this.printStudents= function(){
        this.students.forEach(s => console.log(s));
    }
    this.printSubjects = function(){
        this.subjects.forEach(s => console.log(s));
    }
}

function Subject(title, isElective, academy, students){
    this.title = !title ? "Unnamed" : title;
    this.isElective = isElective;
    this.numberOfClasses = 10;
    this.academy = !academy ? 
            new Academy("Programming", [], [], new Date(), new Date()) : academy;
    this.students = !students ? [] : students;

    this.overrideClasses = function(numberOfClasses){
        if(numberOfClasses >= 3){
            this.numberOfClasses = numberOfClasses;
        }
    }
}

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.startAcademy = function(academy){
        this.academy = academy;
        console.log("this.academy:")
        console.log(this.academy);
        this.academy.students.push(this);
    }
    this.startSubject = function(subject){
        if(!this.academy){
            console.log("The student hasn't started an academy");
            return;
        }

        if(this.academy.subjects.filter(s => s.title === subject.title).length == 0){
            console.log("The subject is not part of the student's academy");
            return;
        }

        if(this.currentSubject != null){
            this.completedSubjects.push(this.currentSubject);
        }

        this.currentSubject = subject;
        this.currentSubject.students.push(this);
    }
}

let firstStudent = new Student("Petko", "Markovski", 25);


let academy = 
new Academy("Qinshift Programming Academy", 
[firstStudent], [new Subject("AJS", false, null, []), new Subject("Basic CSharp", false, null, [])], new Date("11/1/2024"), new Date("11/1/2025"), ["Skopje"]);

console.log(academy.locations); // ["Skopje"]
academy.locations.push("Prilep");
console.log(academy.locations); //["Skopje", "Prilep"]


console.log("Academy students:")
console.log(academy.students);
console.log("Academy subjects:")
console.log(academy.subjects);


let subject = new Subject("AJS", false, academy, []);
let student = new Student("Tanja", "Stojanovska", 29);

student.startAcademy(academy); //we pass academy by reference 

let newStudent = new Student("Marko", "MArkovski", 29);

newStudent.startAcademy(academy); //we pass academy by reference 

student.startSubject(subject);

let basicCsharp = new Subject("Basic CSharp", false, academy, []);
student.startSubject(basicCsharp);

//academy, student.academy, newStudent,.academy keep the same reference that points to  this object:
//new Academy("Qinshift Programming Academy", 
//[firstStudent], [new Subject("AJS", false, null, [])], new Date("11/1/2024"), new Date("11/1/2025"), ["Skopje"])

