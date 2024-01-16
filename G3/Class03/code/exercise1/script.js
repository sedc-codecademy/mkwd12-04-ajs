console.log("we are live");

//JSON Exaple
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

let myJson2 = {
    trainer: "Trainer Name",
    assistant: "Assistant Name",
    students: [
        "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg"
    ],
    academy: "Code"
};

// console.log(myJson);
// console.log(myJson2);
// console.log(myJson.assistant);
// console.log(myJson2.assistant);
// // Converting JSON to JS object so we can work with
// let jsObject = JSON.parse(myJson);
// console.log(jsObject);
// // Converting JS object back to JSON
// let jsonString = JSON.stringify(jsObject);
// console.log(jsonString);
// console.log(typeof (myJson));
// console.log(typeof (myJson2));
// console.log(typeof (jsObject));
// console.log(typeof (jsonString));
// console.log(jsObject.students[0]);
// // console.log(myJson.students[0]);

// console.log(`------------------------------`)

// document.getElementById("sendRequest").addEventListener("click", function () {

// });

let btn = document.getElementById("sendRequest");
btn.addEventListener("click", function () {
    //1 cekor pingame URL
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
    //2 cekor fakjame responsot i go vrakjame isparsiran
    .then(function (response) {
        console.log(response);
        //.json auto go konvertira vo JS object
        return response.json()
    })
    //3 cekor gi pravime site logiki sto ni se potrebni
    .then(function (response) {
        console.log("request successful");
        console.log(response);
        let responseString = JSON.stringify(response);
        console.log(responseString);
        let responseJsObj = JSON.parse(responseString);
        console.log(responseJsObj);
    })
    //4 cekor go fakjame errorot dokolku se sluci
    .catch(function (response) {
        console.log("The request has failed:" + response.status);
        console.log(response.responseText);
    })
    });

    btn.addEventListener("click", function () {
        fetch("http://api.open-notify.org/astros.json")
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            console.log("astros call successful!");
            console.log(response);
            // ke frli error 
            // let JSONresponse = JSON.stringify(response);
            // console.log(JSONresponse);
            let element = document.getElementById("astros");
            element.innerHTML = "";
            for (let i = 0; i < response.people.length; i++) {
                element.innerHTML += `<li>${response.people[i].name}</li>`
            }
        })
        .catch(function (response) {
            console.log(response);
            console.log("the request has failed: " + response.status);
            console.log(response.responseText);
        })
    });

