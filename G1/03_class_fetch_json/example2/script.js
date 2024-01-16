// ### Exercise - Search for dog breed

// Requirements:
// 1. Add input field
// 2. Add search btn
// 3. When you add some text in the input field, search
// for that bread of dog, and if image is returned
// show the dog image in the img container
// 4. If no image, show "No image for this breed"
// 5. Add loader :)

// URL 2
// https://dog.ceo/api/breed/golden retriever/images/random - NO because it has space
// https://dog.ceo/api/breed/golden/images/random - YES - no space allowed
// https://dog.ceo/api/breed/<OVDE_BREED>/images/random

let imgContainer = document.querySelector("#image-container"); // image container where we add the image of the dog
// let getBtn = document.querySelector("#get-btn"); // button for fetching random image of a dog
let searchInput = document.querySelector("#search-input"); // input where we get the value from
let searchBtn = document.querySelector("#search-btn"); // search button where we initialize search
let loader = document.querySelector("#loader"); // loading text

loader.style.display = "none"; // we hide the loader on app initialize

// Once the user clicks on the search button
searchBtn.addEventListener("click", function () {
  // we show the loader
  loader.style.display = "block";

  // Get value from the input, and we make all characters lowercase (as specified in API docs)
  let value = searchInput.value.toLowerCase();

  // if the value is falsy (empty string, null, undefined...)
  if (!value) {
    // We show error message
    imgContainer.innerText = "You need to add some value to search!";
    // Stop further execution
    return;
  }

  // If the input has value, we make the API call. We use the value to suggest what type of breed of dog we want
  fetch(`https://dog.ceo/api/breed/${value}/images/random`)
    .then(function (res) {
      // first than block is ALWAYS the same
      // here we have access to the WHOLE response (headers, body, etc.)
      return res.json(); // .json() does JSON.parse() + res.body extraction + other things that are done automatically for us
    })
    .then(function (body) {
      console.log("BODY", body);
      // If the API tells us it has the breed of dog we were searching for
      if (body.status === "success") {
        // we show the image in the DOM
        imgContainer.innerHTML = `<img src="${body.message}" alt="${value}" />`;
      } else {
        // if not we show an error message
        imgContainer.innerHTML = body.message;
      }
    })
    .finally(function () {
      // Finally executes ALWAYS and is usually used for cleanup operations, like hiding the loader
      loader.style.display = "none";
    });
});

// ### Random image show

// Click on get random image button
// getBtn.addEventListener("click", function () {
// get random image
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (body) {
//  show random image in the DOM
//       imgContainer.innerHTML = `<img src="${body.message}" alt="dog image" />`;
//     });
// })

// URL
// https://dog.ceo/api/breeds/image/random

// JSON Response
/*
{
    "message": "https://images.dog.ceo/breeds/bulldog-boston/n02096585_2450.jpg",
    "status": "success"
}
*/

// Steps:
// 1. Someone clicks on the button
//    - EventListener
// 2. Fetch the random image
//      - Success scenario
//      - Error scenario (show error in HTML)
// 3?. Insert the image in the HTML
// 4. Celebrate!
