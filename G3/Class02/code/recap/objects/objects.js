console.log("================== OBJECTS ==================");
// representation of entities that exist in the real world
// consists of PROPERTIES and METHODS

// let favouriteFood = [1, 2, 3]
// 1) created usin curly brackets (object literal) {}
let dog = {
    name: "Sparky",
    color: "Brown",
    age: 1,
    owner: {
        firstName: "Bob",
        lastName: "Bobsky"
    },
    favouriteFood: ["Carrot", "Watermalon", "Bacon"],
    bark: function () {
        console.log("Bark bark");
    },
    eat: function (food) {
        for (const item of this.favouriteFood) {
            if (food === item) {
                console.log("Aw Aw. My favourite food");
                break;
            }
        }
        console.log("Nom nom");
    }
}

console.log(dog.age)
console.log(dog["age"]);
dog.bark();
dog.eat("Watermalon")

// 2) created using the 'new Object' 
let otherDog = new Object();
// dynamically added properties
otherDog.name = "Chapo";
otherDog["isStreetDog"] = true;

// 3) created using Constructor Notation Template (Constructor Function)
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

function Dog(name, color, age, owner, favouriteFood) {
    this.name = name || "unnamed";
    this.color = color;
    this.age = age;
    this.owner = owner;
    this.favouriteFood = favouriteFood;
    this.bark = function () {
        console.log("Bark Bark Bark");
    }
    this.eat = function (food) {
        if (this.favouriteFood.includes(food)) {
            console.log("Aw Aw. My favourite food");
        }
        console.log("Nom nom");
    }
    this.printInfo = function () {
        console.log(`This is ${this.name}, has ${this.age} years and is of color ${this.color}. The owner is ${this.owner.getFullName()}`);
    }
}

let ilija = new Person("Ilija", "Mitev");
let aks = new Dog("Aks", "Appricot Fawn", 5, ilija, ["Dog food", "Hazelnuts"]);
aks.printInfo();

let testDog = new Dog("", "White", 15); // testDog.name = "unnamed"

// Updating values
aks.age = 7;


console.log("");
console.log("============= The 'window' object =============");
// the global object !!!
// js object, representation of the browser
// variables and functions declared globally become properties and methods of the window object

console.log(this);
console.log(window);
console.log(window.innerWidth);

// alert();
// window.alert()
// prompt();
// window.prompt()
function testGlobalObject() {
    console.log("Hello");
}
// window.testGlobalObject();
testGlobalObject()


console.log("");
console.log("============= The 'document' object =============");
// represents the web page (HTML&CSS) loaded in the window and provides methods and properties to interact with the HTML document

// window.document
console.log(document);
console.log(document.children);
console.log(document.querySelector("h1").textContent);