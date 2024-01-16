let testArray = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22]
function cleanAllButStrings(inputArray) {
    let result = [];
    for (let item of inputArray) {
      if (typeof item === "string") {
        result.push(item);
      }
    }
    return result;
  }
  
  console.log(cleanAllButStrings(testArray));
  
  function cleanAllButNumbers(inputArray) {
    let numberArray = [];
    for (let item of inputArray) {
      if (typeof item === "number") {
        numberArray.push(item);
      }
    }
    return numberArray;
  }
  
  console.log(cleanAllButNumbers(testArray));
  
  //more optimal way is to do the cleaning with one for and three arrays as in the
  //first exercise

function cleanAllFalsyValue(inputArray) {
    let cleanedArray = [];

    for (let item of inputArray) {
        if (item) {
            cleanedArray.push(item);
        }
    }

    return cleanedArray;
}
console.log(cleanAllFalsyValue(testArray));