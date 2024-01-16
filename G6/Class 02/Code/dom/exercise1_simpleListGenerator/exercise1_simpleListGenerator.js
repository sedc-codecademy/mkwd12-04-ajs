// * Create an array of 5 names
// * Create an HTML page with:
//     * A header
//     * An empty unordered list
//     * A button
// * When the button is clicked it should fill in the empty unordered list with the names of the array

let students = ["Matej", "Berat", "Jana", "Nikola"];

let showStudentsBtn = document.getElementById("showStudentsBtn");

let body = document.getElementsByTagName("body");

showStudentsBtn.addEventListener("click", function(e){
    let unorderedList = document.createElement("ul");
    for(let student of students){
        let listItem = document.createElement("li");
        listItem.innerText = student;
        unorderedList.appendChild(listItem);
    }
    //e.target is the button, parentNode is the body
    e.target.parentNode.appendChild(unorderedList);

})
