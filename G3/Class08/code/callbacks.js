console.log("===================== Callback Functions =====================");
// => function that is passed as an argument to another function and is expected to be executed after some async operation is completed

// Common use-cases:
// 1) Async Operations
function performAsyncOperation(callback) {
    console.log("Async operation started...");
    setTimeout(() => {
        const result = "Async operation completed";
        callback(result);
    }, 2500);
    console.log("... Processing ...")
}
function callbackFunction(stringItem) {
    console.log(stringItem);
}
// debugger;
// performAsyncOperation(callbackFunction);


// 2) Event Handling
// document.getElementById("clickMeBtn").addEventListener("click", (e) => {
//     console.log(e.target.id + " button is clicked");
// });
function handleClick() {
    console.log("Button is clicked");
}
document.getElementById("clickMeBtn").addEventListener("click", handleClick);


// 3) High Orderd Functions callbacks
let testArray = [1, 2, 3, 4, 5];
testArray.forEach(x => console.log(x));
// testArray.forEach(function (x) { console.log(x) });

console.clear();

// 4) Making requests to an API
function renderDataFromApi(url, renderFunction) {
    fetch(url)
        .then(response => response.json())
        .then(result => {
            renderFunction(result.value);
        })
        .catch(error => {
            console.error(error);
        })
}
function printJoke(data) {
    console.log(data);
}

// renderDataFromApi("https://api.chucknorris.io/jokes/random", printJoke)

// renderDataFromApi("https://api.chucknorris.io/jokes/random", data => console.log(data));

// renderDataFromApi("https://api.chucknorris.io/jokes/random", console.log);

// renderDataFromApi("https://api.chucknorris.io/jokes/random", function (data) {
//     console.log(data)
// });
// same thing => different Syntax (and joke :D)



console.log("===================== Callback Function vs Function as an argument =====================");
// Callback => expected to be executed later, usually after an asynchronous operation or an event (executed asynchroniously)
// Function as an argument => not expected to be executed later (executed synchroniously)

function callbackFuncExample(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
        callback();
    }, 2000);
    console.log("Processing...");
}
// callbackFuncExample(console.log("GREAT JOB !!!"))
callbackFuncExample(() => console.log("GREAT JOB !!!"));


function functionAsArgument(func1, func2) {
    console.log("Sync execution of functions...");
    func1();
    func2();
}

functionAsArgument(() => console.log("Hello from func1"), () => console.log("Hello from func2"));
