let sendRequestBtn = document.getElementById("sendRequestBtn");
let resultHeader = document.getElementById("resultHeader");
let resultList = document.getElementById("resultList");

sendRequestBtn.addEventListener("click", function(event){
    event.preventDefault();

    fetch("https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json")
    .then(function(response){

        response.json()
        .then(function(data){
            console.log(data);
            
            resultHeader.innerText = "";
            resultHeader.innerText = data.academy;

            printStudents(data);
        })
        .catch(function(error){
            console.log("An error while parsing json..")
        })
    })
    .catch(function(response){
        console.log("An error occurred");
        console.log(response);
    })
})

function printStudents(responseData){
    resultList.innerHTML = "";
    for(let student of responseData.students){
        resultList.innerHTML += `<li>${student}</li>`;
    }
}