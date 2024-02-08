function sayMyName() {
    console.log('Marko Djamtoski');
}
console.log(sayHello("Marko"));

sayMyName(); // we have to call the function so it can be used

function sumOfTwoNrs(nr1, nr2) { // parameters are a point of entry of the function
    console.log(nr1 + nr2);
}
let b = 2;
let a = 6;
sumOfTwoNrs(b,a); // arguments

function stringSplit(text,separator) {
    return text.split(separator); 
    console.log('Test!!!'); // when we return a value it means the function ends on line 14.
}
//Functions that have return will have a return value

let splitStr = stringSplit('Marko,Djamtoski',',');

function printPersonDetails(firstName,lastName,age,address) {
    return `Person Details :
    ${getFullName(firstName,lastName,age,address)}`;
    // How not to call a function inside a function
    // function getFullName(firstName,lastName,age,address) {
    //     return `First Name : ${firstName}
    //     Last Name : ${lastName}
    //     Age : ${age}
    //     Address : ${address}
    //     `;
    // }
}

function getFullName(firstName,lastName,age,address) {
    return `First Name : ${firstName}
    Last Name : ${lastName}
    Age : ${age}
    Address : ${address}
    `;
}

// let greeting = function () {
//     return 'Hello Marko!';
// }

// greeting();

let button = document.getElementById('button');

// button.addEventListener('click',function () {
//     console.log(this);
// });

button.addEventListener('click',(event) => console.log(this)); // in an arrow function "THIS" refers to the global object always
//which is "Window" in this case

const greeting = () => 'Hello Marko';

let sumFunction = (num1,num2) => {
    let result = num1 + num2;
    console.log('The result is:' + result);
    return result;
}

let divisionOfTwoNumbers = ((nr1,nr2) => console.log(nr1 - nr2))(5,6);

// Self invoked function result as return of another function
function sayHello(inputName) {
    return (name => {
        if(name.length <= 0) {
            return 'No name';
        }
        else if (name.length < 2) {
            return 'Too short';
        }
        else {
            return `Hello there ${name}`;
        }
    })(inputName)
}

console.log(sayHello(""));


function sumTo(num) {
    if(num === 0) { // we add a condition so we don't get a error
        return 0;
    }
    console.log(num);
    return num + sumTo(num - 1);
}
console.log(sumTo(15));

