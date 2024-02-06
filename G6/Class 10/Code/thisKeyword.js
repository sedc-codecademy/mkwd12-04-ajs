//this refers to the current object that we are working with

console.log(this); //global scope => window

function greeting(){
    console.log("Hello from: ");
    console.log(this); //window
}

greeting(); //window.greeting()

//inside objects (object literals)
let someObject = {
    someProperty : this, //this refers to window
    someMethod: function(){
        console.log(this.someProperty);  
        console.log(this);//this refers to someObject
    }
}

console.log(someObject.someProperty);
someObject.someMethod();

//constructor template

function SomeTemplate(someString){
    console.log(this);
    this.exampleMethod = function(){
        console.log("inside the method");
        console.log(this);
    }
}

//use as a normal function
SomeTemplate("some text"); //window

let instance = new SomeTemplate("some more text"); 
instance.exampleMethod();