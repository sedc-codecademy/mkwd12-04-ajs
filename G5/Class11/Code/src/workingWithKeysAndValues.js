let dog = {
    name: "Sparky",
    age: 4,
    isHappy: true,
    bark: function(){
        console.log("The dog is barking");
    },
    printKeys: function(){
        console.log("Print the names of the members:");
        Object.keys(this).forEach(key => console.log(key));
    },
    printValues: function(){
        console.log("Print the values of the members:");
        let values = Object.values(this);
        Object.values(this).forEach(v => console.log(v));
    }
}

Object.keys(dog)[2];

//check if an object contains a member (property or method) with a given name
console.log("Dog object has a member named bark:")
console.log(dog.hasOwnProperty("bark"));
console.log("Dog object has a member named age:")
console.log(dog.hasOwnProperty("age"));
console.log("Dog object has a member named favouriteFood:")
console.log(dog.hasOwnProperty("favouriteFood"));

dog.printKeys();
dog.printValues();


console.log("====FREEZE====")
//stop changes of values and structure of an object
let barnie = {
    name: "barnie",
    age: 20
}

Object.freeze(barnie);
barnie.name = "Sparky";
barnie.isHappy = true;
console.log(barnie);


console.log("====SEAL====")
//can not change structure
let sparky = {
    name: "Sparky",
    age: 7
}

Object.seal(sparky);
sparky.age = 5; //allowed
sparky.isHappy = true; //not allowed

console.log(sparky);