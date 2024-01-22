let getWeatherInfo = () => {
    return 'The weather today is very cold. Pleas stay at home.'
};

let todaysWeather = getWeatherInfo();
console.log(todaysWeather);

// let multiplyNumbers = (x, y) => {
//     return x * y;
// };

// arrow function in one line
let multiplyNumbers = (x, y) => x * y;
let multiplicationResult = multiplyNumbers(5, 6);
console.log(multiplicationResult);

// let displayMessage = (greet, name, timeOfTheDay) => console.log(`${greet} ${name}, it is ${timeOfTheDay}`);

let displayMessage = (greet, name, timeOfTheDay) => `${greet} ${name}, it is ${timeOfTheDay}`;

let greetedPerson = displayMessage('Hello dear', 'Ana', 'evening');
console.log(greetedPerson);

// the () can be omitted if we pass only one parameter
let greetUser = userName => `Hello ${userName}!`;

// arrow function in event listener
let displayMessageBtn = document.getElementById('displayMsgBtn');
displayMessageBtn.addEventListener('click', () => {
    let messageContainer = document.getElementById('myElement');
    messageContainer.innerHTML = 'This message has been created via arrow function';
});
