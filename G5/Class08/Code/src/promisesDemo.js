//simple callbacks example

function simpleFunction(){
    setTimeout(function(){
        console.log("This is the first logged line");
        setTimeout(logSecondMessage, 3000);
    }, 2000);
}

function logSecondMessage(){
    console.log("This is the second logged line");
}

//simpleFunction();

//PROMISES
// function waitSomeTime(delayInMiliseconds){
//     if(delayInMiliseconds < 0){
//         console.log("Error!!!");
//     }
//     else{
//         setTimeout(function(){
//             console.log(`Message after ${delayInMiliseconds} miliseconds`);
//         }, delayInMiliseconds)
//     }
// }

function waitSomeTime(delayInMiliseconds){
    //we tell that there is some delayed code in this function
    //it will end eventually, but we don't know how (success, failure)
    return new Promise((resolve, reject) => {
        if(delayInMiliseconds < 0){
            reject("The delay can not be negative"); //Promise goes into state Rejected
        }
        else{
            setTimeout(function(){
                resolve(`Message after ${delayInMiliseconds} miliseconds`); //Promise goes into state Fulfilled
            }, delayInMiliseconds);
        }
    })
}

//what we get as response in then or catch is what we passed in resolve/reject
// waitSomeTime(4000) //Promise is returned after the call
// .then(function(successResponse){
//     console.log("Wait some time success:");
//     console.log(successResponse);
// })
// .catch(function(errorResponse){
//     console.log("Wait some time error:");
//     console.log(errorResponse);
// })
// .finally(function(){
//     console.log("This message will be logged anyway");
// })

// waitSomeTime(-4000) //Promise is returned after the call
// .then(function(successResponse){
//     console.log("Wait some time success:");
//     console.log(successResponse);
// })
// .catch(function(errorResponse){
//     console.log("Wait some time error:");
//     console.log(errorResponse);
// })
// .finally(function(){
//     console.log("This message will be logged anyway");
// })

//this line doesn't wait on anything, it is independent and it will be executed as soon as possible
console.log("Independent message");


//AJAX calls
//standard way
// fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json") //PROMISE
// .then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.log(errorResponse);
// })
// .finally(function(){
//     console.log("The request ended");
// })

//wrap fetch call in a function
function getDocuments(url){
    return new Promise((resolve, reject) => {
        fetch(url) //Promise
        .then(function(response){
            debugger;
            response.json() //Promise
            .then(function(data){
                debugger
                resolve(data); //Promise goes to fulfilled
            })
        })
        .catch(function(error){
            reject(error); //Promise goes to rejected
        })
    })
}

getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
.then(function(documents){
    //process documents
    printDocuments(documents);
})
.catch(function(error){
    console.log("error!!");
    console.log(error);
})

function printDocuments(documents){
    for(let document of documents){
        console.log(document);
    }
}
