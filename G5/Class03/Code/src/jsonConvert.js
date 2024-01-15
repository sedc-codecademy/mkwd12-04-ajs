let academy = {
    academyName: "SEDC",
    academies: ["Programming", "QA", "Design"],
    numberOfTrainers: 100
}

//we want to get string in JSON format from our JS object
//serialization
let jsonString = JSON.stringify(academy);
console.log(jsonString);

//parse JSON string into JS object
//deserialization
let parsedAcademy = JSON.parse(jsonString);
console.log(parsedAcademy);
