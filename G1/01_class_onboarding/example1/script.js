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
  this.firstName = firstName || "Unnamed"; // catches all falsy values
  this.lastName = lastName ? lastName : "Unnamed"; // if statement with simpler syntax
  this.birthYear = birthYear;
  this.academy = academy ?? "N/A"; // only for null and undefined
  this.grades = grades;
}

let ivo = new Student("Ivo", "Kostovski", 1989, "SEDC", [3, 4, 1]);
let marko = new Student("Marko", "", 2000, "SEDC", [1, 3, 5]);
let darko = new Student("", "Darkovski", 2002, "SEDC", []);
let cher = new Student("Cher", "", 1960, "", [1, 2]);
let eminem = new Student("Eminem", "", 1970, null, [3, 4]);

console.log(ivo);
console.log(marko);
console.log(marko.lastName);
console.log(darko);
console.log(cher);
console.log(eminem);
