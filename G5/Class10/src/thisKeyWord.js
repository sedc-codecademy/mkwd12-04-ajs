console.log(this); //window -> global scope

console.log("===inside a function===");
function greeting(){
    console.log("Hi");
    console.log(this); //window
}

//window.greeting()
greeting();

console.log("===inside objects (literals)===");

let someObject = {
    someProperty: this, //window
    someMethod: function(){
        console.log("Inside someObject's method");
        console.log(this); //someObject
    },
    secondProperty: {
        thisProperty: this //window
    }
}

console.log(`This property inside nested object: ${someObject.secondProperty.thisProperty}`);
console.log(someObject.someProperty);
someObject.someMethod();

console.log

console.log("===Constructor functions===");
function Template(name){
    this.name = name;
    console.log(this);

    this.message = function(){
        console.log("Some message");
        console.log(this);
    }
}

Template("test"); //this -> window, acts as regular function, window.Template("test")

let template = new Template("test2");
template.message(); //this -> template

