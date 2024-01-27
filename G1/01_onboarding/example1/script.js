//   if (lastName) {
//     this.lastName = lastName;
//   } else {
//     this.lastName = "Unnamed";
//   }

// Convert to truthy or falsy value => !!

// truthy
// "test"
// true;
// 12;
// ["nesto"];
// { name: "name" }
// [];
// { }

// falsy
// false;
// "";
// undefined;
// null;
// 0;
// NaN;

// Nullish coalescing operator => ??

function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName || "Unnamed"; // OR - catches all falsy values
  this.lastName = lastName ? lastName : "Unnamed"; // ternary - if statement with simpler syntax
  this.birthYear = birthYear;
  this.academy = academy ?? "N/A"; // NCO - only for null and undefined
  this.grades = grades;
  this.getAge = function () {
    if (!this.birthYear) {
      return "No birth year specified";
    } else {
      return new Date().getFullYear() - this.birthYear;
    }
    // return !this.birthYear
    //   ? "No birth year specified"
    //   : new Date().getFullYear() - this.birthYear;
  };
  this.getInfo = function () {
    return `The student ${this.firstName} ${this.lastName} from the ${this.academy} academy`;
  };
  this.getAvgGrade = function () {
    if (!Array.isArray(this.grades) || this.grades.length === 0) {
      return 0;
    }

    let sum = 0;

    for (let grade of this.grades) {
      sum += grade;
    }

    return sum / this.grades.length;
  };
}

let ivo = new Student("Ivo", "Kostovski", 1989, "SEDC", [3, 4, 1]);
let marko = new Student("Marko", "", 2000, "SEDC", [1, 3, 5]);
let darko = new Student("", "Darkovski", undefined, "SEDC", []);
let cher = new Student("Cher", "", 1960, "", [1, 2]);
let eminem = new Student("Eminem", "", 1970, null, [3, 4]);
let ilija = new Student("Ilija", "S", 1990, "SEDC");

console.log(ivo);
console.log(marko);
console.log(marko.lastName);
console.log(darko);
console.log(cher);
console.log(eminem);

console.log("Marko age", marko.getAge());
console.log("Darko age", darko.getAge());

console.log("Darko info", darko.getInfo());
