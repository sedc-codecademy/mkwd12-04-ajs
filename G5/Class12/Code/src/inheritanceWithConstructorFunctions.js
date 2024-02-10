function Vehicle(name, identifier, seriesNum, price){
    this.name = name;
    this.identifier= identifier;
    this.seriesNum = seriesNum;
    this.price = price;

    this.printVehicle = function(){
        console.log(`Info: ${this.name} - ${this.seriesNum} - ${this.identifier} - ${this.price}`);
    }
}

//we want to be able to pass values for all properties when we call WheeledVehicle constructor function

function WheeledVehicle(name, identifier, seriesNum, price, numberOfWheels){

    //we want to tell that protoype of WheeledVehicle object that will be constructed is an object of type Vehicle
    Object.setPrototypeOf(this, new Vehicle(name, identifier, seriesNum, price));

    this.numberOfWheels = numberOfWheels;
    this.drive = function(){
        console.log("We are driving a wheeled vehicle");
    }
}

let wheeledVehicle = new WheeledVehicle("BMW", "BMW555", 75834435, 100000, 4);
console.log(wheeledVehicle);
console.log("Wheeled vehicle:")
console.log(wheeledVehicle.name);
console.log(wheeledVehicle.price);
console.log(wheeledVehicle.seriesNum);
wheeledVehicle.drive();
wheeledVehicle.printVehicle();

let newWheeledVehicle = new WheeledVehicle("Opel", "Opel555", 6765445, 20000, 4);
console.log(newWheeledVehicle);
console.log("newWheeledVehicle:")
console.log(newWheeledVehicle.name);
console.log(newWheeledVehicle.price);
console.log(newWheeledVehicle.seriesNum);
newWheeledVehicle.drive();
newWheeledVehicle.printVehicle();

function Car(name, identifier, seriesNum, price, numberOfWheels, fuelTank){

    Object.setPrototypeOf(this, new WheeledVehicle(name, identifier, seriesNum, price, numberOfWheels));
    this.fuelTank = fuelTank;
    this.stop = function(){
        console.log("The car stopped");
    }
}

function Boat(name, identifier, seriesNum, price, fuel){
    Object.setPrototypeOf(this, new Vehicle(name, identifier, seriesNum, price));
    this.fuel = fuel;
}

function Bike(name, identifier, seriesNum, price, numberOfWheels, tyreWidth){
    
}

let car = new Car("Mercedes", "M123", 3578375, 85000, 4, 50);
console.log(car);

console.log("car:")
console.log(car.name); //inherited from Vehicle
console.log(car.numberOfWheels); //inherited from WheeledVehicle
console.log(car.fuelTank); // own property