console.log("==================== DOM Manipulation ====================");

console.log("");
console.log("============= Selectors =============");
// *1) document.getElementById( id ) - Selects ONE element by the given id
//  2) document.getElementsByClassName( class ) - Selects COLLECTION of elements by the given class ( even if there is one element, it is still in a collection )
//  3) document.getElementsByTagName( tag ) - Selects COLLECTION of elements by the given HTML tag ( even if there is one element, it is still in a collection )
// *4) document.querySelector( css selector ) - Selects the FIRST entity of any query selector result
//  5) document.querySelectorAll( css selector ) - Selects COLLECTION of entities of any query selector result
const title = document.querySelector("h1");
// title = 123; // ERROR
const firstParagraph = document.querySelector("[name='Paragraph One']") // select by attribute // for demonstratin purposes
const secondParagraph = document.getElementsByTagName("p")[1];
const firstDiv = document.getElementById("firstDiv")
const secondDiv = document.querySelector(".secondDiv");


console.log("");
console.log("============= Get or Change data of an Element =============");

// ***** TEXT *****
// element.innerText
// element.textContent
console.log(title.innerText);
console.log(title.textContent);
// title.innerText = "Title is updated";

// ***** ATTRIBUTES *****
// element.getAttribute("attributeName")
// element.setAttribute("attributeName", "value")
// element.removeAttribute("attributeName")
title.children[0].removeAttribute("hidden")
firstParagraph.setAttribute("bob", "bobsky"); // adding custom attribute to an element

// ***** STYLE *****
// element.style.nameOfCssProperty
title.style.color = "darkred";



console.log("");
console.log("============= Creating and Appending new Elements =============");
// document.createElement("element-name");
// document.appendChild(child-element);
let h2 = document.createElement("h2");
h2.innerText = "H2 created by JS";
firstDiv.appendChild(h2);

// element.innerHTML =
secondDiv.innerHTML = "<h2>This is created using innerHTML</h2>"
secondDiv.innerHTML += "<p>Hello this is new paragraph</p>"

let fullName = "Bob Bobsky"
secondDiv.innerHTML = `
    <h2>This is created using innerHTML</h2>
    <p style="color:magenta;">This is a magenta paragraph</p>
    <h3>Hello from <i>${fullName}</i></h3>
`;

// Example => function that makes element's text upper-cased
function makeElementTextUpperCased(element) {
    // element.innerText = "bla bla"
    // let upperCasedText = element.innerText.toUpperCase();
    // element.innerText = upperCasedText;
    element.innerText = element.innerText.toUpperCase();
}

makeElementTextUpperCased(title);