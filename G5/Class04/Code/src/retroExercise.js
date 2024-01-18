let resultDiv = document.getElementById("result");
let ourBtn = document.getElementById("callBtn");

ourBtn.addEventListener("click", function(event){
    event.preventDefault();

    fetch("https://swapi.dev/api/people/1") //Promise object
    .then(function(response){
       console.log(response); 

    //    response.json() //Promise object
    //    .then(function(data){

    //    })
    //    .catch()

    return response.json(); //return Promise object
    }) //we will get the Promise object from the return above
    .then(function(data){
        console.log(data);

        //from all h1 elements in resultDiv, take the first
       let header = resultDiv.getElementsByTagName("h1")[0];
       //data represents the parsed json, which is an object with property name
       header.innerText = data.name;

       let tableBody = resultDiv.getElementsByTagName("tbody")[0];
       tableBody.innerHTML += "<tr><td>Height</td><td>Weight</td><td>Eye color</td></tr>";
       tableBody.innerHTML += `<tr><td>${data.height}</td><td>${data.mass}</td><td>${data.eye_color}</td></tr>`;

       //Second option, instead of using innerHTML
    //    let firstRow = document.createElement("tr");
    //    let firstRowFirstCell = document.createElement("td");
    //    firstRowFirstCell.innerText = "Height";
    //    //do it for the rest of the cells

    //    firstRow.appendChild(firstRowFirstCell);
    //    tableBody.appendChild(firstRow);


    })
    .catch(function(errorResponse){
        console.log("Error!");
        console.log(errorResponse);
    })
})