class Vehicle{
    constructor(id, name, batchNo, price){
        this.id = id;
        this.batchNo = batchNo;
        this.name = !name ? "unnamed" : name;
        this.price = price;
        //default values
        this.company = "Qinshift";
    }

    //methods
    printVehicle(){
        console.log(`${this.id} ${this.name} ${this.batchNo} ${this.company} ${this.price}`)
    }
}

let vehicle = new Vehicle(1, "Boat", 67456734, 100000); //constructor is called
console.log(vehicle);
vehicle.printVehicle();


//inheritance
class WheeledVehicle extends Vehicle{
    constructor(id, name, batchNo, price, numberOfWheels){
        super(id, name, batchNo, price); //we call the constructor from the base class (Vehicle)
        //this property belongs to WheeledVehicle
        this.numberOfWheels = numberOfWheels;
    }

    //methods
    //printVehicle() is inherited and can be used
    driveVehicle(){
        console.log(`We are driving ${this.name} on ${this.numberOfWheels} wheels.`)
    }
}

let wheeledVehicle = new WheeledVehicle(2, "Polar", 23423, 700, 2);
wheeledVehicle.printVehicle(); //inherited from Vehicle
wheeledVehicle.driveVehicle();

class Car extends WheeledVehicle{
    constructor(id, name, batchNo, price, numberOfWheels, numOfDoors, hasAc){
        super(id, name, batchNo, price, numberOfWheels); //WheeledVehicle's constructor

        //ownProperties
        this.numOfDoors = numOfDoors;
        if(hasAc){
            this.price += 600;
        }
    }

    buyCar(money){
        money >= this.price ? console.log("Congrats! You can buy the car!") :
            console.log(`We are sorry, you need ${this.price - money} more money`);
    }

    static chooseColor(color, car){
        if(color == "red" || color == "silver"){
            car.price += 300;
            console.log(`The price of the car now is ${car.price}`);
        }
        else{
            console.log("This is not special case, the price stays the same");
        }
    }
}

let car = new Car(3, "Seat", 45345, 25000, 4, 5, true);
car.printVehicle(); //inherited from Vehicle
car.buyCar(25000);

// car.chooseColor("red", new Car(4, "BMW", 8357, 80000, 4, 5, true)); //won't work! ERROR!

//chooseColor is a static method and it belongs to the class, to the definition

Car.chooseColor("red", new Car(4, "BMW", 8357, 80000, 4, 5, true));
Car.chooseColor("blue", car);


//GETTERS and SETTERS

console.log("===getters, setters===");

class ElectricCar extends Car{
    constructor(id, name, batchNo, price, numberOfWheels, numOfDoors, hasAc, owner){
        super(id, name, batchNo, price, numberOfWheels, numOfDoors, hasAc);
        
        this.owner = owner; //this will call the setter, owner will be passed as ownerName
    }

    get owner(){
        console.log("Getting the owner name");
        return this._owner;
    }

    set owner(ownerName){
        console.log("we are setting the value for owner");
        console.log("We don't accept empty owner names");
        !ownerName ? this._owner = "No owner" : this._owner = ownerName;
    }
}

let electricCar = new ElectricCar(5, "Tesla", 453345, 100000, 4, 3, true, "Kate");
electricCar.owner = "Marko"; //setter will be called
electricCar.owner = ""; //setter will be called

console.log(electricCar.owner); //getter will be called



