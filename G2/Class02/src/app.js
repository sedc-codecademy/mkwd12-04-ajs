function getRandomColor() {
  // Generate random RGB values
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Return the RGB string
  return `rgb(${red}, ${green}, ${blue})`;
}

function updatePage() {
  // Get a random color
  const randomColor = getRandomColor();

  // Change the background color
  document.body.style.backgroundColor = randomColor;

  // Display the RGB values in the center of the page
  document.body.innerText = randomColor;

  // Set a timeout to reset the page after 2 seconds (2000 milliseconds)
  // setTimeout(updatePage, 2000);
}

// Initial call to set up the page
updatePage();
