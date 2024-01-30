//BY VALUE
//numbers, strings, booleans...
let a = 5;
console.log(a); //5
let b = a;
console.log(b);//5
a = 3;
console.log(a); // 3
console.log(b); // 5

//BY REF
//arrays and objects

let obj1 = {
    prop1: "Test1"
};

console.log(obj1);


let obj2 = obj1;
console.log(obj2);

obj2.prop1 = "Updated test";

console.log(obj1);
console.log(obj2);


let array1 = [10, 4, 5, 2];
let array2 = array1; //by ref

array2[0] = 5;
console.log(array1);
console.log(array2);

array1[1] = 7777;
console.log(array1);
console.log(array2);
