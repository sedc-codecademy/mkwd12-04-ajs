// INNHERITANCE
function Person(id, first, last, age) {
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
        // console.log(`${this.firstName} ${this.lastName}`);
    }
}

let person1 = new Person(1, 'Dino', 'Nikolovski', 28);


// INHERITANCE LEVEL 1 - Person ---> Employee
function Employee (id, first, last, age, divison) {
    Object.setPrototypeOf(this, new Person(id, first, last, age));
    this.divison = divison;

    this.work = function() {
        console.log(`The employee ${this.firstName} works in the ${this.divison} divison`);
    }
}

let employee1 = new Employee(2, 'Ema', 'Cvetkovska', 30, 'HR');
let employee2 = new Employee(3, 'Bejtula', 'Zekiri', 35, 'Finance');


// INHERITANCE LEVEL 2 - Person ---> Employee ---> Manager
function Manager (id, first, last, age, divison, team) {
    Object.setPrototypeOf(this, new Employee(id, first, last, age, divison));
    this.team = team;

    this.assignTask = function(task) {
        console.log(`The manager ${this.getFullName()} assigned the following task ${task} to ${this.team}`) // we can use methods whose origin is from our parent classes which our latest constructor function inherits from (getFullName())
    }
}

let manager1 = new Manager(0, 'Davor', 'Puzhovski', 20, 'development', 'code sprinters');


