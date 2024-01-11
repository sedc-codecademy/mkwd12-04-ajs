console.log("script executed");

const colorDisplayEl = document.querySelector(".color-display");

function changeBodyColor() {
  console.log("function called");

  // 1. Generate 3 random numbers between 0-255
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  console.log(red, green, blue);
  // 2. Change the background color of the body
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // 3. Add the rgb value to an html element so it's displayed on the screen
  colorDisplayEl.innerText = `rgb(${red}, ${green}, ${blue})`;
}

// setInterval(function () {
//   changeBodyColor();
// }, 1000);

changeBodyColor();
