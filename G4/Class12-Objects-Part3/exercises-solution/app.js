console.log("works");

//Exercise #1

const movieContainerEl = document.querySelector(".movie-container");

const movie = {
  title: "Saving Private Ryan",
  director: "Steven Spielberg",
  country: "USA",
  year: 1999,
  productionInfo: {
    budget: "70 million",
    producer: "Ian Bryce",
  },
};

const renderMovie = ({
  title,
  director,
  country,
  year,
  productionInfo: { budget, producer },
}) => {
  movieContainerEl.innerHTML = `
        <p>Title: ${title}</p>
        <p>Director: ${director}</p>
        <p>Country: ${country}</p>
        <p>Year: ${year}</p>
        <p>Budget: ${budget}</p>
        <p>Producer: ${producer}</p>
    `;
};

renderMovie(movie);

//Exercise #2

const fruits = ["apples", "oranges", "lemons"];

const vegetables = ["broccoli", "carrots", "cabbage"];

const nuts = ["peanuts", "almonds", "walnuts", "hazelnuts"];

const plants = [...fruits, ...vegetables, ...nuts];

console.log(plants);

//Exercise #3

// Create a Person class that has:

// - firstName
// - lastName
// - age
// - getFullName - method that returns the full name

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Create a Student class that inherits from Person and has:

// - academyName
// - studentId
// - study - method that writes in the console: The student firstName is studying in the academyName

class Student extends Person {
  constructor(firstName, lastName, age, academyName, studentId) {
    super(firstName, lastName, age);

    this.academyName = academyName;
    this.studentId = studentId;
  }

  study() {
    console.log(`The student ${this.firstName} is studying in the ${this.academyName} academy
    `);
  }
}

const studentOne = new Student("John", "Doe", 31, "Code", 1);

console.log(studentOne);

console.log(studentOne.getFullName());

studentOne.study();

//  DesignStudent

// - isStudentOfTheMonth - boolean
// - attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

class DesignStudent extends Student {
  constructor(firstName, lastName, age, studentId, isStudentOfTheMonth) {
    super(firstName, lastName, age, "design", studentId);

    this.isStudentOfTheMonth = isStudentOfTheMonth;
  }

  attendAdobeExam() {
    console.log(`The student ${this.firstName} is doing an adobe exam!`);
  }
}

const rade = new DesignStudent("Rade", "Rogozharov", 34, 4, true);

rade.study();

rade.attendAdobeExam();

//  CodeStudent

// - hasIndividualProject - boolean (not settable, default is false)
// - hasGroupProject - boolean (not se ttable, default  is false)
// - doProjct(type) - method that accepts string. If the string is `individual` or `group` it  shou ld write  that the person is working on the project of that type and set the value to `true` on the property of the project

class CodeStudent extends Student {
  hasIndividualProject = false;
  hasGroupProject = false;

  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age, "code", studentId);
  }

  doProject(type) {
    if (type === "individual") {
      console.log("The student is working on an individual project");
      this.hasIndividualProject = true;
    }

    if (type === "group") {
      console.log(`The student is working on a group project`);
      this.hasGroupProject = true;
    }
  }
}

const miki = new CodeStudent("Miki", "Arsov", 23, 5);

miki.study();

miki.doProject("individual");

miki.doProject("whatever");

//  NetworkStudent

// - academyPart - number
// - attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

class NetworkStudent extends Student {
  constructor(firstName, lastName, age, studentId, academyPart) {
    super(firstName, lastName, age, "networking", studentId);

    this.academyPart = academyPart;
  }

  attendCiscoExam() {
    console.log(`The student ${this.firstName} is doing a cisco exam!`);
  }
}

const martin = new NetworkStudent("Martin", "Arsov", 34, 10, 2);

martin.attendCiscoExam();
