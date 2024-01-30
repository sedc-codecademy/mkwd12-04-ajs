// -------- Higher Order Functions -----------------------

// HOF are functios that take another function as an argument

let numbers = [1, 2, 3, 4, 5];
console.log("original array:", numbers);


// ------- MAP ------------------------------
// .map() is used to transform elements in a array, it returns the SAME number of elements in a NEW array.

console.log("============ MAP ============");

// normal function that returns new array in which each element is multiplied by 2;

function multiplyByTwo(array) {
    let newArray = [];

    for(const number of array) {
        newArray.push(number * 2);
    }

    return newArray;
}

let multiplied = multiplyByTwo(numbers);
console.log('multiplied array with normal JS function',multiplied);

// .map with anonymous function 

let multipliedMapAnonymous = numbers.map(function(number) {
    return number * 2;
});
console.log('multiplied array with .map using anonymous function', multipliedMapAnonymous);

// .map with arrow function
// USE THIS!

let multipledMapWithArrow = numbers.map(number => number * 2);
console.log("multipled with .map() using arrow function:", multipledMapWithArrow);


// ---------- FILTER --------------
// .filter() is used to filter elements in a array. It returns ONLY the elements that will pass a certain condition;

console.log("========= FILTER ===========");

// normal function that returns new array with elements larger then 3

function largerThenThree(array) {
    let newArray = [];

    for (const number of array) {
        if(number > 3) {
            newArray.push(number)
        }
    }

    return newArray;
}

let filteredArray = largerThenThree(numbers);
console.log("filtered array with normal JS Function", filteredArray);

// .filter with anonymos

let filteredArrayWithAnonymos = numbers.filter(function(number) {
    return number > 3
})

console.log("filtered with .filter using a anonymous function", filteredArrayWithAnonymos);

// .filter with arrow function
// USE THIS APPROACH!!

let filteredArrayWithArrow = numbers.filter(number => number > 3);
console.log("filtered array with .filter using arrow function", filteredArrayWithArrow);

console.log("========== REDUCE ===========");
// .reduce() - we will return the sum of all the elements of the array

let sumReduce = numbers.reduce((total, number) => total + number);
console.log("sum of elements in an array using .reduce", sumReduce);


// filter out all the elementes bigger then 3
// increase their value by the number 5
// add the sum of each element

let result = numbers
                    .filter(number => number > 3)
                    .map(number => number + 5)
                    .reduce((total, number) => total + number)

console.log("result:", result);


console.log("============== SORT ============");
// with .sort we will sort the elements of the array in descending and an ascending order

let sortedNums = numbers.sort();
console.log("sorted nums", sortedNums);

let numbersDescending = numbers.sort((first, second) => second - first);
console.log("sorted array - Descending", numbersDescending);

let numbersAscending = numbersDescending.sort((first, second) => first - second);
console.log("Ascending", numbersAscending);





