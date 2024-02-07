let dog = {
    name : "Barnie",
    isHappy: true,
    bark: function(){
        console.log("The dog is barking");
    }
}

//copy -> different reference, new object in memory
let copiedDog = Object.create(dog);
console.log("Dog:");
console.log(dog);
console.log("Copied dog:");
console.log(copiedDog);

copiedDog.isHappy = false;
copiedDog.age = 4;

console.log(`Dog is happy: ${dog.isHappy}`);
console.log(`Copied dog is happy: ${copiedDog.isHappy}`);
console.log(`Dog age: ${dog.age}`);
console.log(`Copied dog age: ${copiedDog.age}`);

//anotherCopy is copy of copiedDog, they are with different references
let anotherCopy = Object.create(copiedDog);
console.log(`anotherCopy is happy: ${anotherCopy.isHappy}`);
console.log(`anotherCopy age: ${anotherCopy.age}`);

let addressInfo = {
    streetName: "Dog street",
    streetNumber: 10
}

let dogWithAddressInfo = Object.assign(anotherCopy, addressInfo);
console.log(dogWithAddressInfo);

//dogWithAddressInfo and anotherCopy have the same reference
console.log(anotherCopy.streetName);
console.log(dogWithAddressInfo.streetName);

anotherCopy.streetName = "Dog street 2";

console.log(anotherCopy.streetName);
console.log(dogWithAddressInfo.streetName);