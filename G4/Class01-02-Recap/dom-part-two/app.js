/*
- Create 3 inputs:
  - Color
  - FontSize
  - Text
- Create a button for generating titles
- When the button is clicked generate a new `h1` element with the color, font size, and text from the inputs
*/

// Selectors
const colorInput = document.querySelector("#colorInput");
const fontSizeInput = document.querySelector("#fontSizeInput");
const textInput = document.querySelector("#textInput");
const createBtn = document.querySelector("#createBtn");
const headingContainerEl = document.querySelector(".heading-container");

function generateHeading(color, fontSize, text) {
  // Create a h1 element
  const newHeadingEl = document.createElement("H1");
  // Change it's style to the provided data
  newHeadingEl.style.color = color;
  newHeadingEl.style.fontSize = `${fontSize}px`;
  // Change it's text with the provided text
  newHeadingEl.innerText = text;
  // Append this element to the headingContainerEl
  headingContainerEl.appendChild(newHeadingEl);
}

function clearInputs(inputs) {
  for (let input of inputs) {
    input.value = "";
  }
}

createBtn.addEventListener("click", function () {
  console.log("create btn clicked");

  generateHeading(colorInput.value, fontSizeInput.value, textInput.value);

  //   clearInputs([colorInput, fontSizeInput, textInput]);

  clearInputs(document.querySelectorAll("input"));
});

// - Create a class for Student objects with:
//   - Properties:
//     - firstName
//     - lastName
//     - birthYear
//     - academy
//     - grades - array of numbers
//   - Methods:
//     - getAge() - returns age of student
//     - getInfo() - returns "This is student firstName* lastName* from the academy academy\*!"
//     - getGradesAverage() - returns the average of the student grades
// - Create an array with 3 students

class Student {
  constructor(firstName, lastName, birthYear, academy, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
    this.birthYear = birthYear;
    this.academy = academy;
    this.grades = grades;
  }

  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getInfo() {
    return `This is student ${this.fullName} from the academy ${this.academy}`;
  }

  getGradesAverage() {
    let sum = 0;

    for (let grade of this.grades) {
      sum += grade;
    }

    return sum / this.grades.length;
  }
}

const johnDoe = new Student(
  "John",
  "Doe",
  1987,
  "Programming",
  [1, 2, 3, 1, 2, 1, 1, 1, 2, 1]
);

console.log(johnDoe);

const johnAge = johnDoe.getAge();
console.log(johnAge);

console.log(johnDoe.getInfo());
console.log(johnDoe.getGradesAverage());

/*
- Create an array of 5 names
- Create an HTML page with:
  - A header
  - An empty unordered list
  - A button
- When the button is clicked it should fill in the empty unordered list with the names of the array
*/

const genNameArrayBtn = document.querySelector("#genNameArrayBtn");
const nameArrayEl = document.querySelector(".name-arr-list");

const nameArr = ["Marko", "Zharko", "Darko", "Zarko", "Sharko", "Tarko"];

function renderNameArray(array, listEl) {
  // 1. Create element approach
  //   for (let name of array) {
  //     console.log(name);
  //     // 1. Create new li element for each name
  //     const newLi = document.createElement("LI");
  //     // 2. Change the innerText of the li to be the name itself
  //     newLi.innerText = name;
  //     // 3. Append the li element to the list el
  //     listEl.appendChild(newLi);
  //   }
  //   2. innerHTML Approach
  let liHTML = "";
  for (let name of array) {
    liHTML += `<li>${name}</li>`;
  }
  listEl.innerHTML = liHTML;
}

genNameArrayBtn.addEventListener("click", function () {
  console.log("Name arr btn clicked");

  renderNameArray(nameArr, nameArrayEl);
});

/*
- Create 3 inputs:
  - Color
  - FontSize
  - Items
- Create a button for generating unordered lists
- When the button is clicked generate a new ul element with the color, font size, and items from the inputs

> Items should be added separated by "," in the input
*/
const colorListInput = document.querySelector("#colorListInput");
const fontSizeListInput = document.querySelector("#fontSizeListInput");
const itemsListInput = document.querySelector("#itemsListInput");
const dynamicListBtn = document.querySelector("#dynamicListBtn");
const dynamicListContainerEl = document.querySelector(
  ".dynamic-list-container"
);

function generateDynamicList(color, fontSize, items) {
  // 1. Create a new ul element
  const ulEl = document.createElement("UL");
  // 2. Apply styles to new ul element
  ulEl.style.color = color;
  ulEl.style.fontSize = `${fontSize}px`;
  //   3. Create array from items string and create liHTML
  const itemsArr = items.split(",");

  let liHTML = "";
  for (let item of itemsArr) {
    liHTML += `<li>${item}</li>`;
  }
  ulEl.innerHTML = liHTML;

  //   Return new ul element
  return ulEl;
}

dynamicListBtn.addEventListener("click", function () {
  console.log("dynamic btn clicked");

  const newUlEl = generateDynamicList(
    colorListInput.value,
    fontSizeListInput.value,
    itemsListInput.value
  );

  dynamicListContainerEl.appendChild(newUlEl);

  clearInputs([colorListInput, fontSizeListInput, itemsListInput]);
});
