function Vehicle(id, name, price, batchNo){
    this.id = id;
    this.name = name;
    this.price = price;
    this.batchNo = batchNo;
    this.company = "move.inc";
    this.printVehicle = function(){
        console.log(`name: ${this.name} price: ${this.price} batchNo: ${this.batchNo}`);
    }
}

function WheelVehicle(id, name, price, batchNo, wheels){
    Object.setPrototypeOf(this, new Vehicle(id, name, price, batchNo));
    this.wheels = wheels;
    this.drive=()=>{
        console.log("WROOM");
    }
}

function Car(id, name, price, batchNo, color, doors){
    Object.setPrototypeOf(this, new WheelVehicle(id, name, price, batchNo, 4));
    this.color = color;
    this.doors = doors;
    this.drift = ()=>{
        console.log(`${this.name} is drifting`)
    }
}

let carOne = new Car(1, 'BMW', 2500, 'B54D', 'black', 4);

console.log(carOne);
carOne.drift();

let carTwo = new Car(2, 'Audi', 2510, 'K123', 'white', 2);

console.log(carTwo);
carOne.drive();
carTwo.drift();
