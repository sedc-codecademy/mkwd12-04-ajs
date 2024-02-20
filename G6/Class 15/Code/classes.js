class Vehicle{
    constructor(id, name, seriesNum, price){
        this.id = id;
        this.name = name;
        this.seriesNum = seriesNum;
        this.price = price;
    }
    printVehicle(){
        console.log(`Vehicle ${this.name} ${this.seriesNum} ${this.price} EUR`);
    }
}

//CLASSES => templates
//OBJECTS => instances

let vehicle = new Vehicle(1, "Opel", "7654", 15000); //constructor is called
console.log(vehicle);
console.log(vehicle.name);
vehicle.printVehicle();

//INHERITANCE
class WheeledVehicle extends Vehicle{
    constructor(id, name, seriesNum, price, numOfWheels){
        //super => construcor of Vehicle (constructor of the parent)
        //initialize the inherited properties
        super(id, name, seriesNum, price);
        //specific properties for WheeledVehicle
        this.numOfWheels = numOfWheels;
    }
    driveWheeledVehicle(){
        console.log(`Drive carefully the ${this.name}`);
    }
}

let bike = new WheeledVehicle(2, "myBike", "5353", 200, 2);
console.log(bike);
bike.printVehicle();
bike.driveWheeledVehicle();

class Car extends WheeledVehicle{
    constructor(id, name, seriesNum, price, numOfWheels, plateNum, hasAC){
    super(id, name, seriesNum, price, numOfWheels);
        this.plateNum = plateNum;
        this.hasAC = hasAC;
    }

    static isRentable = false;

    static hasAirConditioning(carObject){
        if(carObject.hasAC){
            console.log("The car has AC");
        }else{
            console.log("The car does not have AC");
        }
    }
}

let car = new Car(5, "BMW", "222", 50000, 4, "SK1234AB", false);
console.log(Car.hasAirConditioning(car));//we are accessing the hasAirConditioning static method through the class itself
console.log(car.plateNum);

console.log(Car.isRentable); //we are accessing the isRentable static prop through the class itself
Car.addAirConditioning
class ElectricCar extends Car{
    constructor(id, name, seriesNum, price, numOfWheels, plateNum, owner, numOfDoors){
        super(id, name, seriesNum, price, numOfWheels, plateNum);
        this.owner = owner;//this will call the setter
        this.numOfDoors = numOfDoors;
    }
    get owner(){
      console.log("we are getting the value for owner");
      return this._owner;
    }

    set owner(ownerName){
        console.log("we are setting the value for owner");
        console.log("we won't accept an empty value");
        !ownerName ? this._owner = "no owner" : this._owner = ownerName;
    }
}

let electricCar = new ElectricCar(6, "Tesla", "42342", 100000, 4, "SK5642AN", "Petko", 5);
electricCar.owner = "Marko"; //setter will be called
console.log(electricCar.owner); //getter will be called


//Instance of
console.log(electricCar instanceof Car); //true
console.log(electricCar instanceof Vehicle); //true
console.log(bike instanceof ElectricCar); //false