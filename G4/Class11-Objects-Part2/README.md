# Objects pt2 🌰

## Inheritance

One of the core principles of object-oriented programming is inheritance. We use inheritance to easily create objects, organize them, and reuse properties and methods for multiple objects at a time. We do this by creating objects from a template or schematic that has most of the parts that the object needs. With this, we create an inheritance chain. The object inherits from another entity. The object has everything that the entity has. We can inherit multiple times or even from multiple templates or schematics ( classes ) depending on the language that we are using. There is no clear programming rule on which entity should inherit from which. The inheritance logic is always derived from the business logic and from the requirements of the thing that we are building. A nice example would be a vehicle company. The company works with vehicles. Every vehicle has a name, price, unique identifier, and series name. No matter the vehicle, plane, car, or bike, it will always have these properties. From the vehicle entity, we can create another entity called a wheeled vehicle. Here we can have properties like a number of wheels and other properties that are relevant for wheeled vehicles. This entity inherits from vehicle so it would also have a name, price, unique identifier, and series name. From the wheeled entity, we can create a car entity. The car entity has a number of doors and fuel capacity properties. It also has everything that wheeled vehicle and vehicle. Now we have an inheritance chain

![Inheritance Image](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/inheritance.jpg?raw=true)

## Inheritance in JavaScript

When we talk about the inheritance we usually talk about inheriting from some template or schematic entities like classes. But in JavaScript, the inheritance is a bit different. JavaScript objects inherit directly from other objects. So unlike most object-oriented languages where we inherit from a class and build an object from the class, in JavaScript we only have objects and they can inherit from themselves. A similar entity to a class is the constructor function which got a new shiny overhaul in ES6

```javascript
function Vehicle(id, name, batchNo, price) {
  this.id = id;
  this.name = name;
  this.batchNo = batchNo;
  this.price = price;
  this.company = "move.inc";
  this.printVehicle = function () {
    console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}$`);
  };
}

let wheeledVehicle = Object.create(new Vehicle(12, "Yugo", "25B", 500));
wheeledVehicle.drive = function () {
  console.log("WROOM!");
};
let car = Object.create(wheeledVehicle);
car.fuelTank = 32;
car.drive(); // WROOM!
car.printVehicle(); // Prints vehicle
```

With the create method, we create a new object that inherits from the object given

## Prototypes

In order to inherit from another object, we have to keep the information from the parent object, the object that we inherit from. JavaScript does this in a very sneaky way. Every time we create an object, JavaScript sticks a new property to that object called \_\_proto\_\_. This prototype property keeps all the information about the object that we inherited from. This way we can use properties and methods from the object that we inherited from and also keep track of which object is inheriting from which. So if we request for a property or a method for our object, the object tries to find it in its properties and methods. If it can't it goes to the \_\_proto\_\_. If it can't find it there it goes to the \_\_proto\_\_ of the prototype and so on. We can see and access an object prototype by accessing the **\_\_proto\_\_** property of the object

```javascript
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
function WheeledVehicle(wheels, name) {
  this.wheels = wheels;
  this.name = name;
  this.drive = function () {
    console.log(`Driving on ${this.wheels} wheels!`);
  };
}
WheeledVehicle.prototype = Object.create(new Vehicle());
let car = new WheeledVehicle(4, "Yugo");
car.price = 500;
car.id = 2;
car.batchNo = "24a";
car.printVehicle(); // prints Yugo
```

#### Adding methods on to the prototype

```javascript
WheeledVehicle.prototype.stop = function () {
  console.log(`The vehicle ${this.name} stopped.`);
};
car.stop(); // the car Yugo stopped.
```

#### Accessing prototype

```javascript
WheeledVehicle.prototype.stop = function () {
  console.log(`The vehicle ${this.name} stopped.`);
};

