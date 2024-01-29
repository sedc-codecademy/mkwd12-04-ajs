console.log("============= VALUE TYPE =============");

let valueTypeVariable = "This is a string";
let newValueTypeVariable = valueTypeVariable;
newValueTypeVariable = "This is a NEW string";

console.log(valueTypeVariable); // This is a string
console.log(newValueTypeVariable); // This is a NEW string

console.log("============= REFERENCE TYPE =============");

let personObject = {
    id: 1,
    firstName: "Bob",
    lastName: "Bobsky",
    // printFullName: () => console.log(`${this.firstName} ${this.lastName}`)
    printFullName: function () { console.log(`${this.firstName} ${this.lastName}`) }
}

let newPersonObject = personObject;
newPersonObject.firstName = "Pink";
newPersonObject.lastName = "Panther";

personObject.printFullName();
newPersonObject.printFullName();

// Example with array
let testArray = [1, 2, 3, 4];
function addItemToArray(array, item) {
    array.push(item);
}
addItemToArray(testArray, 100);
console.log(testArray);
