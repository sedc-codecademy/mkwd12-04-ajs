console.log("It's working");

// Destructuring

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 24,
  grades: {
    basicHtml: 5,
    basicJs: 3,
    advJs: 2,
    comment: {
      trainer: "Decent Student",
      assisstent: "Decent Student Indeed",
    },
  },
};

const person = {
  firstName: "Borche",
  lastName: "Borisovski",
};

console.log(student.grades.basicHtml);
console.log(student.grades.comment.trainer);

//Destructuring creates new variables easily from the object that is on the right side of the = operator
const { firstName, lastName, age, city } = student;

console.log(firstName, lastName, age);

// Destructuring a nested object from another object
// const { basicHtml, basicJs, advJs } = student.grades;

// console.log(basicHtml, basicJs, advJs);
// const { trainer, assisstent } = student.grades.comment;

// Adding custom names to destructured properties
const { firstName: personFirstName, lastName: personLastName } = person;

console.log(personFirstName, personLastName);

// Destructuring nested object from the main (parent) object
const {
  grades: {
    basicHtml,
    basicJs,
    advJs,
    basicNode = 0,
    comment: {
      trainer: trainerComment,
      assisstent: assisstentComment,
      manager: managerComment = "No Comment Added",
    },
  },
} = student;

console.log(
  basicHtml,
  basicJs,
  advJs,
  trainerComment,
  assisstentComment,
  basicNode,
  managerComment
);

// Without destructuring

// const printStudentInfo = student => {
//   console.log(
//     `Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`
//   );
//   console.log("Grades:");
//   console.log(`Basic HTML: ${student.grades.basicHtml}`);
//   console.log(`Basic HTML: ${student.grades.basicJs}`);
//   console.log(`Basic HTML: ${student.grades.advJs}`);
// };

// printStudentInfo(student);

//With destructuring

const printStudentInfo = ({
  firstName,
  lastName,
  age,
  grades: { basicHtml, basicJs, advJs },
}) => {
  console.log(`Name: ${firstName} ${lastName}, Age: ${age}`);
  console.log("Grades:");
  console.log(`Basic HTML: ${basicHtml}`);
  console.log(`Basic HTML: ${basicJs}`);
  console.log(`Basic HTML: ${advJs}`);
};

printStudentInfo(student);

//Destructuring array

const colors = ["red", "green", "yellow", "white", "black", ["pink", "orange"]];

const [redColor, greenColor, , , blackColor] = colors;

console.log(redColor, greenColor, blackColor);

const [, , yellowColor, , , [pinkColor, orangeColor]] = colors;

console.log(yellowColor, pinkColor, orangeColor);

const storyArr = ["John", "Happy", "Writing Code"];

const tellStory = ([name, mood, activity]) => {
  console.log(`${name} is in a ${mood} mood, and is ${activity}`);
};

tellStory(storyArr);

//Spread operator

const remainingNums = [5, 6, 7, 8, 9, 10];

const nums = [1, 2, 3, 4];

// remainingNums.forEach(num => {
//   nums.push(num);
// });

// console.log(nums);

const combinedNums = [...nums, ...remainingNums, 11, 12, 13];

console.log(combinedNums);

//Copying arrays using the spread operator

const originalNums = [2, 3, 1, 5, 1, 3, 5, 22, 33, 11, 22];

const copyNums = [...originalNums];

copyNums.sort((a, b) => a - b);

console.log(originalNums);
console.log(copyNums);

//Combining objects with spread

const bodyInfo = {
  doors: 5,
  paint: "Metallic Gray",
  wheelSize: 19,
};

const engineInfo = {
  topSpeed: 240,
  topRpm: 7500,
  hasTurbo: true,
  cc: 3500,
};

const carInfo = {
  ...bodyInfo,
  ...engineInfo,
};

console.log(carInfo);

//Copying objects with spread

// !ABSOLUTELY FORBIDDEN TO DO THIS FOR OBJECTS
// const carInfoCopy = carInfo;

// *THIS CREATES A VALID COPY THAT YOU CAN MUTATE
const carInfoCopy = { ...carInfo };

carInfo.doors = 100000;

carInfoCopy.cc = 0;

console.log("COPY", carInfoCopy);
console.log("ORIGINAL", carInfo);

// Object methods

// Object.assign is used to combine objects into a new object
const carInfoCopyAssign = Object.assign({}, bodyInfo, engineInfo);

console.log(bodyInfo);

console.log(carInfoCopyAssign);

const assignCopyTwo = Object.assign({}, carInfo);

console.log(assignCopyTwo);

// const carInfoCopyCreate = Object.create(carInfo);

// Object.create can be used to create a copy of another object

const carInfoCreateCopy = Object.create(carInfo);

console.log(carInfoCreateCopy);
console.log(carInfoCreateCopy.paint);

// Object.keys returns an array of all the keys of the object

const carInfoKeys = Object.keys(carInfo);

console.log(carInfoKeys);

carInfoKeys.forEach(key => {
  console.log(carInfo[key]);
});

// Object.values returns an array with all the values of the object

const carInfoValues = Object.values(carInfo);

console.log(carInfoValues);

// Object entries returns an array with nested arrays that contain the key and the value

const carInfoEntries = Object.entries(carInfo);

console.log(carInfoEntries);

// Dynamically adding properties to an object

const newKeys = ["isEuroSix", "isAffordable", "isRegistered"];

newKeys.forEach(key => {
  carInfo[key] = true;
});

console.log(carInfo);

// Chad wants to be a perfect student
const badStudent = {
  name: "Chad",
  grades: {
    basicHtml: 1,
    basicJs: 1,
    advancedJs: 1,
    basicNode: 1,
    advancedNode: 1,
  },
};

// Extracting the keys of badStudent.grades using Object.keys
const gradeKeys = Object.keys(badStudent.grades);

gradeKeys.forEach(key => {
  badStudent.grades[key] = 5;
});

console.log(badStudent);

// Object.seal prevents adding new properties but allows for editing of existing ones

const american = {
  name: "Bob Bobsky",
  country: "USA",
};

Object.seal(american);

american.isCrazy = true;

american.name = "PUTIN FOREVER";

console.log(american);

// Object.freeze prevents adding or editing properties whatsoever

const frenchmen = {
  name: "Jacque",
  country: "France",
};

Object.freeze(frenchmen);

frenchmen.name = "BOB";

frenchmen.isCrazy = true;

console.log(frenchmen);
