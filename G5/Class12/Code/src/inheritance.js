function Vehicle(name, identifier, seriesNum, price){
    this.name = name;
    this.identifier= identifier;
    this.seriesNum = seriesNum;
    this.price = price;

    this.printVehicle = function(){
        console.log(`Info: ${this.name} - ${this.seriesNum} - ${this.identifier} - ${this.price}`);
    }
}

let vehicle = new Vehicle("Opel", "Opel1", 45345, 20000);
console.log(vehicle);

//we want to create an object that is vehicle, but with wheels

let wheeledVehicle = Object.create(vehicle);
console.log(wheeledVehicle);

wheeledVehicle.numberOfWheels = 4;
wheeledVehicle.drive = function(){
    console.log("We are driving a wheeled vehicle");
}

console.log(wheeledVehicle);

console.log("Vehicle name:");
console.log(vehicle.name);
console.log("Wheeled vehicle name:");
console.log(wheeledVehicle.name); //inherited from vehicle

console.log("Vehicle price:");
console.log(vehicle.price);
console.log("Wheeled vehicle price:");
console.log(wheeledVehicle.price); //inherited from vehicle

console.log("Vehicle num of wheels:");
console.log(vehicle.numberOfWheels); //doesn't exist
console.log("Wheeled vehicle num of wheels:");
console.log(wheeledVehicle.numberOfWheels); //own property

wheeledVehicle.printVehicle(); //inherited from vehicle
wheeledVehicle.drive(); //own method

//override values
wheeledVehicle.price = 25000;
console.log("Vehicle price:");
console.log(vehicle.price);
console.log("Wheeled vehicle price:");
console.log(wheeledVehicle.price); //inherited from vehicle

//access the prototype
console.log(wheeledVehicle.__proto__);
console.log(wheeledVehicle.__proto__.price);
console.log(wheeledVehicle.__proto__.seriesNum);

//expand the hierarchy
let car = Object.create(wheeledVehicle);
car.strength = 130;
car.fillFuel = function(){
    console.log("Filling the fuel tank..")
}
console.log(car);

console.log(car.price); //inherited from wheeledVehicle, because the price was changed there
console.log(car.name); //inherited from vehicle
console.log(car.strength); //own property
car.printVehicle(); //inherited from vehicle
car.drive(); //inherited from wheeledVehicle
car.fillFuel(); //own method
