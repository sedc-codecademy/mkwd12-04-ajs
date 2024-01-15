let imgContainer = document.querySelector("#image-container");
let getBtn = document.querySelector("#get-btn");

getBtn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (res) {
      return res.json();
    })
    .then(function (body) {
      imgContainer.innerHTML = `<img src="${body.message}" alt="dog image" />`;
    });
});

// Requirements:
// 1. Add input field
// 2. Add search btn
// 3. When you add some text in the input field, search
// for that bread of dog, and if image is returned
// show the dog image in the img container
// 4. If no image, show "No image for this breed"

// URL 2
// https://dog.ceo/api/breed/golden retriever/images/random - NO
// https://dog.ceo/api/breed/golden/images/random - YES
// https://dog.ceo/api/breed/<OVDE_BREED>/images/random

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
