// setTimeout(() => console.log("This log will be executed after 5 seconds"), 5000);

// let interval = setInterval(() => console.log(new Date()), 2000);

// document.getElementById("ourButton").addEventListener("click", function(){
//     clearInterval(interval);
// })

function firstGreeting(){
    setTimeout(() => console.log("Hello from first greeting function"), 5000);
}

function secondGreeting(){
    console.log("Hello from second greeting function");
}

firstGreeting();
secondGreeting();

function firstMessage(){
    setTimeout(() => {
        console.log("Hello from first message function");
        secondMessage();
    }, 5000);
}

function secondMessage(){
    console.log("Hello from second message function")
}

firstMessage();




