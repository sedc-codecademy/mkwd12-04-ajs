let colorInput = document.getElementById("color");
let fontSizeInput = document.getElementById("fontSize");
let textInput = document.getElementById("text");
let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(e) {
  //clear the HTML in the result element
  e.preventDefault();
  document.getElementById("result").innerHTML = "";
  if (!colorInput.value) {
    console.log("You must enter color");
    return;
  }
  if (!fontSizeInput.value) {
    console.log("You must enter font size");
    return;
  }
  if (!parseFloat(fontSizeInput.value)) {
    console.log("You must enter a number for font size");
    return;
  }
  if (!textInput.value) {
    console.log("You must enter text");
    return;
  }
  if (!textInput.value.includes(",")) { // if the text doesn't contain ,
    console.log("You must enter several items");
    return;
  }
  let list = document.createElement("ul");
  let items = textInput.value.split(","); // splits the text by comma (,) and returns the parts of the string as array
  for (let item of items) {
    let listItem = document.createElement("li");
    listItem.innerText = item;
    listItem.style.fontSize = fontSizeInput.value + "em";
    listItem.style.color = colorInput.value;
    list.appendChild(listItem);
  }

  document.getElementById("result").appendChild(list);
  //reset the values of the inputs
  colorInput.value = "#000000";
  fontSizeInput.value = "";
  textInput.value = "";
});