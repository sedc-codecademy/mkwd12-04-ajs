// * Create a movie renting app
// * There should be an array of movie names
// * There should be an input and a search button
// * When the person enters a name of a movie it should search the array
// * If the name exists it should show an H1 element that says: "The movie can be rented" in green text
// * If the name does not exist it should show an H1 element that says: "The movie can't be rented" in red text
// * The input should not be case sensitive ( it should find the movie regardless of capital or small letters )


let movies = ["Harry Potter", "Lord of the rings", "Captain America", "Aquaman", "Star wars"];
//harry potter == harry potter  toLowerCase()
//HARRY POTTER == HARRY POTTER   toUpperCase()
//harry potter !=  Harry Potter

let result = document.getElementById("result");
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(event){
    event.preventDefault(); //it prevents the default action of the input btn on click, if it has one

    //validation if there is a search text
    let movie = searchInput.value;
    if(!movie){
        console.log("You must enter a movie name to search"); 
        return; //undefined.toUpperCase() will throw an error
    }

    let movieFound = searchMovies(movie);

    if(movieFound){
        result.innerText = "The movie can be rented";
        result.style.color = "green";
    }else{
        result.innerText = "The movie can't be rented";
        result.style.color = "red";
    }
})

function searchMovies(searchText) {
    let movieWasFound = false;  
    for (let m of movies) {
        if (m.toUpperCase().trim() == searchText.toUpperCase().trim()) {   
            movieWasFound = true;
            break;
        } 
    }
    return movieWasFound;  
}

// function searchMovies(searchText){  
//     for(let m of movies){
//         if (m.toUpperCase() == searchText.toUpperCase()) {
//             return true; //if it fibds a match, it will return true and end the function
//         }
//     }
//     return false; //once it iterates through the whole array and it didn't find a match, it will return false
// }