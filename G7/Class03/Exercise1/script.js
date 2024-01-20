

let callBtn = document.getElementById("callBtn");
let result = document.getElementById("result");

// Bad way

// let globarResponse = null;

// callBtn.addEventListener("click", function() {
//     fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(response) {
//             console.log(response);

//             globarResponse = response;

//             let resultTitle = result.getElementsByTagName("h2")[0];
//             let resultList = result.getElementsByTagName("ul")[0];

//             resultTitle.innerText = `${globarResponse.academy} Academy`
//             resultList.innerHTML = ""

//             for(let student of globarResponse.students) {
//                 resultList.innerHTML += `<li>${student}</li>`
//             }
//         })
//         .catch(function(error) {
//             console.log(error);
//         })
// })


// console.log(globarResponse);

// globarResponse = 1;

callBtn.addEventListener("click", function() {
    fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            printAcademy(result, response.academy);
            printStudents(result, response.students);
        })
        .catch(function(error) {
            console.log(error);
        })
})


function printAcademy(resultElement, academy) {
    let resultTitle = resultElement.getElementsByTagName("h2")[0];
    resultTitle.innerText = `${academy} Academy`
}

function printStudents(resultElement, students) {
    let resultList = resultElement.getElementsByTagName("ul")[0];

    resultList.innerHTML = "";
    for(let student of students) {
        resultList.innerHTML += `<li>${student}</li>`
    }
}