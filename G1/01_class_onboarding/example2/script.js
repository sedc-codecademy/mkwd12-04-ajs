let dirtyArr = [
  1,
  2,
  true,
  false,
  "marko",
  ["darko"],
  undefined,
  null,
  { name: "Eminem" },
  NaN,
  "SEDC",
];

let anotherDirtyArr = [true, null, "eden string", "drug string"];

function cleanAllButSelectedType(arr, type) {
  let stringsArr = [];

  for (let item of arr) {
    if (typeof item === type) {
      stringsArr.push(item);
    }
  }

  return stringsArr;
}

// console.log(cleanAllButSelectedType(dirtyArr, "number"));
// console.log(cleanAllButSelectedType(dirtyArr, "string"));
// console.log(cleanAllButSelectedType(dirtyArr, "boolean"));
// console.log(cleanAllButSelectedType(anotherDirtyArr, "string"));
// console.log(cleanAllButSelectedType(anotherDirtyArr, "number"));
