
//Synchronous
function firstGreeting(){
    console.log("First greeting");
}

function secondGreeting(){
    console.log("Second greeting");
}

firstGreeting();
secondGreeting();
//prints:
//First greeting
//Second greeting


//Asynchronous

setTimeout(() => console.log("This log will be executed after 5 seconds"), 5000);

let interval = setInterval(() => console.log(new Date()), 3000);
//let interval2 = setInterval(() => console.log("Hi"), 5000);

document.getElementById("ourBtn").addEventListener("click", function(){
    clearInterval(interval);
})

function firstMessage(){
    setTimeout(()=> {console.log("Hello from first Message");
    secondMessage();
}, 5000);
//secondMessage();
}

function secondMessage(){
    console.log("Hello from second Message");
}

