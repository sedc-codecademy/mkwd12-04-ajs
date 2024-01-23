let fun1 = function(){
    console.log("Hello");
}

fun1();


let array = [1, 2, 3, function(){
    return 2 + 2;
}(), 5, 6];

console.log(array);
console.log(array[3]);

//Arrow fun

let fun2 = () => console.log("Hello");

fun2();


let sum = num => num + 1;

console.log(sum(2));


let sum1 = (num1, num2) => num1 + num2;

console.log(sum1(2,4));

let sumFun = (num1, num2)=>{
    let result = num1 + num2;
    return result;
}

console.log(sumFun(2,2));

let ternary = num => num === 0 ? 0 : num+1;

console.log(ternary(0));

// Self invoked fun

(()=>{
    let result = 5;
    console.log(result);
})();

(function (num1, num2){
    console.log(num1 - num2);
})(6,2)

let result2 = (function (num1, num2){
    return num1 * num2;
})(4,5);

console.log(result2);

