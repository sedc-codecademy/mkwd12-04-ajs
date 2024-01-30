// console.log("First");
// setTimeout(() => {
//     console.log("This executes after 3 seconds");
// }, 3000);
// console.log("Last");

// let interval = setInterval(() => {
//     console.log("HEY!");
// }, 2000);


// document.querySelector("button")
//         .addEventListener("click", () => {
//             clearInterval(interval)
// })


// function first() {
//     setTimeout(() => console.log("First thing"), 2000);
// }


// function second() {
//     console.log("Second thing");
// }


// first();
// second();


// function firstFunction(callbackFunc) {
//     setTimeout(() => {
//         console.log("Some code from first function");
//         callbackFunc();
//         // secondFunction();
//     }, 2000)
// }


// function secondFunction() {
//     console.log("code from second function");
// }

// function thirdFunction() {
//     console.log("code from third function");
// }
 

// firstFunction(secondFunction);
// firstFunction(thirdFunction);


function makeCall(url, callbackPrint) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log("Success!");
            callbackPrint(response);
        })
}


function printData(data) {
    console.log("displaying data on the screen", data);
}


makeCall("https://swapi.dev/api/people/1", printData);


