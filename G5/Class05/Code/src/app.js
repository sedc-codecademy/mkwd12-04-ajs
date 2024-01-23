//the first page is already displayed when the app is loaded, because of the css
//we need to show app title and greeting

let header = document.getElementById("header");
header.innerText = "Weather App";

let greetingDiv = document.getElementById("greetingResult");
greetingDiv.innerText = "Welcome to the best weather app";


//NAVIGATION MENU
// let navigationLinks = document.getElementsByClassName("nav-link");
// let pages = document.getElementsByClassName("page");

// for(let i = 0; i < navigationLinks.length; i++){
//     //navigationLinks contains <a> elements
//     navigationLinks[i].addEventListener("click", function(){
//          //if we click on first <a> element, we need to show first page
//          //if we click on <a> element with index 0, we need to show page with index 0
//         displayPage(i);
//     })
// }

// function displayPage(index){
//     //we hide all the pages, because we don't know which one is active
//     for(let page of pages){
//         page.style.display = "none";
//     }
    
//     pages[index].style.display = "block";
// }

// let citySearchInput = document.getElementById("citySearchInput");
// let citySearchBtn = document.getElementById("citySearchBtn");

// citySearchBtn.addEventListener("click", function(){
//     console.log(`Search input: ${citySearchInput.value}`);
// })
//END NAVIGATION MENU

//NAVIGATION MENU - BETTER WAY
let navigationMenuService = {
    navigationLinks : document.getElementsByClassName("nav-link"),
    pages : document.getElementsByClassName("page"),
    citySearchInput : document.getElementById("citySearchInput"),
    citySearchBtn : document.getElementById("citySearchBtn"),
    displayPage : function (index){
        //we hide all the pages, because we don't know which one is active
        for(let page of this.pages){
            page.style.display = "none";
        }
        
        this.pages[index].style.display = "block";
    },
    registerClickEventListeners : function(){
        for(let i = 0; i < this.navigationLinks.length; i++){
            //navigationLinks contains <a> elements
            this.navigationLinks[i].addEventListener("click", function(){
                 //if we click on first <a> element, we need to show first page
                 //if we click on <a> element with index 0, we need to show page with index 0

                 //this in an event listener -> element that is target of the event
                 //that is why here we use the name of the object directly
                 navigationMenuService.displayPage(i);
            })
        }


        this.citySearchBtn.addEventListener("click", function(){
            //this in an event listener -> element that is target of the event
           //that is why here we use the name of the object directly
            console.log(`Search input: ${navigationMenuService.citySearchInput.value}`);
        })
    }
}


navigationMenuService.registerClickEventListeners();

