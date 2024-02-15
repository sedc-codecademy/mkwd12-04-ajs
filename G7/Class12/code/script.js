class Vehicle {
    constructor(id, name, batch, price) {
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
    }

    printVehicle() {
        console.log(`${this.name}, Batch: ${this.batch}, price: ${this.price}`);
    }
}


let boat = new Vehicle(1, "Boat", "asd23", 500000);
console.log(boat);
boat.printVehicle();

// inheritance with classes

class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels) {
        super(id, name, batch, price)

        this.wheels = wheels;
    }

    driveVehicle() {
        console.log(`We are driving the ${this.name} on ${this.wheels} wheels`)
    }
}

let bike = new WheeledVehicle(2, "Honda", "123dd", 10000, 2);
console.log(bike);

bike.printVehicle();
bike.driveVehicle();

console.log(Object.getPrototypeOf(bike));


// -------- static properties and methods -----------

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, wheels, engineType, ac) {
        super(id, name, batch, price, wheels)

        this.engineType = engineType
        this.ac = ac

        if(ac) this.price += 500
    }

    // polymorphism
    printVehicle() {
        console.log(`We are driving the ${this.name} on ${this.wheels}, it has engine type ${this.engineType} and it costs ${this.price}`);
    }

    buyCar(money) {
        money >= this.price ? console.log("Congrats, you bought the car") : console.log(`You need ${this.price - money} to buy the car`)
    }

    static addAc(car) {
        if(!car.ac) {
            car.ac = true;
            car.price += 400;
            console.log("AC has been installed succefully")
        } else {
            console.log("The car already has AC")
        }
    }
    
}


let myCar = new Car(4, "Ford", "22ffs", 10000, 4, "diesel", true);

console.log(myCar);

myCar.buyCar(11000);
myCar.printVehicle();
// bike.printVehicle();

Car.addAc(myCar);

let yugo = new Car(55, "Yugo", "44gh", 300, 4, "petrol", false)

Car.addAc(yugo);

console.log(yugo);


class Calculations {
    static pi = 3.14;

    static sum(num1, num2) {
        return num1 + num2
    }

    static diff(num1, num2) {
        return  num1 - num2
    }
}

console.log(Calculations.pi);
console.log(Calculations.sum(1, 3));
console.log(Calculations.diff(5, 2));


// Getter and Setter

class ElectricCar extends Car {
    constructor(id, name, batch, price, wheels, engine, ac, owner) {
        super(id, name, batch, price, wheels, engine, ac);

        this.owner = owner;
    }

    get owner() {
        console.log("We are getting the name of the owner!")
        return `The owner of this car is ${this._owner}`
        // return this._owner
    }

    set owner(ownerName) {
        console.log("We are setting the name of the owner!")
        ownerName.length > 3 ? this._owner = ownerName : (() => {throw new Error("The name is too short")})()
    }

}


let myElectricCar = new ElectricCar(77, "Toyota", "gok32", 50000, 4, "hybrid", true, "Aleksandar");

console.log(myElectricCar);
console.log(myElectricCar.owner);

// let teslaCar = new ElectricCar(99, "Tesla", "ff11", 60000, 4, "electric", true, "Bob");
// teslaCar.owner;







