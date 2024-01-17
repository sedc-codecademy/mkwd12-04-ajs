let movies = ["Lord of the rings", "Harry Poter", "Joker", "Fast & Furious", "The Godfather"];

let resultHeader = document.getElementById("result");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

function searchMovie() {
  for (let movie of movies) {

    // if (movie.toLowerCase() === searchInput.value.toLowerCase()) {
    if(movie.toLowerCase().includes(searchInput.value.toLowerCase())){
      // return movie;
      return true
    }
  }
  return false;
}

function showResult(event) {
  event.preventDefault();
  resultHeader.innerText = "";
  
  resultHeader.style.color = "black";
  if (!searchInput.value) {
    resultHeader.innerText = "You must enter a film";
  } else {
    let searchResult = searchMovie();
    if (!searchResult) {
      resultHeader.innerText = "The movie was not found";
      resultHeader.style.color = "red";
    } else {
      resultHeader.innerText = "The movie can be rented";
      resultHeader.style.color = "green";
    }
  }
  //reset the input
  searchInput.value = "";
}

searchBtn.addEventListener("click", showResult);

