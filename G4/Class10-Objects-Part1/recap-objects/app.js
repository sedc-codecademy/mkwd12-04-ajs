console.log("Recap Objects Online");

//Ways of creating an object

// Literal notation

const car = {
  brand: "Honda",
  model: "Civic",
  year: 2008,

  horsePower: 140,

  fullName: this,

  printCarInfo() {
    console.log(
      `Make: ${this.brand}, Year: ${this.year}, Horsepower: ${this.horsePower}`
    );
  },
};

console.log(car);

car.printCarInfo();

// Constructor Function

// function Person(firstName, lastName, age, country) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.country = country;
//   this.fullName = `${this.firstName} ${this.lastName}`;

//   this.printFullName = function () {
//     console.log(this.fullName);
//   };
// }

class Person {
  constructor(firstName, lastName, age, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  changeFirstName(name) {
    if (name.length < 3) return;
    this.firstName = name;

    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  changeLastName(name) {
    if (name.length < 3) return;
    this.lastName = name;

    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  printFullName() {
    console.log(this.fullName);
  }
}

const borche = new Person("Borche", "Borisovski", 31, "Macedonia");
const hristina = new Person("Hristina", "Bozhinova", 30, "Macedonia");

console.log(borche);

hristina.printFullName();

borche.changeFirstName("Risto");
borche.changeLastName("Blazhevski");

borche.printFullName();
