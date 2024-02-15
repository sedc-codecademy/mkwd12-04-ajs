class Vehicle {
    constructor(id,name, batch, price){
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
    }
    printVehicle(){
        console.log(`Vehicle id: ${this.id}, name: ${this.name}, price: ${this.price}`)
    }
}

let boat = new Vehicle(1, "Boat", '123D', 50000);
console.log(boat);
boat.printVehicle();

class WheeledVehicle extends Vehicle{
    constructor(id, name, batch, price, wheels){
        super(id, name, batch, price)
        this.wheels = wheels;
        this.color = 'green';
    }
    drive(){
        console.log(`Vehicle ${this.name} is driving.`)
    }
}

let car = new WheeledVehicle(2, 'Audi', 'D123F', 25000, 4);

console.log(car);
car.printVehicle()
car.drive();


class Car extends WheeledVehicle{
    constructor(id, name, batch, price, wheels, doors, airConditioning){
        super(id, name, batch, price, wheels)
        this.doors = doors;
        this.airConditioning = airConditioning;
    }
    drift = ()=>{
        console.log(`${this.name} is drifting`);
    }
    buyCar(money){
        money >= this.price ? console.log("You bought the car") : console.log("You need a more money!");
    }
    static AddAirConditioning(car){
        if(!car.airConditioning){
            car.airConditioning = true;
            car.price += 400;
            console.log(`The car has AC with price ${car.price}`);
        }else{
            console.log("The car already has AC!");
        }
    }
}

let bmw = new Car(3, 'BMW', 'D1232F',12356, 4, 2, false);
let opel = new Car(4, 'OPEL', 'D121232F', 5000, 4, 4, true);
bmw.printVehicle();
bmw.drive();
bmw.drift();

Car.AddAirConditioning(bmw);
console.log("========= bmw static method =======")
console.log(bmw)

Car.AddAirConditioning(opel);
console.log("========= opel static method =======")
console.log(opel)

class ElectricCar extends Car {
    constructor(id, name, batch, price, doors, owner) {
        super(id, name, batch, price, doors, true);
		this.owner = owner;
    }
    get owner() {
		console.log("We are getting the name of the owner. Please wait...");
        return "The car is owned by:" + this._owner;
    }
	set owner(ownerName){
		console.log("We are setting the name of the owner. Please wait...")
		ownerName.length > 1 ? this._owner = ownerName : (()=> {throw new Error("Owner name too short!")})();
	}
}

let myElectricCar = new ElectricCar(12, "Tesla", "23n", 30000, 5, "Petko");
console.log(myElectricCar);
console.log(myElectricCar.owner);
myElectricCar.owner = "Ivan"
console.log(myElectricCar.owner);
// let myOtherElectricCar = new ElectricCar(13, "Electra", "51q", 25000, 3, "I");


