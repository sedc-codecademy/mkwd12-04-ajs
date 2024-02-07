// function Vehicle(id, name, batchNo, price) {
// 	this.id = id;
// 	this.name = name;
// 	this.batchNo = batchNo;
// 	this.price = price;
// 	this.printVehicle = function () {
// 		console.log(
// 			`${this.id}. ${this.name} BATCH: ${this.batchNo}, ${this.price}`
// 		);
// 	};
// }

// let yugo = new Vehicle(1, 'Yugo', 'SK1234AA', 400);
// let opel = new Vehicle(2, 'Opel', 'SK 1235 AA', 3000);

// yugo.drive = function () {
// 	console.log('Wroom Wroom...!');
// };

// console.log('YUGO', yugo);
// console.log('Opel', opel);

// yugo.printVehicle();
// opel.printVehicle();

// yugo.drive();
// // opel.drive(); // Error - not a function

// let bmw = { ...yugo, name: 'BMW', id: 3, batchNo: 'BT 1234 AA', price: 40000 };
// let benz = {
// 	...opel,
// 	name: 'Benz',
// 	id: 4,
// 	batchNo: 'TE 1234 AA',
// 	price: 30000,
// };

// console.log('BMW', bmw);
// bmw.printVehicle();
// bmw.drive();

// console.log(benz);
// benz.printVehicle();
// // benz.drive(); // ERROR - no such function for benz

// function WheeledVehicle(wheels) {
// 	this.wheels = wheels;
// }

// WheeledVehicle.prototype = Object.create(new Vehicle());
// let jeep = new WheeledVehicle(4);
// jeep.name = 'Jeep';
// jeep.id = 6;
// jeep.batchNo = 'VE 1234 IT';
// jeep.price = 56563;
// console.log('JEEP', jeep);

// WheeledVehicle.prototype.stop = function () {
// 	console.log('Wheeled vehicle has stopped.');
// };

// jeep.stop();
// bmw.stop();

// function Vehicle(id, name, batchNo, price) {
// 	this.id = id;
// 	this.name = name;
// 	this.batchNo = batchNo;
// 	this.price = price;
// 	this.printVehicle = function () {
// 		console.log(
// 			`${this.id}. ${this.name} BATCH: ${this.batchNo}, ${this.price}`
// 		);
// 	};
// }

// function WheeledVehicle(id, batchNo, price, name, wheels) {
// 	// this.__proto__ = Object.create(new Vehicle(id, name, batchNo, price));
// 	Object.setPrototypeOf(this, new Vehicle(id, name, batchNo, price));
// 	this.wheels = wheels;
// 	this.drive = function () {
// 		console.log(`${this.name} started driving...`);
// 	};
// }

// const fico = new WheeledVehicle(1, 'SK 1235 AB', 300, 'Ficho', 4);

// console.log(fico);

// const zastava = new WheeledVehicle(2, 'GV 2345 HG', 500, 'Zastava 101', 4);
// const fiat = new Vehicle(3, 'GV 3453 HG', 600, 'Fiat 1300', 4);

// console.log(zastava);
// console.log(fiat);
