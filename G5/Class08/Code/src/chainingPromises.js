fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json") //PROMISE
.then(function(response){
   return response.json(); //PROMISE -> return PROMISE
}) //PROMISE that comes from .json()
.then(function(data){ //data -> array of documents
    data.forEach(document => console.log(document));
})
.catch(function(error){
    console.log("An error occurred somewhere in the chain")
})
.finally(function(){
    console.log("The END!!!")
})

function getDocuments(url){
fetch(url) //PROMISE
.then(function(response){
   return response.json(); //PROMISE -> return PROMISE
}) //PROMISE that comes from .json()
.then(function(data){ //data -> array of documents
    data.forEach(document => console.log(document));
})
.catch(function(error){
    console.log("An error occurred somewhere in the chain")
})
.finally(function(){
    console.log("The END!!!")
})
}

getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")