const person = {
  firstName: "Borche",
  lastName: "Borisovski",
};

const names = ["test", "bet", "rest"];

console.log(person);
console.log(names);

//1. Inheritance using prototypes in js

function Vehicle(name, price, serialNumber) {
  this.name = name;
  this.price = price;
  this.serialNumber = serialNumber;

  this.printVehicleStats = function () {
    console.log(
      `Name: ${this.name}, Price: ${this.price}, Serial #: ${this.serialNumber}`
    );
  };
}

const vehicleOne = new Vehicle("Yacht", 10000, "A231h2kjh31k23kj");

vehicleOne.printVehicleStats();

// Inheriting using prototypes

function WheeledVehicle(name, price, serialNumber, wheels) {
  this.wheels = wheels;

  this.__proto__ = new Vehicle(name, price, serialNumber);
}

const truck = new WheeledVehicle("Truck", 15000, "A21323123", 18);

console.log(truck);

truck.printVehicleStats();

console.log(truck.__proto__);

function Car(name, price, serialNumber, wheels, doors, euroStandard, brand) {
  this.doors = doors;
  this.euroStandard = euroStandard;
  this.brand = brand;

  this.__proto__ = new WheeledVehicle(name, price, serialNumber, wheels);

  this.printCarInfo = function () {
    console.log(
      `Car has ${this.doors}, Is euro standard ${this.euroStandard} and is made by ${this.brand}`
    );
  };
}

const vwPassat = new Car("Passat", 2500, "A21391293912", 4, 5, 4, "VW");

console.log(vwPassat);

const objectCreate = Object.create(truck);

console.log("Object Create", objectCreate);

//2. Classes

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  printPersonInfo() {
    console.log(this.fullName, this.age);
  }
}

const personOne = new Person("Bob", "Bobski", 45);

personOne.printPersonInfo();

//extends is the keyword for inheritance in classes
class Professional extends Person {
  constructor(firstName, lastName, age, yearsOfExperience, industry) {
    // super() always needs to be called for classes that inherit from other classes
    // the super() function refers to the constructor of the parent function
    super(firstName, lastName, age);

    this.yearsOfExperience = yearsOfExperience;
    this.industry = industry;
  }

  printWorkerInfo() {
    console.log(
      `${this.fullName} works in the ${this.industry}, and has ${this.yearsOfExperience} years of experience`
    );
  }
}

const workerOne = new Professional("Jack", "Dorsey", 54, 15, "Construction");

console.log(workerOne);

workerOne.printPersonInfo();
workerOne.printWorkerInfo();

class Programmer extends Professional {
  constructor(
    firstName,
    lastName,
    age,
    yearsOfExperience,
    languages,
    jobTitle
  ) {
    super(firstName, lastName, age, yearsOfExperience, "IT");

    this.languages = languages;
    this.jobTitle = jobTitle;
  }

  printProgrammerInfo() {
    console.log(
      `${this.fullName}'s current job title is ${
        this.jobTitle
      } and they know the following languages: ${this.languages.join(", ")}`
    );
  }
}

const billGates = new Programmer(
  "Bill",
  "Gates",
  80,
  120,
  ["C", "Basic", "Haskell", "Paskal"],
  "MASTERMIND OF MICROSOFT"
);

console.log(billGates);

billGates.printPersonInfo();
billGates.printWorkerInfo();
billGates.printProgrammerInfo();

console.log(billGates instanceof Programmer);
console.log(billGates instanceof Professional);
console.log(workerOne instanceof Programmer);
console.log(workerOne instanceof Person);

class Doctor extends Professional {
  constructor(
    firstName,
    lastName,
    age,
    yearsOfExperience,
    specialization,
    isCertified
  ) {
    super(firstName, lastName, age, yearsOfExperience, "Medicine");

    this.specialization = specialization;
    this.isCertified = isCertified;
  }

  helpPatient(patientName) {
    if (this.isCertified) {
      console.log(`Dr.${this.lastName} is treating ${patientName}`);
    } else {
      console.log(
        `${this.fullName} can't help ${patientName} because doctor is not certified`
      );
    }
  }

  //   static methods should not use this
  static checkCertification(doctor) {
    if (doctor instanceof Doctor) {
      if (doctor.isCertified) {
        return "Doctor is certified";
      } else {
        return "Doctor is not certified";
      }
    }
  }
}

const doctorJack = new Doctor("Jack", "Jones", 64, 25, "Trauma Surgeon", true);

console.log(doctorJack);

doctorJack.printPersonInfo();
doctorJack.printWorkerInfo();

doctorJack.helpPatient("Bob");

const doctorRisto = new Doctor(
  "Rissto",
  "Blazhovski",
  65,
  100,
  "Neuro Surgeon",
  false
);

// Static methods are called on the class itself
console.log(Doctor.checkCertification(doctorRisto));
console.log(Doctor.checkCertification(doctorJack));

// Private fields / getterrs-setters

const bob = new Person("Bob", "Bobiski", 50);

bob.printPersonInfo();

class BankAccount {
  //Private properties can't be read or updated directly with . or =
  #accountHolder;
  #balance;
  #accountNumber;

  constructor(accountHolder, balance, accountNumber) {
    this.#accountHolder = accountHolder;
    this.#balance = balance;
    this.#accountNumber = accountNumber;
  }

  getAccountHolder() {
    return this.#accountHolder;
  }

  updateAccountHolder(newHolder) {
    if (typeof newHolder !== "string" || newHolder.length < 3) return;

    this.#accountHolder = newHolder;
  }
  //Getter is used to get a property from the class
  get balance() {
    console.log("Balance getter called");
    return this.#balance;
  }

  //Setter is used to validate and set a property in the class
  set balance(newBalance) {
    if (Number.isNaN(Number(newBalance))) return;

    this.#balance = newBalance;
  }
}

const accountOne = new BankAccount("John Doe", 10000, "A123123");

// Updating and reading properties with methods
accountOne.updateAccountHolder("Jane Doe");
console.log(accountOne.getAccountHolder());

// Updating and reading properties with get/set
accountOne.balance = 5000;
console.log(accountOne.balance);
