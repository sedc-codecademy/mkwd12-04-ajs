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
 let wheelVehicle = Object.create(new Vehicle(1, "Yugo", 1000, "B2CG"));
 wheelVehicle.drive = function(){console.log("WROOM")};
 wheelVehicle.color = "green";

 console.log(wheelVehicle.color); //green
 console.log(wheelVehicle.name); //Yugo
 wheelVehicle.printVehicle();
 wheelVehicle.drive();

 let car = Object.create(wheelVehicle);
 car.fuelTank = 10;
console.log("=== CAR OBJECT ====");

console.log(car.fuelTank) //10
console.log(car.color); //green
console.log(car.company) //move.inc
car.printVehicle();
car.drive();

car.color = 'red'
console.log(car.color); //red

console.log(car);
