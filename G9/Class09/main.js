import { sayHello, sayGoodbye } from "./moduls/sayService.js";

sayHello("Bob");
console.log("How are ya?");
sayGoodbye("Bob");

// function Car(name,model,price){
//     this.name = name
//     this.model = model
//     this.price = price
//     this.drive = function(){
//         console.log(this.name + " is driving")
//     }
// }

// class Car {
//     constructor(name,model,price){
//         this.name = name
//         this.model = model
//         this.price = price
//     }

// }

// class Vehicle {
//   constructor(id, name, batch, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batch;
//     this.price = price;
//     this.company = "move.inc";
//   }
//   printVehicle() {
//     console.log(
//       `${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`
//     );
//   }
// }
// let boat = new Vehicle(33, "Boat", "2z3", 50000);
// console.log(boat);
// boat.printVehicle();

// class WheeledVehicle extends Vehicle {
//   constructor(id, name, batch, price, wheels) {
//     super(id, name, batch, price);
//     this.wheels = wheels;
//   }
//   driveVehicle() {
//     console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`);
//   }
// }
// let bike = new WheeledVehicle(87, "Bike", "12g", 700, 2);
// console.log(bike);
// bike.printVehicle();
// bike.driveVehicle();
// console.log(Object.getPrototypeOf(bike));

// class Car extends WheeledVehicle {
//   constructor(id, name, batch, price, doors, ac) {
//     super(id, name, batch, price, 4);
//     this.doors = doors;
//     this.airConditioning = ac;
//     if (ac) this.price += 400;
//   }
//   buyCar(money) {
//     money >= this.price
//       ? console.log("Congrats! You bought a car")
//       : console.log(`You need ${this.price - money} more to buy this car!`);
//   }
//   static addAc(car) {
//     if (!car.airConditioning) {
//       car.airConditioning = true;
//       car.price += 400;
//       console.log(`The car has AC now and it costs ${car.price}`);
//     } else {
//       console.log(`The car already has AC!`);
//     }
//   }
// }

// let car = new Car(99, "Car", "22k", 7800, 4, false);
// console.log(car);
// Car.addAc(car);
// console.log(car);

// class ElectricCar extends Car {
//   constructor(id, name, batch, price, doors, owner) {
//     super(id, name, batch, price, doors, true);
//     this.owner = owner;
//   }
//   get owner() {
//     console.log("We are getting the name of the owner. Please wait...");
//     return "The car is owned by:" + this._owner;
//   }
//   set owner(ownerName) {
//     console.log("We are setting the name of the owner. Please wait...");
//     ownerName.length > 1
//       ? (this._owner = ownerName)
//       : (() => {
//           throw new Error("Owner name too short!");
//         })();
//   }
// }

// let myElectricCar = new ElectricCar(12, "Tesla", "23n", 30000, 5, "Petko");
// // console.log(myElectricCar);
// // console.log(myElectricCar.owner);
// // let myOtherElectricCar = new ElectricCar(13, "Electra", "51q", 25000, 3, "I");

// console.log(myElectricCar instanceof ElectricCar);
// console.log(myElectricCar instanceof Car);
// console.log(myElectricCar instanceof Vehicle);
