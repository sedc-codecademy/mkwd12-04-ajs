console.log("works");

const original = {
  fullName: "Borche Borisovski",
  age: 31,
  job: "Web Developer",
  address: {
    city: "Skopje",
    zipCode: 1000,
  },
};

const shallowCopy = { ...original };

original.fullName = "John Doe";

// console.log(original);
// console.log(copy);

//Updating nested objects in shallow copies will also change the parent nested object
//This can be very tricky to catch and can cause some bugs that will take a lot of digging to debug

shallowCopy.address.city = "New York";

console.log("Original city", original.address.city);
console.log("Copy city", shallowCopy.address.city);

//We solve the above problem by creating a deep copy of the object

const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.zipCode = 9999;

console.log("Original Zip Code", original.address.zipCode);
console.log("Deep Copy Zip Code", deepCopy.address.zipCode);

//Objects in arrays

const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 31,
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 40,
  },
];

const shallowStudentsCopy = [...students];
const deepStudentsCopy = JSON.parse(JSON.stringify(students));

const deepMapCopy = students.map(student => ({ ...student }));

deepMapCopy.forEach(
  student => (student.firstName = student.firstName.toUpperCase())
);

students[0].age = 100;

console.log("Original", students);
console.log("Shallow Copy", shallowStudentsCopy);
console.log("Deep Copy", deepStudentsCopy);
console.log("Deep Map Copy", deepMapCopy);

const printPersonInfo = (
  firstName,
  lastName,
  zipCode,
  country = "Macedonia",
  city = "Skopje"
) => {
  console.log(firstName, lastName, country, city, zipCode);
};

class Random {
  students = [];

  constructor(subjects) {
    this.subjects = subjects;
  }
}
