console.log("tuka sme");

class Vehicle {
    constructor(id, name, batch, price) {
        // console.log(this);
        this.id = id;
        this.name = name;
        this.batchNo = batch;
        this.price = price;
    }

     printVehicle() {
        console.log(`${this.id}. ${this.name}, BATCH: ${this.batchNo}, ${this.price}`);
    }
}

let boat = new Vehicle(33, "Boat", "saH3D5", 50000);
// console.log(boat);
// boat.printVehicle();

class WheeledVehicle extends Vehicle {
    constructor(id, name, batch, price, wheels = 12) {
        super(id, name, batch, price);
        this.wheels = wheels;
        console.log(this);
    }

    driveVehicle() {
        console.log(`We are driving a ${this.name} on ${this.wheels} wheels!`)
    }
};

let bike = new WheeledVehicle(87, "Bike", "123b3h2g", 250, 2);
// console.log(bike.printVehicle);
// bike.printVehicle();
// bike.driveVehicle();
// boat.printVehicle();
// console.log(Object.getPrototypeOf(bike))
// boat.driveVehicle(); //ova ne raboti!

class Car extends WheeledVehicle {
    constructor(id, name, batch, price, doors, ac) {
        super(id, name, batch, price, 4)
         this.doors = doors;
         this.airConditioning = ac;
    }
    buyCar(money) {
        money >= this.price ? console.log("Congrats! you bought a car") :
        console.log(`You need ${this.price - money} more to buy this car!`)
    }

    static addAc(car) {
        if(!car.airConditioning) {
            car.airConditioning = true;
            car.price += 400;
            console.log(`the car now has AC and it costs ${car.price}`);
        } else {
            console.log(`The car has already AC!`);
        }
    }
}

let car = new Car(99, "Car", "22k", 7800, 4, true);
let car2 = new Car(99, "Car", "22k", 7800, 4, false);
// car.addAc(car2); => becausee the method ois static, it wont be able to call.
// console.log(car);
// car.printVehicle();
// car.driveVehicle();
// car.buyCar(5000);

class ElectricCar extends Car {
    constructor(id, name, batch, price, doors, owner ) {
        super(id, name, batch, price, doors, true);
        this.owner = owner;
    }
    
    get owner() {
        console.log(`We are getting the name of the owner. Please wait...`);
        return "The car is owned by:" + this._owner;
    }

    set owner(ownerName) {
        console.log(`We are getting the name of the owner. Please wait...`)
        ownerName.length > 2 ? this._owner = ownerName : (() => {
            throw new Error("Owner name too short!");
        })();
    }
}

let myElectricCar = new ElectricCar(12, "tesla", "35jl3h54", 30000, 5, "Petko");
// console.log(myElectiracCar);
myElectricCar.owner = "Trajan";
// 1. set function is called
// 2. set function gets the value if the letters in the name are more than 2 
// myElectricCar.owner = "r"; // will throw our error that we have in the setter

//check if our created object is an instance of a specific class
console.log(myElectricCar instanceof ElectricCar);
console.log(myElectricCar instanceof Vehicle);
console.log(myElectricCar instanceof Car);
console.log(boat instanceof Vehicle);
console.log(boat instanceof WheeledVehicle);
console.log(boat instanceof ElectricCar);


//MAP
// Map is a collection of keyed data items just like an Object. The Main difference is that Map allows key of any type.
class Employee {
    constructor(id, name, position, salary) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`
    }
}
let employees = new Map();
console.log(employees);

let john = new Employee(1, "John Doe", "Developer", 5000)
console.log(john);
let jane = new Employee(2, "Jane Doe", "Project Manager", 1500)
let johnnty = new Employee(3, "Jonhty doe", "Project Manager", 1500)

// add data to the map 
employees.set(john.id, john) // key => john.id dodeka value => john
employees.set(jane.id, jane)
employees.set(johnnty.id, johnnty)

//get data from map
let employee1 = employees.get(1) // John Doe
console.log(employee1);

// checks if we have record with key 2
let hasemployee2 = employees.has(2); 

//Check the size of the map
let mapSize = employees.size;
console.log(mapSize);

// delete an employee from the map
employees.delete(2);

//clear the map
// employees.clear();

//iterate over the map
for (let [id, employee] of employees) {
    console.log(`ID: ${id}, Employee: ${employee.getDetails()}`);
}

//SET 
// A set is a special type of collection "set of values" (without keys) where each value may occur only once
let mySet = new Set();

//Add Value
mySet.add('apple');
mySet.add('orange');
mySet.add('banana');
console.log(mySet);
mySet.add('banana');
console.log(mySet);

//check if set has given value
let hasApple = mySet.has('apple'); // true
console.log(hasApple);

//check the size
let size = mySet.size;

mySet.delete('banana');

//clear set
// mySet.clear();

//iterate over set
for (let value of mySet) {
    console.log(value);
}

