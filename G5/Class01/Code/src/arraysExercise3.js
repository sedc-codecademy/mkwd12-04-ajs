//[1, 2, false, 0, NaN, null, "SEDC"];

function cleanAllFalsyValues(inputArray){

    //we need a result array

    //we need to go through the input array

    //for each member of input array check if it is truthy

    let result = [];
    for(let item of inputArray){
        if(item){ //if this if is fulfilled then item has truthy value at the moment
            result.push(item);
        }
    }

    return result;
}

let cleanedArray = cleanAllFalsyValues([1, 2, false, 0, NaN, null, "SEDC"]);
console.log(cleanedArray);

let cleanedArray2 = cleanAllFalsyValues(["", 5, 2, false, 0, NaN, null, "SEDC", []]);
console.log(cleanedArray2);