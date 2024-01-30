console.log("============= VALUE TYPE =============");
// primitive values (string, number, boolean, null, undefined) are value types
// both *variable* and *value* are stored in the memory STACK
// when you assign a value type to another variable, a copy of the value is made

let valueTypeVariable = "This is a string";
let newValueTypeVariable = valueTypeVariable;
newValueTypeVariable = "This is a NEW string";

console.log(valueTypeVariable); // This is a string
console.log(newValueTypeVariable); // This is a NEW string

console.log("============= REFERENCE TYPE =============");
// complex datatypes (objects, arrays, functions etc..)
// the *variable* is stored in the STACK, the *value* in the HEAP
// when you assign a reference type to another variable, you are copying the reference, not the actual value

let personObject = {
    id: 1,
    firstName: "Bob",
    lastName: "Bobsky",
    // this won't work => arrow function in an object behaves differently (this in arrow function points to the global object)
    // printFullName: () => console.log(`${this.firstName} ${this.lastName}`)
    printFullName: function () { console.log(`${this.firstName} ${this.lastName}`) }
}

let newPersonObject = personObject;
newPersonObject.firstName = "Pink";
newPersonObject.lastName = "Panther";

personObject.printFullName(); // Pink Panther
newPersonObject.printFullName(); // Pink Patnher

// Example with array
let testArray = [1, 2, 3, 4];
function addItemToArray(array, item) {
    array.push(item);
}
addItemToArray(testArray, 100);
console.log(testArray);
