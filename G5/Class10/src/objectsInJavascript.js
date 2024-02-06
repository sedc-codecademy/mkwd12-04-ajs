console.log("Type of document:");
console.log(typeof(document)); //object
console.log("Type of getElementById");
console.log(typeof(document.getElementById)); //function
console.log("Type of array");
console.log(typeof([2, 4])); //object
console.log("Type of console:");
console.log(typeof(console)); //object
console.log("Type of console.log:");
console.log(typeof(console.log)); //function
console.log("Type of window");
console.log(typeof(window)); //object

console.log("Hello");
window.console.log("Hello");

// let window = {
//     console : {
//         log: function(message){

//         }
//     }
// }


//our functions belong to the window object
function sayHello(name){
    console.log(`Hello ${name}`);
}

sayHello("Tanja");
window.sayHello("Tanja");

// window.sayHello = function(name){

// }

console.log("====CONSTRUCTOR FUNCTIONS====")
function Food(name, color){
    this.name = name;
    this.color = color;

    //this -> type Food and anotherFood -> type Food
    this.compare = function(anotherFood){
        return this.name === anotherFood.name && this.color === anotherFood.color;
    }
}

function compareFood(firstFood, secondfood){
    return firstFood.name === secondfood.name && firstFood.color === secondfood.color;
}

function Dog(name, color, age, favouriteFood){
    //PROPERTIES
    this.name = !name ? "unnamed" : name;
    this.color = color;
    this.age = age;
    //if param favouriteFood is null or undefined, don't take it into account
    this.favouriteFood = !favouriteFood ? [] : favouriteFood;

    //METHODS
    this.bark = function(){
        console.log("The dog is barking..")
    }

    this.checkFavouriteFood = function(foodName){
        
        let filteredFood = this.favouriteFood.filter(f => f.name == foodName);
        if(filteredFood.length == 0){
            console.log(`${foodName} is not ${this.name}'s favourite food.`)
        }
        else{
            console.log(`${foodName} is  ${this.name}'s favourite food.`)
        }
    }
}

let barnie = new Dog("Barnie", "brown", 5, [new Food("bacon", "red"), new Food("bread", "white")])
let sparky = new Dog("Sparky", "brown", 3, null)
console.log(sparky);
barnie.checkFavouriteFood("bacon");
sparky.checkFavouriteFood("bread");


console.log("===COMPARISON===");

let apple = new Food("apple", "red");
let secondApple = new Food("apple", "red");

let a = 4;
let b = 5;
let areIdentical = a === b;

//comparison by reference
let areTheApplesIdentical = (apple === secondApple);
console.log(areTheApplesIdentical);

let identicalApples = apple.compare(secondApple);
secondApple.compare(apple);

let identical = compareFood(apple, secondApple);