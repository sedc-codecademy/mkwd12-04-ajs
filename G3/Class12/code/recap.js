// concatenating arrays
let nums1 = [1, 2, 3, 4];
let nums2 = [5, 6, 7];
let num3 = [...nums2, ...nums1];

// We can destructure nested arrays too
const colors = ['red', [128, 135, 70], '#F11222'];
let [, [red, , blue], hex] = colors;
console.log(red);

// *We can access nested array element by first accessing the outer array, and then accessing the inner element via indexes
// access the green element
let greenElement = colors[1][2] // some kind of matrix

// matrix (2 dimensional array)
let fruits = [[banana, mango, orange],[raspberry, blueberry, blackberry], [apple, pear, kiwi]];
let raspberry = fruits[1][0];

// adding new properties to an object via ovject destructuring
let person = {
    firstName: 'John',
    lastName: 'Doe'
}

const newPerson = {...person, age: 30, city: 'Skopje'};

