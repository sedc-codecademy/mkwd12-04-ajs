console.log("Borche");

const test = "rest";

console.log("Borisovski");

const multiply = (num, multiplier) => num * multiplier;

const squareNumber = num => {
  return multiply(num, num);
};

console.log(squareNumber(10));

console.log("Before Set Timeout");
setTimeout(() => {
  console.log("Inside Set Timeout");

  console.log(squareNumber(15));
}, 0);
console.log("After Set Timeout");

const fullName = "Borche Borisovski";

console.log(fullName);

// setInterval(() => {
//   console.log("interval called");
// }, 500);

let intervalId = null;

const startCounter = () => {
  let counter = 0;

  intervalId = setInterval(() => {
    counter++;
    console.log(counter);
  }, 1000);

  console.log("Below Interval");
};

const endCounter = () => {
  clearInterval(intervalId);
};

// startCounter();

setTimeout(() => {
  endCounter();
}, 10000);

const printFirstName = callback => {
  setTimeout(() => {
    console.log("Hristina");
    callback();
  }, 1500);
};

const printLastName = () => {
  setTimeout(() => {
    console.log("Bozhinova");
  }, 1000);
};

printFirstName(printLastName);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => console.log(data));
