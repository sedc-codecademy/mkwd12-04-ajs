class Shape{
    constructor(name, color, position){
        this.name = name;
        this.color = color;
        this.position = position;
    }

    getArea(){
        console.log("getArea has no implementation in base class");
    }

    getPerimeter(){
        console.log("getPerimeter has no implementation in base class")
    }
}

class Rectangle extends Shape{
    constructor(name, color, position, sideA, sideB){
        super(name,color,position);
        this.sideA = sideA;
        this.sideB = sideB;
    }

    getArea(){
        return this.sideA * this.sideB;
    }

    getPerimeter(){
        return 2*this.sideA + 2*this.sideB;
    }
}

class Circle extends Shape{
    constructor(name, color, position, radius){
        super(name,color,position);
        this.radius = radius;
    }

    getArea(){
        return this.radius * this.radius * 3.14;
    }

    getPerimeter(){
        return 2*this.radius*3.14;
    }
}

let shape = new Shape("shape", "red", [8,9]);
console.log(shape.getArea());

let circle = new Circle("circle", "blue", [2,3], 5);
console.log(circle.getArea());
console.log(circle.getPerimeter());




// function handler(event){

// }

// GamepadButton.addEventListener("click", handler);



// button.addEventListener("click", function(event){
//     event.preventDefault;
//     myFunction();
// })


// function myFunction(){

// }