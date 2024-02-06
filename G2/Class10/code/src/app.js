console.log(window);
console.log(typeof(window)); //object

console.log(document)
console.log(typeof(document)) //object

console.log(document.getElementById)
console.log(typeof(document.getElementById)) //fun


console.log(typeof([]))// object

console.log(typeof([].push)) //fun

function sayHello(){
    console.log('Hello');
}

sayHello();
window.sayHello();
console.log(window);
console.log('this====')
console.log(this); //global scope

function Dog(name, age, color, favoriteFood){
    console.log(this);
    this.name = name;
    this.age = age;
    this.color = color;
    this.favoriteFood = favoriteFood;
    this.bark = function(){
        console.log('bark bark')
    };
    this.eat = function(){
        console.log(this); // Dog object
        console.log(this.favoriteFood);
    }
    this.food =()=>{
        console.log(this) // Dog object
    }

}

let sparky = new Dog('Sparky', 2, 'white', 'beef');

console.log('=================')
console.log(sparky);
console.log('================')
sparky.eat();

console.log('================')
let thisObj = {
	whatsThis: this,
    testMethod: () => {
        console.log(this)
    }
}
console.log(thisObj.whatsThis);
console.log('================')
sparky.food();
thisObj.testMethod()

let html = {
    button: document.querySelector('#id')
}

html.button.addEventListener('click',()=>{
    console.log(this)
})

function test(){
    let test = 'test';
    console.log(this);
}

test()

let arrowFunction = ()=>{
    console.log(this)
}
arrowFunction()

console.log("=============================");
let dog = {
    dogName: "Bugsy",
    dogColor: "Black",
    dogAge: 4,
    dogFood:'beef' 
}

console.log(dog.dogAge);

let {dogName: names, dogAge, dogFood} = dog;

console.log(names);
console.log(dogAge);
console.log(dogFood);

const student = {
    name: 'John Doe',
    age: 19,
    scores: {
        JavaScript: 75,
        AdvancedJS: 63,
        CSharp: 85
    }
};

function displayStudent(student){
    console.log(`Hello ${student.name}`)
    console.log(`JavaScript scores: ${student.scores.JavaScript || 0}`)
    console.log(`AdvancedJS ${student.scores.AdvancedJS || 0}`)
    console.log(`CSharp ${student.scores.CSharp || 0}`)

}

displayStudent(student);

console.log('====');
function displayStudentDes({name: fullName, scores: {JavaScript = 0, AdvancedJS = 0, CSharp = 0}}){
    console.log(`Hello ${fullName}`)
    console.log(`JavaScript scores: ${JavaScript}`)
    console.log(`AdvancedJS ${AdvancedJS}`)
    console.log(`CSharp ${CSharp}`)
}
displayStudentDes(student)


console.log('======')

const rgb = [255, 200, 0];

const [red, green, blue] = rgb;

console.log(`R: ${red} G: ${green} B: ${blue}`); //R:255 G:200 B:0

const rgb1 = ['#F123',[255, 200, 0], 555];

const [hex, [red1, green1, blue1]] = rgb1;

console.log(`Hex: ${hex} R: ${red1} G: ${green1} B:${blue1}`)

let barni = {
    name: 'Barni',
    age: 1,
    color: 'white'
}
let dogs1 = {
    name: "Sparky",
    age: 1,
    bark: function(){
        return "BARK BARK BARK";
    },
    printProperties: function(){
        Object.keys(barni).forEach(key => console.log(key));
    },
    printValues: function(){
        Object.values(barni).map(values => console.log(values));
    }
}

dogs1.printProperties();
dogs1.printValues();

console.log(Object.entries(barni))

let newDog = {};
let nameProperty = "dogName";
newDog[nameProperty] = "Sniffy"; // will have dogName: Sniffy property
newDog.age = 1;
console.log(newDog)

