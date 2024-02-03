function firstGreeting(callBackFunction){
    setTimeout(() =>{
      console.log("First greeting");

      setTimeout(() => {callBackFunction()}, 3000)

    }, 5000)
}

function secondGreeting(){
    console.log("Second greeting");
}

//firstGreeting(secondGreeting);

//AJAX

function makeAjaxCall(callBackFn, callBackFnGreeing){
    fetch("https://swapi.dev/api/people/1/")
    .then(function(response){
        response.json()
        .then(function(data){
            console.log("Data is here")
            callBackFn(data);
            callBackFnGreeing();
        })
    })
}


function printPerson(personObject){
    console.log(personObject);
    console.log("Request finished");
}

makeAjaxCall(printPerson, secondGreeting);
