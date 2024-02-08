// Constructor Notation Templates

// let person = new Object();

function Dog(name , age , breed , color , favoriteFood) {
    this.name = name; // this is pointing to the current object we are in "Dog"
    this.age = age;
    this.breed = breed;
    this.color = color;
    this.favoriteFood = favoriteFood;

    this.bark = () => console.log('Woof woof!');

    this.eat = () => {
        this.favoriteFood.forEach(food => {
            console.log('My favorite food is ',food);
        });
    };

}

// let rex = new Dog('Rex',18,'dog','brown',['Chicken','Broccoli']);
// let sparky = new Dog('Sparky',25,'dog','brown',['Vegetables','Lasagna']);

// sparky.eat();
// rex.bark();

// let person = {
//     firstName : 'Marko',
//     lastName : 'Djamtoski',
//     innerHeight : 175,
//     // sayMyName : () => { // whenever we use an arrow function this will refer to the window object.
//     //     console.log(this);
//     //     console.log(this.innerHeight);
//     //     console.log(this.firstName + this.lastName)
//     // }
//     sayMyName :  function () { // in a normal anonymous function this will refer to the object we are currently in.
//         console.log(this);
//         console.log(this.innerHeight);
// //         console.log(this.firstName + this.lastName)
// //     }
// // };

// // person.sayMyName();

// const testThisBtn = document.getElementById('testThis');
// testThisBtn.addEventListener('click',() => {
//     console.log(testThisBtn);
//     console.log(this);
// })

// let people = {
//     number : 100,
//     innerHeight : 500,
//     sum : function () {
//         console.log(people.number);
//         console.log(people.innerHeight);
//         return this.number + this.innerHeight;
//     }
// }

// // console.log(people.sum());

// let morePeople = people;
// console.log(people.innerHeight);
// morePeople.innerHeight = 1000;
// console.log(people.innerHeight);

// let cat = {
//     firstName : 'Bugsy',
//     color : 'Black',
//     age : 6
// }
// // Without using destructuring
// console.log(cat.firstName);
// console.log(cat.color);
// console.log(cat.age);

// // Using destructuring
// const { firstName , color , age } = cat;
// console.log(firstName);
// console.log(color);
// console.log(age);


// const student = {
//     fullName : 'Marko Djamtoski',
//     age : 28,
//     scores : {
//         Javascript : 100,
//         CSharp : 75,
//         CSS : 0
//     }
// }
// Without object destructuring using student object
// function displaySummary(student) {
//     console.log('Your Javascript score is : ', student.scores.Javascript);
//     console.log('Your C# score is : ', student.scores.CSharp);
//     console.log('Your CSS score is : ', student.scores.CSS);
// }

// With object descturturing using the student object
// function displaySummary({fullName , scores : { Javascript = 0 , CSharp = 0 , CSS = 0}}) {
//     console.log(fullName);
//     console.log('Your Javascript score is : ', Javascript);
//     console.log('Your C# score is : ', CSharp);
//     console.log('Your CSS score is : ', CSS);
// }

// displaySummary(student);


// function sumOfTwoNumbers(numberOne = 0,numberTwo = 0) {
//     console.log(numberOne);
//     console.log(numberTwo);
//     console.log(numberOne + numberTwo);
// }

// function displayOneOrTheOther(displayOne = true ) {
//     if(displayOne) {
//         console.log('One');
//     }
//     else {
//         console.log('Other');
//     }
// }


// sumOfTwoNumbers(1);
// displayOneOrTheOther(false);

// let mouse = {
//     mouseName : 'Bugsy',
//     mouseColor : 'Black',
//     mouseAge : 6
// }

// const {mouseName , mouseColor , mouseAge = 0 } = mouse;

// const rgb = [255,255,0];

// const [red,green,blue] = rgb;
// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];

// console.log(`R : ${red}, G : ${green} , B : ${blue}`);

// Spread syntax or three dots [...];

let numbers = [1,2,3];

// function sumOfThreeNumbers(numberOne,numberTwo,numberThree) {
//     console.log(numberOne + numberTwo + numberThree);
// }

// sumOfThreeNumbers(numbers[0],numbers[1],numbers[2]); // without using spread syntax
// sumOfThreeNumbers(...numbers);

// let moreNumbers = [...numbers];
// // let moreNumbers = numbers;
// moreNumbers[0] = 5; // we change the first element in the array to 5;
// console.log(numbers[0]);

// let obj = new Object();

// let person = {
//     name : 'Marko',
//     age : 26,
// }

// let people = Object.create(person); // people has everything person has

// console.log(people.name);
// console.log(people.age);
// people.number = 20;
// people.color = 'white';
// people.sayHello = () => console.log('Hello my name is ' + people.name);

// let morePeople = Object.create(people); // will create a copy and get the value of the object by prototype
// // let morePeople = people; // this will get the reference to the object
// morePeople.sayHello = 'Petko';
// people.sayHello();
// console.log(morePeople);


// let addressInfo = {
//     street : 'Bulevard Turistichka',
//     streetNumber : 50,
//     contactPerson : 'SEDC'
// };
// let anotherAdress = {
//     street : 'Abas Emin',
//     streetNumber : 25,
//     contactPerson : 'Petko'
// }

// let combinedAdresses = Object.assign(addressInfo,anotherAdress);
// let combinedObjects = Object.assign(addressInfo,people);
// console.log(combinedAdresses);
// console.log(combinedObjects);


let dog = {
    name: "Sparky",
    age: 1,
    color : 'Black',
    bark: function(){
        console.log("BARK BARK BARK");
    },
    printProperties : function() {
        Object.keys(this).forEach(key => console.log(key));
    },
    printValues : function() {
        Object.values(this).forEach(value => console.log(value)); 
    },
    printEntries : function() {
        Object.entries(this).forEach(entry => console.log(entry));
    }
}

console.log(dog);
// dog.printProperties();
// dog.printValues();
// dog.printEntries();

// Object.freeze(dog);
// dog.age = 30;
// try{
// dog.newProperty = 'Marko';
// }
// catch{
//     throw console.error('Error trying to change object');
// }
// console.log(dog);


Object.seal(dog); // we can modify the values of the properties but we cannot add new ones.
dog.age = 25;
console.log(dog.age);
