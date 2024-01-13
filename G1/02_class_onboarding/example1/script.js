/*
## Movies renting App

* Create a movie renting app
* There should be an array of movie names
* There should be an input and a search button
* When the person enters a name of a movie it
  should search the array
* If the name exists it should show an H1 element
  that says: "The movie can be rented" in green text
* If the name does not exist it should show an H1
  element that says: "The movie can't be rented" in red text
* The input should not be case sensitive (it should
  find the movie regardless of capital or small letters)
*/

// Selected Elements
let input = document.querySelector("#search");
let btn = document.querySelector("#search-btn");
let result = document.querySelector("#result");

// Data
let movies = [
  "Die Hard",
  "Inception",
  "Montevideo",
  "Titanic",
  "Harry Potter",
  "It",
  "E.T.",
  "Saw",
];

// Process of searching
// 1. Handle the event listener of the search btn
// 2. Value from the input
// 3. Iterate the movies array
// 4. Compare each movie from the array
//    to the input search value
// 5. If exists show positive result
// 6. If it doesn't exist show negative result

// Event Listeners

btn.addEventListener("click", function () {
  let value = input.value;

  for (let movie of movies) {
    if (value === movie) {
      result.innerText = "Movie can be rented";
      result.style.color = "green";
      return;
    }
  }

  result.innerText = "Movie can't be rented";
  result.style.color = "red";
});
