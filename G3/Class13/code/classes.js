console.log("============== CLASSES =============");

// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.printVehicle = function () {
//         console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
//     }
// }

// const vehicle = new Vehicle(1, "Yugo", "32s", "500");
// constructor() // ERROR
class Vehicle {
    constructor(id, name, batchNo, price) {
        console.log("Hello from constructor method");
        // defining our properties
        this.id = id;
        this.name = name;
        this.batchNo = batchNo;
        this.price = price;
    }
    // defining our methods
    printVehicle() {
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}$`);
    }
}

const vehicle = new Vehicle(1, "Yugo", "32s", "500");
vehicle.printVehicle();

const boat = new Vehicle(2, "Boat", "fds34", 50_000);



console.log("");
console.log("============== Inheritance with classes =============");

// ===> Inhertiance using constructor function
// function WheeledVehicle(id, batch, price, name, wheels) {
//     //this.__proto__= Object.create(new Vehicle(id, name, batch, price));
//     Object.setPrototypeOf(this, new Vehicle(id, name, batch, price))
//     this.wheels = wheels;
//     this.drive = function () {
//         console.log(`Driving on ${this.wheels} wheels!`);
//     }
// }

// ===> Inheritance using CLASSES

class WheeledVehicle extends Vehicle {
    constructor(id, batch, price, name, wheels) {
        super(id, name, batch, price);
        // this.id = id;
        // this.name = name;
        // this.batchNo = batchNo;
        // this.price = price;
        this.wheels = wheels;
    }
    drive() {
        console.log(`Driving on ${this.wheels} wheels`);
    }
}

// debugger;
const bike = new WheeledVehicle(12, "fd34", 500, "Bike", 2)



console.log("");
console.log("============== Static methods =============");

class Car extends WheeledVehicle {
    constructor(id, batch, price, name, doors, ac) {
        super(id, batch, price, name, 4);
        this.doors = doors;
        this.airConditioning = ac;
        if (ac) {
            this.price += 400;
        }
    }
    buyCar(money) {
        money > this.price ? console.log("So zdravje da si ja vozis :)") : console.log("Nemas dovolno $")
    }
    static addAC(car) {
        if (!(car instanceof Car)) {
            throw new Error("Invalid argument!")
        }
        if (car.airConditioning) {
            console.log("The car already has AC!");
        } else {
            car.airConditioning = true;
            car.price += 400;
            console.log(`The car has now AC and the new price is ${car.price}`);
        }
    }
}

const audiA3 = new Car(7, "fdf20", 20_000, "Audi A3", 5, true);
const mustang = new Car(55, "fk2020", 50_000, "Ford Mustang", 2, false);
// audiA3.addAC(mustang) // will work if the method is not static, but it's total non-sense
Car.addAC(mustang)
// Car.addAC("mustang")

// *** Check if object is an instance of a class ***
console.log(mustang instanceof Car);
console.log(mustang instanceof WheeledVehicle);
console.log(mustang instanceof Vehicle);
console.log("Toyota" instanceof Car);



console.log("");
console.log("============== Get / Set =============");

class ElectricCar extends Car {
    constructor(id, batch, price, name, doors, ac, owner) {
        super(id, batch, price, name, doors, ac);
        this.owner = owner;
        this.readOnly = "This is a readonly property!";
    }
    get owner() {
        console.log("Hello from owner GETTER");
        return this._owner;
    }
    set owner(ownerValue) {
        if (ownerValue.length <= 2) {
            throw new Error("Invalid name!!! Value " + ownerValue)
        }
        console.log(`Hello from owner SETTER! Value: ${ownerValue} is not a name`);
        this._owner = ownerValue;
    }

    set readOnly(value) {
        if (this.readOnly) {
            console.error("READONLY E !!!");
            return;
        }
        this._readOnly = value;
    }
    get readOnly() {
        return this._readOnly;
    }
}

const tesla = new ElectricCar(11, "2023A", 80_000, "Tesla Model S", 4, true, "John Doe");


const nissan = new ElectricCar(22, "2022e", 30_000, "Nissan Leaf", 4, true, "Jane");


