//Clean the array from falsy values

let mixedArray = [false, "test", [1,2], 0, true, "", 10];

let cleanedArray =[];
let falsyArray =[];
for(let item of mixedArray){
    if(item){
        cleanedArray.push(item);
    }

    if(!item){   //you can do this with else
        falsyArray.push(item); 
    }
}

console.log(cleanedArray);
console.log(falsyArray);