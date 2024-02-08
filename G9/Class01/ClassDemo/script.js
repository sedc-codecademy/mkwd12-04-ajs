let array = []; // using square brackets;
let arr = [1, 2, 3, 4, 5];
let mixed = [
  1,
  2,
  3,
  "Marko",
  true,
  {
    isInarray: true,
    color: "green",
  },
];
// each element in the array is indexed with a number
// 1, 2, 3, ,4, 5
// 0  1  2   3  4
console.log(arr[0]);

console.log(arr.length);

console.log(mixed[mixed.length - 1]);

mixed.push("TestElement"); // adds an element at the end of the array.
console.log(mixed);

console.log(mixed.pop());

mixed.shift();

mixed.unshift("Test"); // adds an element at the beginning of the array.

for (let i = 0; i < mixed.length; i++) {
  const element = mixed[i];
  console.log(element);
  console.log(element.isInarray);
  console.log(element.color);
}

// Selectors

document.getElementById(""); // get element by ID attribute.
document.getElementsByClassName(""); // get element by class name.
document.getElementsByTagName(""); // get elements by tag name.(Name of the tag represents the name of the element for example <div> is 'div')
document.querySelector(""); // Selects the first entity of the query result
document.querySelectorAll(""); // Returns a collection of the query reusult
document.querySelectorAll("."); // . for class// # for id //

// innerText // we get the text from the selected element
// innerHTML // we get the html from the selected element
// value // we get the value from an input field(** This is only for elements that can have a value!!)
// style // changes the css of the element

// parentElement
// children
// nextElementSibling
// previousElementSibling
// firstElementChild
// lastElementChild

let button = document.getElementById("button");

button.addEventListener("click", ($event) =>
  console.log("Button has been clicked!")
);

button.addEventListener("click", ($event) => {
  console.log("Button has been clicked!");
});

button.addEventListener("click", ($event) => {
  console.log($event.target);
  console.log(this);
  console.log("Button has been clicked!");
});

function btnClick(event) {
    console.log(event.target);
    console.log('Button has been clicked!');
}

button.addEventListener('click', () => {
    btnClick();
    // we can add multiple functions to be called on the same click!
});


let obj = {}; // writte in curly brackets **{}**
let object = {
    name : 'Marko',
    callName : function() {
        console.log(this.name);
    }
}; // properties and methods property is name and method is method

// USING ES2015 // This is outdated and we will not use this.
// class Dog {
//     constructor(name, color, age, favoriteFood) {
//         this.name = name;
//         this.color = color;
//         this.age = age;
//         this.favoriteFood = favoriteFood;

//         this.bark = function () {
//             console.log('Woof woof!');
//         };
//     }
// }

// Constructor Notation Templates
// These are useful so we can know with what kind of objects we are working with.
// function Dog(name , color , age , favoriteFood) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//     this.favoriteFood = favoriteFood;

//     this.bark = function() {
//         console.log('Woof woof!');
//     }
// }
let rex = new Dog('Rex','Brown',10,'Bones');





