//we need to have function that can clean any array 
let arr1 = [1, 2, 3, "SEDC"]

let arr2 = [true, "Ana", "Ivan", [1, 2]]

function cleanArrayFromAllButStrings(inputArray){
   
    // we want for example from [1, 2, 3, "SEDC"] to get ["SEDC"]
    //1. we need to go through inputArray
    //2. we must check each member if it is a string
    //3. if it is a string, add it to some result  array

    let result = [];
    for(let input of inputArray){
        if(typeof input === "string"){
            result.push(input);
        }
    }

    for(let i =0 ; i< inputArray.length; i++){
        if(typeof inputArray[i] === "string"){
            result.push(inputArray[i]);
        }
    }

    return result;
}

let firstResult = cleanArrayFromAllButStrings(arr1); //arr1 will come as inputArray cleanArrayFromAllButStrings([1, 2, 3, "SEDC"])
console.log(firstResult);

let secondResult = cleanArrayFromAllButStrings(arr2); //arr2 will come as inputArray
console.log(secondResult);

