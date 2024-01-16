console.log("================= EVENTS =================");

// Selecting elements
const buttonOne = document.getElementById("btnOne");
const buttonTwo = document.getElementById("btnTwo");
const buttonThree = document.getElementById("btnThree");

// Listen for a click event on the buttonOne
buttonOne.addEventListener("click", function () {
    console.log("Button ONE is clicked");
})


// Listen for a click event on the buttonTwo

// ******* NOTE *******
// => The event objevt in JavaScript is automatically passed to the event handler function when the event occures

buttonTwo.addEventListener("click", function (event) {
    console.log("Button TWO is clicked");
    console.log(event);
    // The event.target is the object representation of the element that is clicked
    console.log(event.target);
    console.log(`The id of the clicked element is ${event.target.id}`);
})


// Using pre-defined function instead of anonymous one
function handleClick(e) {
    console.log(e); // automatically the event object is passed from the event listener
    console.log("Button THREE is clicked");
}

// buttonThree.addEventListener("click", handleClick())
buttonThree.addEventListener("click", handleClick)
