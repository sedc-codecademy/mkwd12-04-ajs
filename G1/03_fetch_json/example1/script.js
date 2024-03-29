// Normal JS object created with object literal
// let group = {
//   name: "G1",
//   trainer: "Ivo Kostovski",
//   assistant: "Iva Cvetkovska",
//   academy: "Web Development",
//   track: "JS",
//   isActive: true,
//   year: 2024,
//   classroom: {
//     title: "Palmyra",
//     capacity: 24,
//   },
//   graduationDate: null,
//   students: ["Dejan", "Simona", "Dino", "Nebojsha", "Petar", "Gligor", "Ivana"],
// };

// JS => JSON - Stringify
// let jsonGroup = JSON.stringify(group);
// let jsonGroup = JSON.stringify(group, null, 2); - null and 2 are used to beautify the JSON

// console.log(jsonGroup);
// console.log(typeof group); // object
// console.log(typeof jsonGroup); // string

// JSON => JS - Parse
// let jsonGroupCustom = `
// {
//     "name": "G1",
//     "trainer": "Ivo Kostovski",
//     "assistant": "Iva Cvetkovska",
//     "academy": "Web Development",
//     "track": "JS",
//     "isActive": true,
//     "year": 2024,
//     "classroom": {
//         "title": "Palmyra",
//         "capacity": 24,
//     },
//     "graduationDate": null,
//     "students": ["Dejan", "Simona", "Dino", "Nebojsha", "Petar", "Gligor", "Ivana"]
//   }
// `;

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

let groupInfo = document.getElementById("group-info");
let studentsList = document.getElementById("students-list");

let group = null;

// Fetch executes asynchronously
fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/03_class_fetch_json/example1/group.json"
)
  .then(function (res) {
    // This than block is always the same
    console.log("Response:", res, new Date().getMilliseconds());
    return res.json();
  })
  .then(function (body) {
    // Here goes all the logic using the returned data, as this is the only place where we surely know that the response has been received successfully
    group = body;
    showInfo(group);
    console.log("BODY", body, new Date().getMilliseconds());
  })
  .catch(function (error) {
    // Here we handle cases if the API call fails
    console.log("ERROR", error);
  })
  .finally(function () {
    // Finally executes always, it is used for cleanup operations at the end of the fetching execution
    console.log("Fetch is done");
  });

function showInfo(groupData) {
  // if we don't have group data, stop execution to prevent trying to get properties from parameter that is undefined.
  if (!groupData) return;

  groupInfo.innerText = `
        The group ${groupData.name} has classes in the
        classroom ${groupData.classroom.title}, which has
        the capacity for ${groupData.classroom.capacity}
        and the group has ${groupData.students.length}
        students.
    `;

  for (let student of groupData.students) {
    studentsList.innerHTML += `<li>${student}</li>`;
  }
}

console.log("random", new Date().getMilliseconds());
// showInfo(group); WE DON'T HAVE BODY VALUE HERE!!!

//   Promise states:
// Pending => Success | Failure
