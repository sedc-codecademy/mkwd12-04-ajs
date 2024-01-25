let header = document.getElementById("header");
header.innerText = "Weather Alert App";

let greetingResult = document.getElementById("greetingResult");
greetingResult.innerText = "Welcome to the most accurate weather app!";

//navigation service is responsible for the navigation in our app. This is why we are keeping all the info 
//and functionalities about the navigation here
let navigationService = {
    navItems: document.getElementsByClassName("nav-link"),
    activateItem: function(item){
            for(let navItem of this.navItems){
                navItem.classList.remove("active");
            }
            item.classList.add("active");
    }
}