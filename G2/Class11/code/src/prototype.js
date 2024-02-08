function Vehicle(id, name, price, batchNo){
    this.id = id;
    this.name = name;
    this.price = price;
    this.batchNo = batchNo;
    this.company = "move.inc";
    this.colors = {
        color: 'red'
    };
    this.printVehicle = function(){
        console.log(`name: ${this.name} price: ${this.price} batchNo: ${this.batchNo}`);
    }
}

function WheeledVehicle(wheels, name){
    this.wheels = wheels;
    this.name = name;
    this.drive = ()=>{
        console.log(`wheels: ${this.wheels} name:${this.name}`);
    }
}

WheeledVehicle.prototype = Object.create(new Vehicle());

let car = new WheeledVehicle(4, 'Yugo');
console.log(car);

car.price = 500;

console.log(car.company);
console.log(car.price);


console.log(car.__proto__.__proto__.company);
console.log(car.__proto__.company);


WheeledVehicle.prototype.stop = function(){
	console.log(`The vehicle ${this.name} stopped.`);
}
car.__proto__.stop();
console.log(car.colors)
