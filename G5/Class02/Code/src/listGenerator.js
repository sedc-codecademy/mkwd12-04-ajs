let namesArray = ["Ana", "Ivan", "Tanja", "Marko", "Stefan"];

let ourButton = document.getElementById("ourButton");

ourButton.addEventListener("click", function(event){
    console.log(event);
    let ourList = document.getElementById("ourList");
    ourList.innerHTML = "";
    for(let name of namesArray){
        //first way
        ourList.innerHTML += `<li>${name}</li>`;
        //ourList.innerHTML += `<li id="${name}">${name}</li>`;

        //second way
        let listItem = document.createElement("li");
        listItem.innerText = name;
        ourButton.appendChild(listItem);

        // let item = document.getElementById(name);
        // item.addEventListener("click", function(){})
    }
});



