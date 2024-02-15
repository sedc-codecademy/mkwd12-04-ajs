function Vehicle(id, name, seriesNum, price){
    this.id = id;
    this.name = name;
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function (){
        console.log(`Info: ${this.id} ${this.name} ${this.price}`);
    }
}

let vehicle = new Vehicle(1, "Opel", "123", 10000);
console.log(vehicle);

let wheeledVehicle = Object.create(vehicle);
console.log(wheeledVehicle);

wheeledVehicle.numberOfWheels = 4;
console.log(vehicle);
console.log(wheeledVehicle.name); //vehicle
console.log(wheeledVehicle.price); //vehicle
console.log(wheeledVehicle.numberOfWheels); //wheeledVehicle

//override values
wheeledVehicle.name = "Opel Corsa";

let car = Object.create(wheeledVehicle);
car.plateNumber = "SK1234AA";

let bike = Object.create(wheeledVehicle);

console.log(wheeledVehicle.__proto__); //vehicle
console.log(wheeledVehicle.__proto__.price);

console.log(car.__proto__); //wheeled vehicle
console.log(car.__proto__.__proto__.name); //vehicle

vehicle.name = "Renault";
console.log(car.__proto__.__proto__.name); //Renault
console.log(car.name); //Opel Corsa

wheeledVehicle.seriesNum = "555555";
console.log(car.seriesNum); //555555
console.log(wheeledVehicle.seriesNum);//555555

console.log(car.__proto__.__proto__.seriesNum); //123