// JSON example

let myJson = `{
    "trainer": "Trainer Name",
    "assistant": "Assistant Name",
    "students": [
        "Bob",
        "Samantha",
        "Chris",
        "Jill",
        "Greg"
    ],
    "academy": "Code"
}`;

console.log(typeof(myJson));
console.log(myJson);

let jsObject = JSON.parse(myJson);

console.log(jsObject);
console.log(jsObject.students[0]);

let newJson = JSON.stringify(jsObject);
console.log(newJson);

// Plain JS request (XMLHttpRequest)

let xhrButton = document.getElementById("sendRequest");

xhrButton.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        console.log("Request is send");
        if(xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.status);
            console.log("Request is successful");
            console.log(xhr.response);
            let objectResponse = JSON.parse(xhr.response);
            console.log(objectResponse);
        } else {
            console.log(xhr.responseText);
        }
    };
    xhr.open("GET", "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json");
    xhr.send()
});


// Fetch 

let fetchRequestBtn = document.getElementById("fetchRequestBtn");

fetchRequestBtn.addEventListener("click", function() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/studets.json")
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function(parsedResponse) {
            console.log(parsedResponse);
            let students = parsedResponse.students
            console.log(students);
        })
        .catch(function(response) {
            console.log(`The request has failed: ${response.message}`);
        })
})

// Astronauts example with fetch

astroBtn = document.getElementById("astroBtn");

astroBtn.addEventListener("click", function() {
    fetch("http://api.open-notify.org/astros.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log("Request Succesfull")
            console.log(response);

            let list = document.getElementById("astros");
            list.innerHTML = "";

            for(let person of response.people) {
                list.innerHTML += `<li> ${person.name}</li>`
            }
        })
        .catch(function(response) {
            console.log("The request has failed");
        })
})