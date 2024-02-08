console.log("==================== DESTRUCTURING ====================")
// => breaking down a complex structure into simpler parts
// => cleaner syntax to get items from arrays, or property-values from objects, and put them into distinct variables

console.log("");
console.log("=============== Object destructuring ===============")

let userObj = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": "2000-12-25",
    "image": "https://robohash.org/Terry.png?set=set4",
    "bloodGroup": "A-",
    "height": 189,
    "weight": 75.4,
    "eyeColor": "Green",
    "hair": {
        "color": "Black",
        "type": "Strands"
    },
    "domain": "slashdot.org",
    "ip": "117.29.86.254",
    "address": {
        "address": "1745 T Street Southeast",
        "city": "Washington",
        "coordinates": {
            "lat": 38.867033,
            "lng": -76.979235
        },
        "postalCode": "20020",
        "state": "DC"
    }
}

// => take id, firstName, lastName (WITHOUT DESTRUCTURING)
// const id = userObj.id;
// const firstName = userObj.firstName;
// const lastName = userObj.lastName;
// console.log(id, firstName, lastName);

// => take id, firstName, lastName (WITH DESTRUCTURING)
const { id, firstName, lastName } = userObj;
console.log(id, firstName, lastName);

// => take firstName, lastName, age
const { userFirstName, userLastName, age } = userObj;
console.log(userFirstName, userLastName, age);

// We must use the same key-names (propery names) !

// *However, there is workaround syntax even for that* 
// Syntax: { propertyName : ourCustomVariableName } = ourObject
const { firstName: ourCustomFirstName } = userObj;


// => take address latitude and longitute (WITHOUT DESCTRUCTURING)
let latitude = userObj.address.coordinates.lat;
let longitude = userObj.address.coordinates.lng;
console.log(latitude, longitude);

// => take address latitude and longitute (WITH DESCTRUCTURING)
// const { lat, lng } = userObj.address.coordinates;
// console.log(lat, lng);

// => take address city, latitude and longitude (WITH DESCTRUCTURING)
// Nested Destructuring
const { city, coordinates: { lng, lat } } = userObj.address
console.log(city, lng, lat);



console.clear();
console.log("");
console.log("=============== Parameters destructuring ===============")

// function getUserFullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// function getUserFullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

function getUserFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}

let terryFullName = getUserFullName(userObj);
console.log(terryFullName);


console.clear();
console.log("");
console.log("=============== Array destructuring ===============")

const testArray = [100, 300, 5_000, 400, 10_000];

// => take first 3 elements (WITHOUT DEST)
const firstNum = testArray[0];
const secondNum = testArray[1];
const thirdNum = testArray[2];
console.log(firstNum, secondNum, thirdNum);

// => take first 3 elements (WITH DEST)
// naming is proizvolno :D
const [itemOne, itemTwo, itemThree, , itemFive] = testArray;
console.log(itemOne, itemTwo, itemThree, itemFive);
// TAKES THEM BY ORDER !!!

// => take 1 and 3 div with class arrayDemo
const [firstDiv, , thirdDiv] = document.getElementsByClassName("arrayDemo")
console.log(firstDiv);
console.log(thirdDiv);

// Destructuring with default values
const testArrayTwo = ["First string", "Second string", "blablabla"];
const [firstString, secondString, thirdString = "Third string :)"] = testArrayTwo;
console.log(firstString);
console.log(secondString);
console.log(thirdString);



console.clear();
console.log("");
console.log("=============== Spread operator (...) ===============")

// *** Spread in function calls ***
console.log(Math.max(123, 23, 434, 1000, 400, 343, 43443, 4343));
let numbers = [123, 23, 434, 1000, 400];
console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers));
console.log(Math.max(123, 23, 434, 1000, 400));

console.log(numbers); // prints the whole array object
console.log(...numbers); // prints only the values


// *** Spread with Arrays ***
const dogs = ["Bax", "Axe", "Chapo"];
const cats = ["Zuza", "Missy"];

// const allPets = dogs + cats // :) will get string
// console.log(allPets);

// => merge 2 arrays into 1 (WITH SPREAD)
const allPets = [...dogs, ...cats];
console.log(allPets);

// => create copy of dogs array
const dogsCopy = [...dogs];
dogsCopy.push("Neznam") // won't change the original array


// *** Spread with Objects ***

// => merge 2 objects into 1 (WITH SPREAD)

const dog = {
    name: "Aks",
    breed: "Pug"
}
const dogDescription = {
    group: "Toy",
    color: "Appricot Fawn",
    origin: "China"
}
const owner = {
    fullName: "Ilija Mitev"
}

const dogInfo = { ...dog, ...dogDescription, ...owner, isHappy: true }
console.log(dogInfo);



console.clear();
console.log("");
console.log("=============== Rest operator (...) ===============")

const students = ["Bob", "Jill", "Jogn", "John", "Steve"];

const [bob, jill, ...ostanatiStudents] = students;

console.log(bob, jill);
console.log(ostanatiStudents);

function sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr);
}

console.log(sum(100, 200, 4000, 500));
console.log(sum(100, 200, 4000, 500, 2000, 340300));


