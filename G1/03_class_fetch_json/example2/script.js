let imgContainer = document.querySelector("#image-container");
// let getBtn = document.querySelector("#get-btn");
let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");
let loader = document.querySelector("#loader");

// Requirements:
// 1. Add input field
// 2. Add search btn
// 3. When you add some text in the input field, search
// for that bread of dog, and if image is returned
// show the dog image in the img container
// 4. If no image, show "No image for this breed"
// 5. Add loader :)

// URL 2
// https://dog.ceo/api/breed/golden retriever/images/random - NO
// https://dog.ceo/api/breed/golden/images/random - YES
// https://dog.ceo/api/breed/<OVDE_BREED>/images/random

loader.style.display = "none";

searchBtn.addEventListener("click", function () {
  loader.style.display = "block";

  let value = searchInput.value.toLowerCase();

  if (!value) {
    imgContainer.innerText = "You need to add some value to search!";
    return;
  }

  fetch(`https://dog.ceo/api/breed/${value}/images/random`)
    .then(function (res) {
      return res.json();
    })
    .then(function (body) {
      console.log("BODY", body);
      if (body.status === "success") {
        imgContainer.innerHTML = `<img src="${body.message}" alt="${value}" />`;
      } else {
        imgContainer.innerHTML = body.message;
      }
    })
    .finally(function () {
      loader.style.display = "none";
    });
});

//  Random image show
// getBtn.addEventListener("click", function () {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (body) {
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
