// Create a button
// When the button is clicked, call the StarWars api for the first person. \
// Print the person name in an **h1** tag. \
// Print the person stats in a **table**:

// * Height
// * Weight
// * Eye color
// * Hair color

// **URL:** https://swapi.dev/api/people/1 

function printName(resultElement, name){
    let resultTitle = resultElement.getElementsByTagName("h1")[0];
    resultTitle.innerText = name;
}

function printStats(resultElement, data){
    let resultTable = resultElement.getElementsByTagName("tbody")[0];
    resultTable.innerHTML = "";
    resultTable.innerHTML+=`
    <tr>
            <td> Height </td>
            <td> ${data.height} cm </td>
    </tr>
    <tr>
            <td> Weight </td>
            <td> ${data.mass} kg </td>
    </tr>
    <tr>
            <td> Eye color </td>
            <td> ${data.eye_color} </td>
    </tr>
    <tr>
        <td> Hair color </td>
        <td> ${data.hair_color} </td>
    </tr> `;
}

let callBtn = document.getElementById("callBtn");
let result =  document.getElementById("result");

callBtn.addEventListener("click", function(event){
event.preventDefault()
fetch("https://swapi.dev/api/people/1") //Promise
.then(function(response){
       response.json()  //Promise
            .then(function(data){
                    printName(result, data.name);
                    printStats(result, data);
            })
            .catch(function(error){
                console.log(error);
            })
})
.catch(function(error){
    console.log(error);
})

})
