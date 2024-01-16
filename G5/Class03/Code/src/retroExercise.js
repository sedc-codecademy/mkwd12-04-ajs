let movies = ["Lord of the rings", "The Godfather", "Star Wars", "Marvel", "Harry Potter"];

let header = document.getElementById("result");
let nameInput = document.getElementById("movieName");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(event){

    event.preventDefault();

    let searchInput = nameInput.value;
    if(!searchInput){
        console.log("You must enter a name to be able to search");
        return;
    }

    let movieFound = searchMovies(searchInput);
    
    if(movieFound){
        header.innerText = "Movie found!";
        header.style.color = "green";
    }
    else{
        header.innerText = "Movie not found!";
        header.style.color = "red";
    }

})


// function searchMovies(movieInput){
//     let flag = false;
//     for(let movieName of movies){
//         if(movieName.toUpperCase() == movieInput.toUpperCase()){
//             flag = true;
//             break;
//         }
//     }

//     return flag;
// }

function searchMovies(movieInput){
    for(let movieName of movies){
        if(movieName.toUpperCase() == movieInput.toUpperCase()){
            return true;
        }
    }

    return false;
}