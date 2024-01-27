function firstGreeting(callBackFunction){
    setTimeout(() => {
        console.log("First greeting");

        setTimeout(() => {
            callBackFunction();
        }, 3000);

    }, 5000);
}

function secondGreeting(){
    console.log("Second greeting");
}

firstGreeting(secondGreeting);

//AJAX
fetch("https://swapi.dev/api/people/1/")
.then(function(response){
    response.json()
    .then(function(data){
        printPerson(data);
    })
})

function printPerson(personObject){
    console.log(personObject);
    console.log("Request finished");
}

//EXAMPLE 2
function makeAjaxCall(callBackFn){
    fetch("https://swapi.dev/api/people/1/")
    .then(function(response){
        response.json()
        .then(function(data){
            callBackFn(data);
        })
    })
}
makeAjaxCall(printPerson);