let group = {
  name: "G1",
  trainer: "Ivo Kostovski",
  assistant: "Iva Cvetkovska",
  academy: "Web Development",
  track: "JS",
  isActive: true,
  year: 2024,
  graduationDate: null,
  students: ["Dejan", "Simona", "Dino", "Nebojsha", "Petar", "Gligor", "Ivana"],
};

// JS => JSON - Stringify
let jsonGroup = JSON.stringify(group);
// let jsonGroup = JSON.stringify(group, null, 2); - null and 2 are used to beautify the JSON

console.log(jsonGroup);
console.log(typeof group); // object
console.log(typeof jsonGroup); // string

// JSON => JS - Parse
let jsonGroupCustom = `
{
    "name": "G1",
    "trainer": "Ivo Kostovski",
    "assistant": "Iva Cvetkovska",
    "academy": "Web Development",
    "track": "JS",
    "isActive": true,
    "year": 2024,
    "classroom": {
        "title": "Palmyra",
        "capacity": 24,
    },
    "graduationDate": null,
    "students": ["Dejan", "Simona", "Dino", "Nebojsha", "Petar", "Gligor", "Ivana"]
  }
`;

// Rules of JSON:
// Keys (properties) must be in double quotes
// Use only "" - double quotes
// Strings MUST be in ""
// Booleans stay the same
// Numbers stay the same
// Objects stay the same
// Arrays stay the same
// null, undefined, NaN stay the same
// Remove trailing commas (no comma on the last line) - including nested objects
