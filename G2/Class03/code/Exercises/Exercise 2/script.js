let changeColor = (element, color = "black") => element.style.color = color;
let changeTextSize = (element, textSize) => {
  if (textSize === "") {
    element.style.fontSize = "24px";
  } else {
    element.style.fontSize = textSize + "px";
  }
}

let btn = document.querySelector('#change-btn');
btn.addEventListener("click", (e) => {
  e.preventDefault()
  let inputTextSize = document.querySelector('#size').value;
  let inputColor = document.querySelector('#color').value;
  let header = document.querySelector('h1');
  changeTextSize(header, inputTextSize);
  changeColor(header, inputColor);
})
