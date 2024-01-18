// Anonymous function in a variable
let greeting = function(name) {
    return `Hello ${name}!`;
};
let greet = greeting('Sirma');
console.log(greet);

let randomNumber = function() {
    return Math.floor(Math.random() * 100);
};
let myRandomNumber = randomNumber();
console.log(myRandomNumber);

// Anonumoys function in event listener 
let changingColorBtn = document.getElementById('changingColorBtn');
changingColorBtn.addEventListener('click', function() {
    changingColorBtn.style.backgroundColor = 'red';
});

let logMessageIntoConsole = function() {
    console.log('A buttin was clicked!')
}

let logMessageBtn = document.getElementById('loggingMsgBtn');
logMessageBtn.addEventListener('click', function() {
    console.log('A buttin was clicked!')
});

