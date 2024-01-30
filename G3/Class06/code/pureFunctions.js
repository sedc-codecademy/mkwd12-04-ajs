// A pure function is a function that, given the same input, will always return the same output and has no side effects. 
// That is, the function's result is solely determined by its input parameters, and it doesn't modify any external state or have any observable interactions with the outside world.
// Pure function: no side effects, same output for the same input
num1 = 10;
num2 = 30;
// Impure function - depends on global variables
function add(){
    return num1 + num2;
}

// Pure function - self contained - does not depend on external factors and does not change anything in the external world
function add(a, b){
    return a + b;
}
add(5, 10);

// Impure function - changes values in the outside world and returs different result for same inputs
let total = 0;
function addToTotal(val) {
    total += val;
    return total;
}

console.log(addToTotal(10)); // returns 10
console.log(addToTotal(10)); // returns 20


// Impure function - changes values in the outside world
let array = [1, 2, 3];
function addToArray(element) {
    array.push(element);
    return array;
}

// Still impure function since array is a reference type
function addToArray2(arr, element) {
    arr.push(element);
    return arr;
}

// Pure function! We have created a new array it. These changes will not affect the initial array
function addToArrayPure(arr, element) {
    const newArr = [...arr];
    // const newArr = arr.slice();
    newArr.push(element);
    return newArr;
}

// Impure function. Doe not change anything from the outside world, but returns different result each time it is called
function getNumber() {
    return Math.random();
}

// Impure function because it changes the content of the elements in the DOM tree
function changeHeading() {
    document.getElementById('sample').innerHTML = 'We changed the heading!';
}
changeHeading();



