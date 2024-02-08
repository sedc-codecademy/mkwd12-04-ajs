console.log(typeof(document));
console.log(typeof(document.getElementById));
console.log(typeof([]));
console.log(typeof([].push));
console.log(typeof(console));
console.log(typeof(console.log));
console.log(typeof(window));

console.log(document);
console.log(window.document);


// literal notation

let person = {
    name: "John",
    surname: "Dow",
    age: 25,
    isEmployed: true,

    printInfo: function() {
        console.log(`${this.name} ${this.surname} is ${this.age} years old and is ${
            this.isEmployed ? "employed" : "not employed"
        }`);
    }
}

console.log(person.name);
person.printInfo();

// this will work with var
// console.log(window.person.name);
// window.person.printInfo();

// constructor function

function Dog(name, color, age, favouriteFood) {
    this.name = name === undefined ? "unnamed" : name;
    this.color = color
    this.age = age,

    this.favouriteFood = 
        favouriteFood === undefined ? new [Food("Bacon", "red")] : favouriteFood;

    this.bark = function() {
        console.log("BARK BARK!")
    }

    this.eat = function(food) {
        this.favouriteFood.forEach(fav => {
            fav.name.toLowerCase() === food.name.toLowerCase() 
            ? console.log("WOOF WOOF MY FAVOURITE!!") 
            : ""
        })

        console.log("NOM NOM NOM");
    }
}

function Food(name, color) {
    this.name = name;
    this.color = color;
}


let bart = new Dog("Bart", "golden", 4, [
    new Food("beef", "red"), 
    new Food("bread", "white")
])

console.log(bart);
bart.breed = "Afghan Hound"
console.log(bart);

bart.bark();

bart.eat(new Food("beef", "red"));
bart.eat(new Food("apple", "green"));



// this keyword

// this in the global scope

console.log(this);

// this in a function

function whatIsThis() {
    console.log(this);
}

whatIsThis();

let obj = {
    whatIsThis: this,

    whatIsThisMethod: function() {
        console.log(this)
    },

    arrowThis: () => console.log(this),

    delayedLog: function () {
        setTimeout(function () {
            console.log(this)
        }.bind(this), 1000)
    },


    delayedLogArrow: function () {
        setTimeout(() => {
            console.log(this)
        }, 1000)
    }
}

console.log(obj.whatIsThis);
obj.whatIsThisMethod();
obj.arrowThis();
obj.delayedLog();
obj.delayedLogArrow();


function ThisTemplate(description) {
    console.log(this);
    this.description = description;
    this.whatisThis = this;

    this.whatisThisFunc = function () {
        console.log(this)
    }
}

// ThisTemplate();

let template = new ThisTemplate("random template");
console.log(template.whatisThis);
template.whatisThisFunc();