console.log(car.__proto__.__proto__.company); // move.inc
car.stop(); // the vehicle Yugo stopped.
car.__proto__.stop(); // The vehicle undefined stopped
```

### The prototype chain

We can inherit from one entity and that entity can inherit from some other entity and so on. This process creates a chain of objects that inherit one from the other. In order for the objects to be chained like this and know the order in which they are inheriting we use the prototypes. Every object has a prototype and when we open the prototype object and that object inherited from another object as well, that object would also have a prototype. This is called a prototype chain. It is important to note that in the prototype we keep information about the object that it was inherited from. This does not mean that that object in the prototype is a new object held in memory. All prototypes are just references to the original objects in memory. So if we create a vehicle object and a car object inheriting from vehicle, the car object will have vehicle as a prototype. But it will not have a new object of vehicle, only a reference to the vehicle object

```javascript
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
let aCar = new Car(2, "b8", 1800, "someCar", 3, 34);
aCar.printVehicle(); // Prints someCar
aCar.drive(); // Drives
aCar.drift(); // Drifts
```

#### Check for some object's prototype

```javascript
Object.getPrototypeOf(aCar); // Prototype
```

### Constructor

Constructor is a function that constructs other objects by some rules and logic. These constructor functions are basically looking at a blueprint, they build the object as the blueprint requires and they return the newly created object. Objects constructed by such functions, always have a reference to the constructor function in their prototype. With this, we can always know which object was created from which constructor function. We can access the constructor of an object by going inside of its prototype. There we can find a method called **constructor**. Constructor functions have the **prototype** property. With this property, we can inherit from another constructor function

```javascript
console.log(aCar.constructor);
let newVehicle = new aCar.constructor(1, "plane", "fh4", 999999);
```

## Extra materials 📘

- [Prototypes explained](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)
- [Inheritance in JavaScript](https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2)

# Objects pt3 🥜

## Classes in JavaScript

Inheritance with prototypes can be a hassle. JavaScript was not built with object-oriented functionalities in mind from the beginning and it was pretty hard to work with prototypes. This is why in ES6 JavaScript finally got classes and object-oriented features. From that point forward we can use classes instead of constructor functions and use inheritance and constructors very easily. We could also access the parent constructor pretty easy as well. This is a huge change for the language that made developer's lives very easy. So classes are just like constructor classes but they are written in a different manner and have a few neat features. They can be created by just writing the keyword **class**. Note that these changes did not change how JavaScript, the new classes still work with prototypes behind the scenes. It is just better structured and made easier and more convenient to use

```javascript
class Vehicle {
  constructor(id, name, batch, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batch;
    this.price = price;
    this.company = "move.inc";
  }
  printVehicle() {
    console.log(
      `${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`
    );
  }
}
let boat = new Vehicle(33, "Boat", "2z3", 50000);
console.log(boat);
boat.printVehicle();
```

## Inheritance with classes

When using inheritance with prototypes in JavaScript, we needed to do a lot of the connecting and setting up by ourselves. But when using classes this has changed. We can now inherit very easily with one keyword. When creating classes we can just add the **extends** keyword next to the class name and write another class. This will tell the class that we are creating that it inherits from the class after the extends keyword. Nothing to connect or write extra code, it connects by itself

```javascript
class WheeledVehicle extends Vehicle {
  constructor(id, name, batch, price, wheels) {
    super(id, name, batch, price);
    this.wheels = wheels;
  }
  driveVehicle() {
    console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`);
  }
}
let bike = new WheeledVehicle(87, "Bike", "12g", 700, 2);
console.log(bike);
bike.printVehicle();
bike.driveVehicle();
console.log(Object.getPrototypeOf(bike));
```

## Constructors

Classes also contain a keyword for their constructor. We can use it to dictate what the person needs to enter when they try and create a new instance of an object from the class. This can be done with the **constructor()** keyword. We can also access the constructor of the parent if we inherit from another class. This can be written inside the constructor with the keyword **super()**. Inside the super constructor, we can pass values as we would pass for the constructor of the parent class

```javascript
class Car extends WheeledVehicle {
  constructor(id, name, batch, price, doors, ac) {
    super(id, name, batch, price, 4);
    this.doors = doors;
    this.airConditioning = ac;
    if (ac) this.price += 400;
  }
  buyCar(money) {
    money >= this.price
      ? console.log("Congrats! You bought a car")
      : console.log(`You need ${this.price - money} more to buy this car!`);
  }
}
let car = new Car(99, "Car", "22k", 7800, 4, false);
console.log(car);
car.printVehicle();
car.driveVehicle();
car.buyCar(5000);
console.log(Object.getPrototypeOf(car));
```

## Static methods

When we write methods in a class, the methods are stored in the prototype. These functions can be called only if we create an object from the class. But if we want to create a method on the class itself, that can be called without creating an object, we can with the keyword **static**. The static methods are great for creating utility and service methods on the class itself

```javascript
class Car extends WheeledVehicle {
  constructor(id, name, batch, price, doors, ac) {
    super(id, name, batch, price, 4);
    this.doors = doors;
    this.airConditioning = ac;
    if (ac) this.price += 400;
  }
  buyCar(money) {
    money >= this.price
      ? console.log("Congrats! You bought a car")
      : console.log(`You need ${this.price - money} more to buy this car!`);
  }
  static addAc(car) {
    if (!car.airConditioning) {
      car.airConditioning = true;
      car.price += 400;
      console.log(`The car has AC now and it costs ${car.price}`);
    } else {
      console.log(`The car already has AC!`);
    }
  }
}
```

## Get / Set

Getters and Setters are not a new concept in programming. When we create properties on objects there are two things that can happen after we create the object: try and get a value from a property or try to set a value to a property. There are functions that handle the getting and setting of these properties behind the scenes and we can use them in classes if we need to change the way we get or set a property. This is useful when we want to validate something on setting or log something on setting or getting. We can also structure the data that comes from our getter or setter

```javascript
class ElectricCar extends Car {
  constructor(id, name, batch, price, doors, owner) {
    super(id, name, batch, price, doors, true);
    this.owner = owner;
  }
  get owner() {
    console.log("We are getting the name of the owner. Please wait...");
    return "The car is owned by:" + this._owner;
  }
  set owner(ownerName) {
    console.log("We are setting the name of the owner. Please wait...");
    ownerName.length > 1
      ? (this._owner = ownerName)
      : (() => {
          throw new Error("Owner name too short!");
        })();
  }
}

let myElectricCar = new ElectricCar(12, "Tesla", "23n", 30000, 5, "Petko");
console.log(myElectricCar);
console.log(myElectricCar.owner);
let myOtherElectricCar = new ElectricCar(13, "Electra", "51q", 25000, 3, "I");
```

#### Check if an object is an instance of a class

```javascript
console.log(myElectricCar instanceof ElectricCar);
console.log(myElectricCar instanceof Car);
console.log(myElectricCar instanceof Vehicle);
```

## Organizing code in separate scripts

JavaScript as a language has long been a language executed in the browser, and most of the time, the files were divided in different scripts which were loaded one by one. This made a chain of scripts executed with the developers foresight of what classes and functions were actually needed in each and every one of them. The rise of JavaScript as a back-end made the need for a better system. So the idea of importing and exporting modules became a thing. So now, with this feature we can actually divide our code in different scripts and export or import functions, values and objects wherever we need them. The system is simple. We divide the code in multiple js files. We export only the things that we want to expose to other files. We import whatever we need from those files. We use the imported functions, objects or values.

> Note: The main script needs to have type="module" in order for this to work
> Note: The system does not work locally, so you would have to use some local server. You can try Live Server for Visual Studio Code

#### Folder Structure

```txt
index.html
script.js
modules
-- messageService.js
-- sayService.js
```

#### index.html

```html
<script type="module" src="script.js"></script>
```

#### script.js

```js
import { sayHello, sayGoodbye } from "./modules/sayService.js";

sayHello("Bob");
console.log("How are ya?");
sayGoodbye("Bob");
```

#### modules/messageService.js

```js
// Exporting can be done bundled together
export { words, getRandomWord };

let words = {
  helloVariatns: ["Hey", "Hi", "Hello", "Yo"],
  goodbyeVariants: ["Bye", "Goodbye", "Cheers", "Peace"],
};

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}
```

#### modules/sayService.js

```js
// Exporting can be done separately
import { getRandomWord, words } from "./messageService.js";

export function sayHello(name) {
  let hello = "Hey";
  console.log(`${getRandomWord(words.helloVariatns)} there ${name}!`);
}

export function sayGoodbye(name) {
  let bye = "Bye";
  console.log(`${getRandomWord(words.goodbyeVariants)} there ${name}!`);
}
```

## Extra materials 📘

- [Class syntax explained](https://javascript.info/class)
- [From prototypes to Classes](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
- [JavaScript classes under the hood](https://medium.com/tech-tajawal/javascript-classes-under-the-hood-6b26d2667677)
- [Documentation on exporting and importing modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
