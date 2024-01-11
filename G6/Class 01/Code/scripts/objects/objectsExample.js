//Object literal 

let dog = {
    name: "Sparky",
    color: "Brown",
    age: 1,
    favoriteFood: ["Bacon", "Carrot"],
    bark : function () {
        console.log("BARK BARK BARK");
    },
    eat: function(){
        console.log("NOM NOM NOM");
    }
}

//new Object()

let dog1 = new Object();
dog1.name = "Sparky";
dog1.color = "Brown";
dog1.age = 1;
dog1.favoriteFood = ["Bacon", "Carrot"];
dog1.bark = function () {
    console.log("BARK BARK BARK");
};

dog1.eat = function(){
    console.log("NOM NOM NOM");
};

dog.bark(); //BARK BARK BARK

dog.bark = function(){
    console.log("AF AF AF");
}

dog.bark(); // AF AF AF 

dog.age = 2;


//constructor notation templates

//TERNARY OPERATOR
// let a = "";
// if (3> 2) {
//     a = "yay"
// }else{
//     a = "meh"
// }

// let message = 3>2 ? "yay" : "meh"

function Dog(name, color, age, favoriteFood){
    this.name = name === undefined ? "unnamed" : name; //in case there is no name
    this.color = color;
    this.age = age == undefined ? 0 : age;
    this.hasOwner = false; //default value
    this.favoriteFood = favoriteFood;
    this.bark =  function(){
        console.log("AF AF AF");
    }
    this.eat = function(){
        console.log("NOM NOM NOM");
    };
}


let sparky = new Dog("Sparky", "Brown", 1, ["Bacon", "Chicken"]);

console.log(sparky.name); //Sparky

let doggy = new Dog();
console.log("name: " + doggy.name); //unnamed
console.log("age: " + doggy.age);
console.log("color: "+ doggy.color);