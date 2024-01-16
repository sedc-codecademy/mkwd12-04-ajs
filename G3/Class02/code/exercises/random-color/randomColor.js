// 3.2. Select the created h1 element
const rgbText = document.getElementById("rgbText")

// 2.1. Handle page refresh
// window.addEventListener("load", function () {
//     console.log("Works");
//     changeBackgroundColor();
// })
window.addEventListener("load", changeBackgroundColor)
// window.onload = changeBackgroundColor;

// 2.2. Pick (Generate) random color
function generateRandomColor() {
    // RGB(0-255,0-255,0-255)
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

// 2.3. Change the background color
function changeBackgroundColor() {
    const color = generateRandomColor();
    document.body.style.backgroundColor = color;
    // 3.3. Add text to the h1 element with the value of the current color
    rgbText.innerText = color;
}




