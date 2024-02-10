function Vehicle(name, identifier, seriesNum, price){
    this.name = name;
    this.identifier= identifier;
    this.seriesNum = seriesNum;
    this.price = price;

    this.printVehicle = function(){
        console.log(`Info: ${this.name} - ${this.seriesNum} - ${this.identifier} - ${this.price}`);
    }
}

function WheeledVehicle(numberOfWheels){
    this.numberOfWheels = numberOfWheels;
    this.drive = function(){
        console.log("We are driving a wheeled vehicle");
    }
}

let wheeledVehicle = new WheeledVehicle(4);
console.log(wheeledVehicle);

//with this line we tell that WheeledVehicle and Vehicle belong to the same hierarachy
//and that each WheeledVehicle object inherits from an empty Vehicle object
WheeledVehicle.prototype = Object.create(new Vehicle());

let secondWheeledVehicle = new WheeledVehicle(2);
console.log(secondWheeledVehicle);
//we need to assign values, because we don't have them in the prototype
secondWheeledVehicle.name = "Polar";
secondWheeledVehicle.price = 500;
secondWheeledVehicle.seriesNum = 7385438;
console.log(secondWheeledVehicle.price);

WheeledVehicle.prototype.stop = function(){
    console.log("Stopping the vehicle");
}
//wheeledVehicle.stop(); ERROR

let thirdWheeledVehicle = new WheeledVehicle(3);
thirdWheeledVehicle.stop();