let array1 = [10, 4, 5, 2];
let array2 = array1; //pass by reference
array2[0] = 12321;
console.log(array1);
console.log(array2);

array1[1] = 777777;
console.log(array1);
console.log(array2);


//BY VALUE
let a = 5;
let b = a;
console.log(`a: ${a}`);
console.log(`b: ${b}`);
b = 77;
console.log("after update");
console.log(`a: ${a}`);
console.log(`b: ${b}`);

//BY REF
let obj1 = {
    prop1 : "Test1"
};
let obj2 = obj1;
obj2.prop1 = "Updated test";
console.log(obj1);
console.log(obj2);


