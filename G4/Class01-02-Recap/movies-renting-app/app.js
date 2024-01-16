console.log("it's alive - frankenstein");

/*
- Create a movie renting app
- There should be an array of movie names - DATA
- There should be an input and a search button - SELECTORS
- When the person enters a name of a movie it should search the array - FUNCTION
- If the name exists it should show an H1 element that says: "The movie can be rented" in green text - RENDER
- If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text - RENDER
- The input should not be case sensitive ( it should find the movie regardless of capital or small letters )
*/

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const displayContainerEl = document.querySelector(".display-container");

const movieNames = [
  "The Matrix",
  "The Matrix 2",
  "The Matrix 3",
  "Jaws",
  "The Godfather",
  "Barbie",
  "LOTR",
  "Oppenheimer",
  "Deerhunter",
  "Chinatown",
  "Star Wars Episode IV: A New Hope",
  "Se7en",
];

let foundMovies = [];

function searchArray(searchValue, array) {
  foundMovies = [];

  for (let item of array) {
    // if (searchValue.toLowerCase() === item.toLowerCase()) return item;

    if (item.toLowerCase().includes(searchValue.toLowerCase()))
      foundMovies.push(item);
  }
}

function renderHeading(movieName, searchValue, containerEl) {
  const headingEl = document.createElement("H1");

  const canBeRented = !!movieName;

  if (canBeRented) {
    headingEl.innerText = `The movie: ${movieName} can be rented`;
    headingEl.style.color = "green";
  } else {
    headingEl.innerText = `The searched movie: ${searchValue} can't be rented sorry`;
    headingEl.style.color = "red";
  }

  containerEl.innerHTML = "";
  containerEl.appendChild(headingEl);
}

searchBtn.addEventListener("click", function () {
  console.log("search clicked");
  const searchValue = searchInput.value;

  searchArray(searchValue, movieNames);

  //   renderHeading(foundMovie, searchValue, displayContainerEl);

  console.log(foundMovies);

  displayContainerEl.innerHTML += `<ul>${foundMovies
    .map(el => `<li>${el}</li>`)
    .join("")}</ul>`;
});
