function getDocuments(url){
    fetch(url) //the url that was send as param  //returns PROMISE
    .then(function(response){
        response.json() //returns PROMISE
        .then(function(data){ // the promise that is returned from .json()
            data.forEach(element => console.log(document));
        })
        .catch(function(errorResponse){
            console.log("An error occured")
        })
        .finally(function(){
            console.log("THE END!")
        })
    })
}


getDocuments("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");

