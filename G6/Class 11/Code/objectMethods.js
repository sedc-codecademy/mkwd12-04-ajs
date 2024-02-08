//create
let dog = {
    isHappy: true,
    bark: function(){
        console.log("AF AF");
    }
}
console.log(dog);

let barnie = Object.create(dog);
console.log(barnie);

barnie.name = "Barnie";
console.log(dog);
console.log(barnie);

//assign
let addressInfo ={
    street: "Dog street",
    streetNumber: 50
};

console.log(dog.street)
//the first param is the object that gets all the prop and methods from the obj passed as second param
let dogUpdate = Object.assign(dog, addressInfo); //the dog will have the its own prop plus the same prop as address info
console.log(dog);
console.log(addressInfo);
console.log(dogUpdate); //dogUpdated and dog are referencing the same object

dogUpdate.isHappy = false; //it will affect dog

//Object.assign(dog, addressInfo)


//Keys - the name of the keys of our key-value pairs (of all members (prop or methods))

let sparky = {
    name: "Sparky",
    age: 3,
    isHappy: true,
    bark: function(){
        console.log("AF AF");
    }
}

console.log(Object.keys(sparky));
console.log(Object.keys(sparky)[2]);

sparky.age = 4;
console.log(sparky.age);

sparky['age'] = 6;
console.log(sparky.age);

sparky[Object.keys(sparky)[1]] = 8;
console.log(sparky.age);

//values - the values of all members (prop or methods)

sparky.printValues = function(){
    Object.values(this).forEach(v => console.log(v));
}

sparky.printValues();
console.log(Object.values(sparky)[2]);
Object.values(sparky)[1];
Object.values(sparky)[3]();


//FREEZE
let doggy = {
    name: "Barnie",
    friend: "Sparky"
}

Object.freeze(doggy); //we lock the object - we cannot add new prop or methods and we cannot change the values of properties or methods

doggy.friend = "Amy";
console.log(doggy.friend); //Sparky
doggy.age = 5;
console.log(doggy.age); //undefined


//SEAL

let d ={
    name:"Sparky",
    friend: "Amy"
}

Object.seal(d);
d.friend = "Barnie"; //we can change the values of methods and properties
console.log(d.friend); //Barnie

d.age = 6; //but we cannot add new properties or methods (we cannot change the structure of the object)
console.log(d.age); //undefined