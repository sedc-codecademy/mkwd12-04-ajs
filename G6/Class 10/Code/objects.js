console.log(typeof (document)); //object
console.log(typeof (document.getElementById)) //function
console.log(typeof ([])); //object
console.log(typeof ([].push)); //function
console.log(typeof (console)); //object
console.log(typeof (console.log));//function
console.log(typeof ("test")); //string
console.log(typeof (3)); //number
console.log(typeof (true));//boolean

console.log(typeof (window)); //object - window is a global object in js

console.log("hi");
window.console.log("hi from window");

console.log(window.JSON.stringify({a:7}));

console.log(JSON.stringify({a:3}));

function sayHello(name){
    console.log(name);
}

sayHello("Ana");
window.sayHello("Tijana");

//var vs let
var firstVariable = 7;
console.log(firstVariable);
console.log(window.firstVariable);

let secondVariable = 5;
console.log(secondVariable);
console.log(window.secondVariable); //undefined

let a=5; 

if(a > 0){
    var b = a;
    let c = a;
    const t = 1; //acts just like let, but we cannot assign new values to variables with const
     //t= 7; cannot assign new value to a const
}

console.log(b); //5
//console.log(c); //not defined
a = 3;

//console.log(t);

//CONSTRUCTOR NOTATION TEMPLATES
function Food(name, color){
    this.name = name;
    this.color = color;
    this.compare=function(food){
        return this.name == food.name && this.color == food.color;
    }
}

function Dog(name, color, age, favouriteFood){
    this.name = !name ? "Unnamed" : name;
    this.color = color;
    this.age = age;
    this.hasOwner = false; //default value
    this.favouriteFood = !favouriteFood ? [new Food("Bacon", "red")] :favouriteFood;
    this.bark = function(){
        console.log("Bark bark");
    },
    this.isMyFavouriteFood = function (food){  //new Food("Bacon", "red"),   new Food("Chicken", "orange")
        let isFound = this.favouriteFood.filter(f =>f.name == food.name && f.color == food.color).length > 0;
        if(isFound){
            console.log(`One of my favourite meals is ${food.name}`);
        }else{
            console.log(`I don't prefer ${food.name}`);
        }
    }
}

let barnie = new Dog("Barnie", "brown", 3, [new Food("Beef", "red"), new Food("apple", "yellow")]);

console.log(barnie);
barnie.isMyFavouriteFood(new Food("Chicken", "orange"));

let sparky = new Dog("Sparky", "white", 4);

barnie.bark(); //BARK BARK
sparky.bark(); //BARK BARK

sparky.bark = function(){
    console.log("AF AF");
}

barnie.bark();  //BARK BARK
sparky.bark();  //AF AF


//COMPARISON
//when we want to compare two objects we cannot use ==, because it compares them by ref
//we need to write our own way (function, method) where we compare sth (some properties) about the objects
let apple = new Food("apple", "red");
let anotherApple = new Food("apple", "red");

console.log(apple == anotherApple); //comparison by reference => it will print out false
let areIdentical = apple.compare(anotherApple);
console.log(areIdentical); //true

let tmp = 5;
let tmp2 = 5;

console.log(tmp == tmp2)