//BY VALUE

let num1 = 5;
let num2 = num1;

num2 = 77;
console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);

function changeValue(num){
    num = 10;
    console.log(`num: ${num}`);
}
changeValue(num1); //let num = num1; num = 10;
console.log(`num1: ${num1}`);

let firstString = "test1";
let secondString = firstString;
firstString = "test2";
console.log(`firstString ${firstString}`);
console.log(`secondString ${secondString}`);


//BY REF
let firstObject = {
    firstProperty : "message 1"
};
let secondObject = firstObject;
secondObject.firstProperty = "updated message";

console.log("firstObject:");
console.log(firstObject);
console.log("secondObject:");
console.log(secondObject);

let obj1 = {
    number : 22
};

function changeObject(obj){
    obj.number = 55;
    console.log(obj);
}
changeObject(obj1); //let obj = obj1; obj.number = 55;
console.log(obj1);

