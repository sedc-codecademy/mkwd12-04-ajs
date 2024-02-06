# Objects pt1 🌱

## What are objects

We program using code. But we solve business problems and build solutions as humans with our own logic. In order to translate these solutions and problems in code more clear and organized we use a lot of different mechanics. We put values in variables, executable actions in functions, and multiple values in arrays. In order to translate more complex entities such as users or products, we use objects. Objects are used to encapsulate and organize entities from our business logic, group different features as modules, and even used as modules for organizing functions and values. Objects can hold two types of data:

* Properties - Simple or complex values ( ex: string, number, array, another object )
* Methods - Functions

### Everything is an object

In JavaScript, everything is an object. All the functions and values that are native to JavaScript are one way or another object or connected to some object. If we look at the DOM or **document** we can see that it's not some special type of entity. It's actually an object. All methods like **getElementById** and **querySelector** are actually methods of the object document. We also know the **window**, the representation of our browser window. From that object, we access all sorts of features such as **console** which is an object as well and has a method called **log**. Every **array** is actually an object, **length** is a property of that array object, and **push** and **pop** are methods

```javascript
typeof(document) // object
typeof(document.getElementById) // function 
typeof([]) // object
typeof([].push) // function 
typeof(console) // object
typeof(console.log) // function 
typeof(window) // object
```

Since everything comes from the window object, the window object is left out and we don't have to write it. But make no mistake, all the functions and objects that we use in our script such as alert, prompt, document, console, etc. are properties and methods of the window object

```javascript
console.log("hey"); // hey
window.console.log("hey"); // hey

console.log(document); // [document]
console.log(window.document); // [document]

alert("hey"); // hey
window.alert("hey"); // hey
```
Our functions and variables declared with var are also inside of the window.
```javascript
function sayHello(name){
	console.log(`Hey there ${name}!`);
}
sayHello("Bob"); // Hey there Bob!
window.sayHello("Bob"); // Hey there Bob!
var something = "a thing!";
console.log(something); // a thing!
console.log(window.something); // a thing!
```

## Constructor Notation Templates

Constructor notation even tho not used as much for creating new plain objects definitely has its uses for creating templates that we can use to create objects of the same type. This is useful when we have multiple objects with the same properties and methods. We don't want to create objects over and over again with the same properties and methods, so we create one template with constructor notation that will be a guideline for all other objects created from it. For example, if we need to manipulate multiple dog objects, we create a template for a dog. We use that template to create as many dogs as we need without creating the objects with the properties and methods all over again. Templates similar to these are called classes in other languages. As a convention, templates are named with an uppercase first letter, so we can distinguish which one is a template and which one is an object

```javascript
function Dog(name, color, age, favoriteFood){
	this.name = name === undefined ? "unnamed" : name; // in case tehre is no name
	this.color = color;
	this.age = age;
	this.hasOwner = false; // default value for all
	this.favoriteFood = favoriteFood;
	this.bark = function(){
		console.log("BARK BARK BARK");
		};
	this.eat = function(food){
		dog.favoriteFood.forEach(fav => 
		fav.toLowerCase() === food.toLowerCase() ? console.log("*My favorite!*") : "");
		console.log("NOM NOM NOM");
		}
}

let sparky = new Dog("Sparky", "Brown", 1, ["Chicken", "Cucumber"]);
let doggy = new Dog(); // will have name unnamed
```

### this keyword

This keyword is nothing more than a pointer to the current object. It's a short pointer to the thing that you are working with at the moment. In different situations, this points to a different object depending on where we execute the code. For instance:

#### this in the global scope

If we write this in the global scope we will get the window object

```javascript
console.log(this);
```

#### this in a function

If we write this in a function and call the function in our script we would also get the window object. That is because that function is still in the same execution context

```javascript
function whatIsThis(){
  console.log(this);
}
```

#### this in an object

If we create an object in our script and give it a property with the value **this**, we can see that this is still the window object. We are still in the same execution context

```javascript
let thisObj = {
	whatsThis: this
}
console.log(thisObj.whatsThis);
```

#### this in a method

Now in methods, the execution context is changing. We are executing the function in the object. That's why in the method declared with function **this** will get the value of the current object from which it was called from

```javascript
let thisObj = {
	whatsThis: this,
	whatsThisMethod: function(){
		console.log(this);
	}
}
console.log(thisObj.whatsThis); // window
thisObj.whatsThisMethod(); // thisObj
```

#### this in a constructor template

