let sendRequestBtn = document.getElementById("sendRequestBtn");

sendRequestBtn.addEventListener("click", function(event){
event.preventDefault();

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json") //Promise
.then(function(response){
    //Success
    //response contains data in json format
    console.log(response); 
    // .json() reads and parses json data from the server in the response, .json() also returns a Promise
    response.json().then(function(data){  
                            console.log(data);
                            console.log("Academy name:");
                            console.log(data.academy);
                            for(let student of data.students){
                                console.log(student);
                            }
                    })
                    .catch(function(unsuccessfullParse){
                        console.log(unsuccessfullParse)
                    })
})
.catch(function(unsuccessfullResponse){
    console.log(unsuccessfullResponse)
})

})


console.log("Out of the fetch");
//..........
