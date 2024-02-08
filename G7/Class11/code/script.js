// Example 1

// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;

//     this.printVehicle = function () {
//         console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}$`)
//     }
// }

// let wheeldWihecle = Object.create(new Vehicle(1, "Yugo", "24b", 500));

// console.log(wheeldWihecle);
// wheeldWihecle.printVehicle();

// wheeldWihecle.drive = function () { console.log("Wroom") };
// console.log(wheeldWihecle);

// wheeldWihecle.drive();

// let wheeldWihecle1 = new Vehicle(1, "Opel", "1233", 10000);
// let wheeldWihecle2 = {};

// wheeldWihecle2.__proto__ = new Vehicle(2, "Ford", "213b", 11000);

// console.log(wheeldWihecle1);
// console.log(wheeldWihecle2);


// Example 2

// function Vehicle(id, name, batchNo, price) {
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;

//     this.printVehicle = function () {
//         console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}$`)
//     }
// }

// function WheeldVehicle(wheels) {
//     this.wheels = wheels

//     this.drive = function() {
//         console.log(`Driving on ${wheels} wheels`)
//     }
// }


// WheeldVehicle.prototype = Object.create(new Vehicle(10, "Mazda", "123gg", 9900));

// let car = new WheeldVehicle(4);

// car.drive();
// console.log(car);


// Example 3

function Vehicle(id, name, batchNo, price) {
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;

    this.printVehicle = function () {
        console.log(`${id}. ${name}, BATCH: ${batchNo}, ${price}$`)
    }
}

function WheeldVehicle(id, name, batchNo, price, wheels) {
    Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price))

    this.wheels = wheels

    this.drive = function() {
        console.log(`Driving on ${wheels} wheels`)
    }

}

let bmw = new WheeldVehicle(22, "bmw", "hfs32", 30000, 2);
console.log(bmw);

bmw.printVehicle();


function SuperCar(id, name, batchNo, price, hp) {
    Object.setPrototypeOf(this, new WheeldVehicle(id, name, batchNo, price, 4))

    this.hp = hp
}

let ferrari = new SuperCar(55, "Ferrari", "sad322", 1000000, 700);

console.log(ferrari);

ferrari.printVehicle();
ferrari.drive();