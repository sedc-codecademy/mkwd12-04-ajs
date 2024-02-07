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

// Will come back later on this !!!


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



