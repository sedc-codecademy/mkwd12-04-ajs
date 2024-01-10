//generate an array with all numbers from 1 to 1000 divisible by 3

let divisibleByThree = [];
let divisibleByFour = [];
let divisibleByThreeAndSix = [];
let divisibleByThreeOrSix = [];
let lastDigitIsOne = [];

//we need to count from 1 to 1000
for(let i = 1; i<=1000; i++)
{
    //in each iteration we need to check if the value of i is divisible by 3
    //if it is, we need to add it to the array divisibleByThree
    if(i % 3 == 0){
        divisibleByThree.push(i);
    }

    //in each iteration we also need to check if the value of i is divisible by 4
    //if it is, we need to add it to the array divisibleByFour too
    if(i % 4 == 0){
        divisibleByFour.push(i);
    }

    //all values that are divisible by 3 and 6 at the same time
    if(i % 3 == 0 && i % 6 == 0){
        divisibleByThreeAndSix.push(i);
    }

    //all values that are divisible by 3 OR 6 
    if(i % 3 == 0 || i % 6 == 0){
        divisibleByThreeOrSix.push(i);
    }

    //check if the last digit is 1
    if(i % 10 == 1){
        lastDigitIsOne.push(i);
    }

}


console.log("=====All numbers divisble by three======");
console.log(divisibleByThree);

console.log("=====All numbers divisble by four======");
console.log(divisibleByFour);

console.log("=====All numbers with one as last digit======");
console.log(lastDigitIsOne);

// for(let num of divisibleByThree){
//     console.log(num);
// }

