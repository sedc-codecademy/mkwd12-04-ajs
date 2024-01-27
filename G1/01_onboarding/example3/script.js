// Generating arrays
// Generate an array that has all the numbers
// that are divisible by 3 from 1 to 1000
// Generate an array that has all the even numbers
// that are divisible by 4 from 1 to 1000
// Generate an array that has all the numbers that
// end with the digit 1 from 1 to 1000

let allNumbers = [];
let divisibleByThree = [];
let divisibleByFour = [];
let endsWithOne = [];

for (let i = 1; i <= 1000; i++) {
  allNumbers.push(i);

  if (i % 3 === 0) {
    divisibleByThree.push(i);
  }

  if (i % 4 === 0) {
    divisibleByFour.push(i);
  }

  if (i % 10 === 1) {
    endsWithOne.push(i);
  }
}

console.log("All", allNumbers);
console.log("By 3", divisibleByThree);
console.log("By 4", divisibleByFour);
console.log("Ends with 1", endsWithOne);

// Calculate price with tax for different products
// 100 => 118

function calculateFullPrice(price, tax = 1.18) {
  return price * tax;
}

function calculateFullPriceForItems(items) {
  let itemsWithFullPrice = [];
  for (let item of items) {
    let result = {
      name: item.name,
      fullPrice: calculateFullPrice(item.price, item.tax),
    };
    itemsWithFullPrice.push(result);
  }
  return itemsWithFullPrice;
}

let shoppingItems = [
  { name: "pillow", price: 100, tax: 1.18 },
  { name: "glass", price: 50, tax: 1.07 },
  { name: "cup", price: 70 },
  { name: "pen", price: 9, tax: null },
];

// [100, 200, 450...]
// [
// { name: 'pillow', fullPrice: 123 }
// ]
let shoppingItemsWithFullPrice = calculateFullPriceForItems(shoppingItems);

console.log(shoppingItemsWithFullPrice);

// let shoesPrice = calculateFullPrice(1000, 1.18);
// let breadPrice = calculateFullPrice(20, 1.05);
// let mousePrice = calculateFullPrice(300);

// console.log("shoes", shoesPrice);
// console.log("bread", breadPrice);
// console.log("mouse", mousePrice);
