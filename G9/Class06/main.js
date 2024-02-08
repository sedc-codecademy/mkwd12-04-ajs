// When we talk about the inheritance we usually talk about inheriting from some template or schematic entities like classes. But in JavaScript, the inheritance is a bit different. JavaScript objects inherit directly from other objects. So unlike most object-oriented languages where we inherit from a class and build an object from the class, in JavaScript we only have objects and they can inherit from themselves. A similar entity to a class is the constructor function which got a new shiny overhaul in ES6

// function Vehicle(id, name, batchNo, price) {
//   this.id = id;
//   this.name = name;
//   this.batchNo = batchNo;
//   this.price = price;
//   this.company = "move.inc";
//   this.printVehicle = function () {
//     console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}$`);
//   };
// }

// let wheeledVehicle = Object.create(new Vehicle(12, "Yugo", "25B", 500));
// wheeledVehicle.drive = function () {
//   console.log("WROOM!");
// };
// let car = Object.create(wheeledVehicle);
// car.fuelTank = 32;
// car.drive(); // WROOM!
// car.printVehicle(); // Prints vehicle

// In order to inherit from another object, we have to keep the information from the parent object, the object that we inherit from. JavaScript does this in a very sneaky way. Every time we create an object, JavaScript sticks a new property to that object called \_\_proto\_\_. This prototype property keeps all the information about the object that we inherited from. This way we can use properties and methods from the object that we inherited from and also keep track of which object is inheriting from which. So if we request for a property or a method for our object, the object tries to find it in its properties and methods. If it can't it goes to the \_\_proto\_\_. If it can't find it there it goes to the \_\_proto\_\_ of the prototype and so on. We can see and access an object prototype by accessing the **\_\_proto\_\_** property of the object

// function Vehicle(id, name, batchNo, price) {
//   this.id = id;
//   this.name = name;
//   this.batchNo = batchNo;
//   this.price = price;
//   this.company = "move.inc";
//   this.printVehicle = function () {
//     console.log(
//       `${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`
//     );
//   };
// }
// function WheeledVehicle(wheels, name) {
//   this.wheels = wheels;
//   this.name = name;
//   this.drive = function () {
//     console.log(`Driving on ${this.wheels} wheels!`);
//   };
// }
// WheeledVehicle.prototype = Object.create(new Vehicle());
// let car = new WheeledVehicle(4, "Yugo");
// car.price = 500;
// car.id = 2;
// car.batchNo = "24a";
// car.printVehicle(); // prints Yugo

// // WheeledVehicle.prototype.stop = function () {
// //   console.log(`The vehicle ${this.name} stopped.`);
// // };
// // car.stop();

// WheeledVehicle.prototype.stop = function () {
//   console.log(`The vehicle ${this.name} stopped.`);
// };

// console.log(car.__proto__.__proto__.company); // move.inc
// car.stop(); // the vehicle Yugo stopped.
// car.__proto__.stop(); // The vehicle undefined stopped

// We can inherit from one entity and that entity can inherit from some other entity and so on. This process creates a chain of objects that inherit one from the other. In order for the objects to be chained like this and know the order in which they are inheriting we use the prototypes. Every object has a prototype and when we open the prototype object and that object inherited from another object as well, that object would also have a prototype. This is called a prototype chain. It is important to note that in the prototype we keep information about the object that it was inherited from. This does not mean that that object in the prototype is a new object held in memory. All prototypes are just references to the original objects in memory. So if we create a vehicle object and a car object inheriting from vehicle, the car object will have vehicle as a prototype. But it will not have a new object of vehicle, only a reference to the vehicle object

// function Vehicle(id, name, batchNo, price) {
//   this.id = id;
//   this.name = name;
//   this.batchNo = batchNo;
//   this.price = price;
//   this.company = "move.inc";
//   this.printVehicle = function () {
//     console.log(
//       `${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`
//     );
//   };
// }
// function WheeledVehicle(id, batch, price, name, wheels) {
//   //this.__proto__= Object.create(new Vehicle(id, name, batch, price));

//   Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
//   this.wheels = wheels;
//   this.drive = function () {
//     console.log(`Driving on ${this.wheels} wheels!`);
//   };
// }

// let someWheeledVehicle = new WheeledVehicle(1, "b23", 9000, "bmw", 4);
// console.log(someWheeledVehicle);
// console.log(someWheeledVehicle.name);
// someWheeledVehicle.drive();
// someWheeledVehicle.printVehicle();

function Vehicle(id, name, batchNo, price) {
  this.id = id;
  this.name = name;
  this.batchNo = batchNo;
  this.price = price;
  this.company = "move.inc";
  this.printVehicle = function () {
    console.log(
      `${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`
    );
  };
}
function WheeledVehicle(id, batch, price, name, wheels) {
  //this.__proto__= Object.create(new Vehicle(id, name, batch, price));
  Object.setPrototypeOf(this, new Vehicle(id, name, batch, price));
  this.wheels = wheels;
  this.drive = function () {
    console.log(`Driving on ${this.wheels} wheels!`);
  };
}

console.log(WheeledVehicle.prototype);
function Car(id, batch, price, name, doors, fuelCapacity) {
  //this.__proto__= Object.create(new WheeledVehicle(id, batch, price, name, 4));
  Object.setPrototypeOf(this, new WheeledVehicle(id, batch, price, name, 4));
  this.name = name;
  this.doors = doors;
  this.fuelCapacity = fuelCapacity;
  this.drift = function () {
    console.log(`The ${this.name} is drifting!`);
  };
}

console.log(Car.prototype);
let aCar = new Car(2, "b8", 1800, "someCar", 3, 34);
aCar.printVehicle(); // Prints someCar
aCar.drive(); // Drives
aCar.drift(); // Drifts

// Constructor is a function that constructs other objects by some rules and logic. These constructor functions are basically looking at a blueprint, they build the object as the blueprint requires and they return the newly created object. Objects constructed by such functions, always have a reference to the constructor function in their prototype. With this, we can always know which object was created from which constructor function. We can access the constructor of an object by going inside of its prototype. There we can find a method called **constructor**. Constructor functions have the **prototype** property. With this property, we can inherit from another constructor function

console.log(aCar.constructor);
let newVehicle = new aCar.constructor(1, "plane", "fh4", 999999);

console.log(newVehicle);
