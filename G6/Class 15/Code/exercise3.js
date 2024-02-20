class Shape{
    constructor(name, color, position){
        this.name = name;
        this.color = color;
        this.position = position;
    }
    set name(nameInput){
        if(!nameInput){
            console.log("You must enter a name");
            return;
        }
        this._name = nameInput;
    }

    get name(){
        console.log("Getting the name..")
        return this._name;
    }
    get color(){
        console.log("Getting the color..")
        return this._color;
    }

    set color(colorInput){
        if(!colorInput){
            console.log("You must enter a color");
            return;
        }
        this._color = colorInput;
    }

    getArea(){
        console.log("getArea has no concrete implementation")
    }
    getPerimeter(){
        console.log("getPerimeter has no concrete implementation")
    }
    checkPosition(shape){
        if(shape instanceof Shape){
        //the most specific check (if condition) should always be on top
        if(shape.position[0] < this.position[0] && shape.position[1] < this.position[1]){
            console.log(`Shape ${shape.name} has both x and y coordinates in front of this`);
            return;
        }
        if(shape.position[0] < this.position[0]){
            console.log(`Shape ${shape.name} x coordinate is in front of this`);
            return;
        }
        if(shape.position[1] < this.position[0]){
            console.log(`Shape ${shape.name} y coordinate is in front of this`);
            return;
        }

        }else{
            console.log("The input is not a Shape");
        }
    }

    static move(shape){
        if(shape instanceof Shape){
            console.log("Moving..");
            shape.position[0] += 5;
            shape.position[1]+= 5;
        }else{
            console.log("The input is not a Shape");
        }
    }
  
}

let shape1 = new Shape("shape1", "red", [5,6]);
let shape2 = new Shape("shape2", "blue", [2,3]);

shape1.checkPosition(shape2); //shape1 is this(the obj we are working with) and shape2 is shape - the obj we sent as param

class Rectangle extends Shape{
    constructor(name, color, position, sideA, sideB){
        super(name, color, position); //the constructor of the parent class
        this.sideA = sideA;
        this.sideB = sideB;
    }

    //override the methods with concrete implementation
    getArea(){
        return this.sideA * this.sideB;
    }
    getPerimeter(){
        return 2* this.sideA + 2* this.sideB;
    }
}
class Circle extends Shape {
    constructor(name, color, position, radius) {
        super(name, color, position);
        this.radius = radius;
        this.pi = 3.14;
    }
     //override the methods with concrete implementation
    getArea() {
        return this.radius * this.radius * this.pi;
    }
    getPerimeter() {
        return 2 * this.radius * this.pi;
    }
}