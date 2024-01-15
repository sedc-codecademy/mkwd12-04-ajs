let sendRequestBtn = document.getElementById("sendRequestBtn");

sendRequestBtn.addEventListener("click", function(event){
    event.preventDefault();

    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students.json") //Promise
    .then(function(response){
        //success
        //response contains data
        console.log("Success");
        console.log(response);

        //.json() reads and parses json data from the server in the response
        response.json() //Promise
        .then(function(data){
            console.log(data);
            console.log("Academy name:");
            console.log(data.academy);
            console.log("Students:");
            for(let student of data.students){
                console.log(student);
            }
        })
        .catch()

    })
    .catch(function(response){
        //error
        //response contains details about the error that happened
        console.log("An error ocurred");
        console.log(response);
    })
})