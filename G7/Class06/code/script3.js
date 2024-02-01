let numbers = [1, 2, 3, 4, 5]

console.log("=========== Reduce ==========")

// withoud a higer order function

function addNumbers() {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log(addNumbers());

let sumReduce = numbers.reduce((total, number) => total + number);  
console.log(sumReduce);

console.log("=========== SORT ============");

// Without higher order function

function sortFunction(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log("before sort", numbers);
console.log("after sort: ", sortFunction(numbers));


let numbersAsceningArray = numbers.sort((f, s) => f - s); 
console.log(numbersAsceningArray);

console.log("=========== For each ============");

numbers.forEach(number => console.log(number + 3));


console.log("======= Every =========")
// .every() test every value from the array and returns true or false

let biggerThenTwo = numbers.every(num => num > 2);
console.log(biggerThenTwo);


console.log("========== Some ========");

let someBiggerThenTwo = numbers.some(num => num > 2);
console.log(someBiggerThenTwo);


console.log("============ Find ==========");

let cities = ["Skopje", "Veles", "Kumanovo", "Bitola", "Tetovo"];

let skopje = cities.find(city => city === 'Skopje');
console.log(skopje);


console.log("========== Find Index =========");

let velesIndex = cities.findIndex(city => city === "Veles");
console.log(velesIndex);


console.log("=========== Includes =========");

let isBitolaInArray = cities.includes("Bitola");
console.log(isBitolaInArray);


console.log("============== Flat ==========");

let number2 = [1, 2, [3, 4, [5, 6]]];

let flattend = number2.flat(2);
console.log(flattend);

console.log("========== Flat Map ==========");

// using map and flat separatly
// let characters = cities.map(word => word.split(""));
// let charactersFlat = characters.flat();
// console.log(charactersFlat);


let characters = cities.flatMap(word => word.split(""));
console.log(characters);


console.log("========== Join ==========");

let joined = cities.join(" - ");
console.log(joined);


console.log("========= Slice ==========");

let sliced = cities.slice(1, 3);
console.log(sliced);


console.log("========= Splice =======");

let spliced = cities.splice(1, 2, "Kichevo", "Ohrid");
console.log(spliced);
console.log("Cities:", cities);


console.log("============= Reverse =========");

let reversed = cities.reverse();
console.log(reversed);

// copy of an array

// we didn't make a copy of the array, we have just created a new refrence to the same array
// let newNumbers = numbers;
// console.log("new numbers array", newNumbers);
// console.log("original numbers array", numbers);

// newNumbers.sort((f, s) => s - f);
// console.log("sorted new array", newNumbers);
// console.log("original array after sorting", numbers);


// real copy
let newNumbers = [...numbers];
// let newNumbers = [...numbers].reverse();

newNumbers.sort((f, s) => s - f);

console.log(newNumbers);
console.log(numbers);


