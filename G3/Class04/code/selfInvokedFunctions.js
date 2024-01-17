//  Self invoked function declared without parameters 
// (function() {
//     let fruits = ['apple', 'banana', 'orange'];
//     for (let i = 0; i < fruits.length; i++) {
//         console.log(fruits[i]); 
//     }
// })();

// Self invoked function declarred with arrow function
(() => {
    let fruits = ['apple', 'banana', 'orange'];
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]); 
    }
})();

// self invoked function declarred with arrow function with one parameter
(message => console.log(message))('This message is passed as an arguement to the self invoked funcion');

// change element content with self invoked function
(function() {
    document.getElementById('myElement').innerHTML = 'Content set by a self-invoking function.';
})();