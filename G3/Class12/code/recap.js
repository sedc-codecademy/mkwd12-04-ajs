let nums1 = [1, 2, 3, 4];
let nums2 = [5, 6, 7];
let num3 = [...nums2, ...nums1];

const colors = ['red', [128, 135, 70], '#F11222'];
let [, [red, , blue], hex] = colors;
// console.log(red);

let person = {
    firstName: 'John',
    lastName: 'Doe'
}

const newPerson = {...person, age: 30, city: 'Skopje'};