When we are writing a constructor template, we are actually writing a function. When we want to create a new object from that function, we use the new keyword and from the parameters of the function, we add some internal properties of the function ( remember, functions as first-class citizens can have properties ). This means that if we just call a function in our script, **this** will still be the window object. But if we create a new instance then the **this** binds to the newly created object

```javascript
function thisTemplate(description){
	console.log(this);
	this.description = description;
	this.whatsThis = this;
	this.whatsThisFunc = function(){
		console.log(this)
	};
}
thisTemplate();
let whatsThisTemplate = new thisTemplate("we are testing this");
console.log(whatsThisTemplate.whatsThis);
whatsThisTemplate.whatsThisFunc();
```

## Destructuring

**Destructuring simply implies breaking down a complex structure into simpler parts**. In JavaScript, this complex structure is usually an **object** or an **array**. With the destructuring syntax, you can extract smaller fragments from arrays (items) and objects (properties). The destructuring syntax can be used for variable declaration or variable assignment. You can also handle nested structures by using nested destructuring syntax. So if we add a simple example for destructuring an object it will look something like this:

```javascript
let dog = {
    dogName: "Bugsy",
    dogColor: "Black",
    dogAge: 4
    }
//If we want to console our dog's object proerties we can do this:
console.log(dog.dogName); //Bugsy
console.log(dog.dogColor); //Black
console.log(dog.dogAge); //4

//If we use destructuring on our object it will look like:
const {name, color, age} = dog;
console.log(name); //Bugsy
console.log(color); //Black
console.log(age); //4
```

So what is done in the previous example is that we declare an object and give to it three variables name, color, and age, but we initialize it to our existing dog object, and since the **dog** object contains only three properties they will store in **name, color and age** respectively

### Why Destructuring?

To explain the why of destructuring, it's better to look at a scenario. In the code below, we have a simple student object that has properties **name, age** and has a nested object of **scores** in three subjects(Maths, Elementary Science, English). Imagine we need to display some information based on this data and for that purpose, we declare a displlaySymmary function that accepts one input parameter that should be a student object

```javascript
const student = {
    name: 'John Doe',
    age: 19,
    scores: {
        JavaScript: 74,
        AdvancedJS: 63,
        CSharp: 85
    }
};

// A function that just displays some info about the student object for us.
function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your JavaScript score is ' + (student.scores.JavaScript || 0));
    console.log('Your AdvancedJS score is ' + (student.scores.AdvancedJS || 0));
    console.log('Your CSharp score is ' + (student.scores.CSharp || 0));
}

displaySummary(student);
//This will display the following:
// Hello, John Doe
// Your JavaScript score is 74
// Your AdvancedJS score is 63
// Your CSharp score is 85
```

So just for getting the scores and displaying them, we should write **student.scores.JavaScript**, which is not much an issue, but what if there is a need to access some properties even more deep level of nesting? Of course, the chances of making a syntax error are very high, and probably somewhere you will enter **score** instead of **scores**. And again, if the scores object we are accessing is deeply nested in another object, the object access chain becomes longer which could mean more typing and making more error-prone code. That's why destructuring is used because with destructuring we can do the same in a more expressive and compact syntax

Imagine the previous example but now, by using destructuring. Everything is the same except for the function displaySummary()

```javascript
//By using destructuring
function displaySummary({ name, scores: { JavaScript = 0, AdvancedJS = 0, CSharp = 0 } }) {
    console.log('Hello, ' + name);
    console.log('Your JavaScript score is ' + JavaScript);
    console.log('Your AdvancedJS score is ' + AdvancedJS);
    console.log('Your CSharp score is ' + CSharp);
}
displaySummary(student)
//Compared to the previous one, that does not use destructuring

function displaySummary(student) {
    console.log('Hello, ' + student.name);
    console.log('Your JavaScript score is ' + (student.scores.JavaScript || 0));
    console.log('Your AdvancedJS score is ' + (student.scores.AdvancedJS || 0));
    console.log('Your CSharp score is ' + (student.scores.CSharp || 0));
}
displaySummary(student)
```

From the comparison, we can see that the function declaration with destructuring is more clear, and simple


## Extra materials 📘
* [Introduction and using objects](https://codetheweb.blog/2018/06/09/javascript-objects/)
* [What is THIS in javascript](https://blog.bitsrc.io/what-is-this-in-javascript-3b03480514a7)
* [Object methods](https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript)
* [How to use spread syntax](https://codeburst.io/javascript-es6-the-spread-syntax-f5c35525f754)
* [How To Use Object Destructuring in Modern Javascript](https://itnext.io/how-to-use-object-destructuring-in-modern-javascript-59758ebfb778)
