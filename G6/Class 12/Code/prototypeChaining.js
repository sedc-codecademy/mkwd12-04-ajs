function Example(id, name){
    this.id = id;
    this.name = name;
}

function Vehicle(id, name, seriesNum, price){
    // this.id = id;
    // this.name = name;
    Object.setPrototypeOf(this, new Example(id, name));
    this.seriesNum = seriesNum;
    this.price = price;
    this.printVehicle = function (){
        console.log(`Info: ${this.id} ${this.name} ${this.price}`);
    }
}

let vehicle = new Vehicle(4, "test", "5555", 10000);

function WheeledVehicle (id, name, seriesNum, price, numberOfWheels){
//we are saying that every instance of wheeled vehicle has vehicle as prototype
//and we let it set the values of the properties for each instance
   Object.setPrototypeOf(this, new Vehicle(id, name, seriesNum, price)); 
    this.numberOfWheels = numberOfWheels;
    this.drive = function(){
        console.log("You are driving a wheeled vehicle. Drive carefully!");
    }
}

let wheeledVehicle = new WheeledVehicle(1, "BMW", "121324", 10000, 4);
let bike = new WheeledVehicle(2, "Bike", "1212", 1000, 2);

function Car(id, name, seriesNum, price, numberOfWheels, plateNumber){
    Object.setPrototypeOf(this, new WheeledVehicle(id, name, seriesNum, price, numberOfWheels));
    this.plateNumber = plateNumber;
    this.stop = function(){
        console.log("The car stopped");
    }
}

let car = new Car (2, "Mercedes", "3232", 150000, 4, "SK2222AA");

console.log(Object.getPrototypeOf(car));