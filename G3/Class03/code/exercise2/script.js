console.log("we are live from exercise 2");

//bad way

// let callBtn = document.getElementById("callBtn");
// let result = document.getElementById("result");
// let globalResponse;

// callBtn.addEventListener("click", function() {
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(response) {
//         console.log("Success!");
//         console.table(response);
//         globalResponse = response;
//     })
//     .catch(function (error) {
//         console.log("error: " + error);
//         console.error(error);
//     })
// });

// let resultTitle = result.getElementsByTagName("h1")[0];
// let resultList = result.getElementsByTagName("ul")[0];
// resultTitle.innerHTML = `${globalResponse.academy} Academy:`
// resultList.innerHTML = "";
// for (let student of globalResponse.students) {
//     resultList.innerHTML += `<li>${student}</li>`
// }

// okay way

// let callBtn = document.getElementById("callBtn");
// let result = document.getElementById("result");

// callBtn.addEventListener("click", function () {
//     fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (response) {
//         console.log("Success from OK way");
//         console.log(response);
//         let resultTitle = result.getElementsByTagName("h1")[0];
//         let resultList = result.getElementsByTagName("ul")[0];
//         resultTitle.innerText = `${response.academy} Academy`
//         resultList.innerHTML = "";
//         for(let student of response.students) {
//             resultList.innerHTML += `<li>${student}</li>`
//         }
//     })
//     .catch(function (error) {
//         console.error(error);
//     })
// })

// good way

let callBtn = document.getElementById("callBtn");
let result = document.getElementById("result");

function printAcademy(resultElement, academy) {
    let resultTitle = resultElement.getElementsByTagName("h1")[0];
    resultTitle.innerText = `${academy} Academy`
}

function printStudents(resultElement, students) {
    let resultList = resultElement.getElementsByTagName("ul")[0];
    resultList.innerHTML = "";
    for (let student of students) {
        resultList.innerHTML += `<li>${student}</li>`
    }
}

callBtn.addEventListener("click", function() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json")
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (response) {
        console.log("Success from good way!")
        console.log(response);
        printAcademy(result, response.academy);
        printStudents(result, response.students);
    })
    .catch(function (error) {
        console.error(error);
    })
})
