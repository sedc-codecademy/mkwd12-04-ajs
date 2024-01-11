// Create a function that cleans an array of any values and leaves only STRINGS
// Create a function that cleans an array of any values and leaves only NUMBERS

function cleanAllButStrings(array){
    let result = [];
    for(let item of array){
        if(typeof(item) == "string"){
           result.push(item);
        }
    }

    return result;
}

console.log(cleanAllButStrings([true, 12, "Tijana", "G6", 1, false, undefined, "Roze", "Jana", 100, 333, 11]));

function cleanAllButNumbers(array){
    let result = [];
    for(let item of array){
        if(typeof(item) == "number"){
           result.push(item);
        }
    }

    return result;
}

let resultOfFunction = cleanAllButNumbers([true, 12, "Tijana", "G6", 1, false, undefined, "Roze", "Jana", 100, 333, 11]);
console.log(resultOfFunction);