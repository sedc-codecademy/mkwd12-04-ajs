num1 = 10;
num2 = 30;
// impure function
function add(){
    return num1 + num2;
}

// pure function
function add(a, b){
    return a + b;
}
add(5, 10);

let total = 0;
function addToTotal(val) {
    total += val;
    return total;
}

console.log(addToTotal(10));
console.log(addToTotal(10));

let array = [1, 2, 3];
function addToArray(element) {
    array.push(element);
    return array;
}

function addToArray2(arr, element) {
    arr.push(element);
    return arr;
}

// pure!
function addToArrayPure(arr, element) {
    const newArr = [...arr];
    // const newArr = arr.slice();
    newArr.push(element);
    return newArr;
}

function getNumber() {
    return Math.random();
}

// impure function 
function changeHeading() {
    document.getElementById('sample').innerHTML = 'We changed the heading!';
}
changeHeading();



