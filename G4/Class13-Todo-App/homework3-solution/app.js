console.log("works");

// Academy

// - name - string
// - students - array of Students
// - subjects - array of Subjects
// - start - Date when it starts
// - end - Date when it ends
// - numberOfClasses - number of subjects multipled by 10, not settable\*
// - printStudents - method that prints all students in console
// - printSubjects - method that prints all subjects in console

class Academy {
  constructor(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;
  }

  printSubjects() {
    this.subjects.forEach(subject => {
      console.log(subject);
    });
  }

  printStudents() {
    this.students.forEach(student => {
      console.log(student);
    });
  }
}

const programming = new Academy(
  "Acedemy for Programming",
  [],
  [],
  "15-01-2023",
  "20-04-2024"
);

//  Subject

// - title - string
// - numberOfClasses - default 10, not settable\*
// - isElective - boolean
// - academy - Academy object
// - students - array of Students
// - overrideClasses - method that accepts a number and rewrites the numberOfClasses property with that number. The number can't be smaller than 3.

class Subject {
  numberOfClasses = 10;

  constructor(title, isElective, academy, students) {
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
  }

  overrideClasses(newNumber) {
    if (newNumber <= 3) return;

    this.numberOfClasses = newNumber;
  }
}

const basicHtml = new Subject("Basic HTML", true, programming, []);
const basicJS = new Subject("Basic JS", false, programming, []);

const basicNet = new Subject("Basic C#", false, null, []);

// Student

// - firstName - string
// - lastName - string
// - age - number
// - completedSubjects - emptyArray as default, not settable\*
// - academy - null as default, not settable\*
// - currentSubject - null as default, not settable\*
// - startAcademy - method that accepts Academy object that it sets to the Academy property of the student
// - startSubject - method that accepts Subject object and adds it to the currentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

// Make the functions **startAcademy** and **startSubject** dynamic.

// - **startAcademy** - When the student calls **startAcademy**, the student should also be added to the Academy property students ( The academy that he is starting )

// - **startSubject** - When the student calls **startSubject** the student should also be added to the Subject property students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to completedSubjects and then add the new Subject

class Student {
  completedSubjects = [];
  academy = null;
  currentSubject = null;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  startAcademy(academy) {
    if (!(academy instanceof Academy)) return;

    this.academy = academy;
    this.academy.students.push(this);
  }

  startSubject(newSubject) {
    if (
      this.academy &&
      this.academy.subjects.find(subject => subject.title === newSubject.title)
    ) {
      if (this.currentSubject) {
        this.completedSubjects.push(this.currentSubject);
      }
      this.currentSubject = newSubject;
      this.currentSubject.students.push(this);

      console.log(
        `Subject ${this.currentSubject.title} was successfully added!`
      );
    } else {
      console.error("The subject doesn't exist in the academy!");
    }
  }
}

programming.subjects.push(basicHtml, basicJS);

const john = new Student("John", "Doe", 31);

console.log(programming);
console.log(john);

john.startAcademy(programming);
john.startSubject(basicHtml);
john.startSubject(basicJS);

programming.printStudents();

console.log(basicHtml);

console.log("John", john);
