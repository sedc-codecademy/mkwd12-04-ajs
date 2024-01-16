/*

List Generator dynamically from inputs
Create 3 inputs:
- Color
- FontSize
- Items
Create a button for generating unordered lists
When the button is clicked generate a new ul
element with the color, font size, and items from the inputs
Items should be added separated by "," in the input
*/

// Selected elements
let fontSizeInput = document.querySelector("#font-size");
let colorInput = document.querySelector("#color");
let itemsInput = document.querySelector("#items-input");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

// Functionality
function showListItems(e) {
  e.preventDefault();

  let fontSize = fontSizeInput.value;
  let color = colorInput.value;
  let items = itemsInput.value;

  let itemsAsArr = items.split(",");

  for (let item of itemsAsArr) {
    list.innerHTML += `<li style="font-size:${fontSize}px; color:${color};">${item}</li>`;
  }
}

// Events
btn.addEventListener("click", showListItems);
