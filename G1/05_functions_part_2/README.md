# Functions pt2 🍊

## Functions as first class citizens

Functions are first-class citizens in the JavaScript language. But what does a first-class citizen mean? Well simply
put, if some entity in a programming language has the power to be used as any other entity in that language, it is
considered a first-class citizen. Why are functions in JavaScript considered first-class citizens? Because they can act
and be used as any other entity such as:

* Stored in a variable
* Stored in an array
* Used as an argument to another function
* Used as a return value from another function
* Have properties like objects
* Have methods like objects

If you don't believe it here are some crazy examples of what JavaScript functions are capable of:

### Storing function as a variable

```javascript
let sayHello = function (name) {
  console.log(`Hello there ${name}!`)
};
// we call the function from the variable the same as we do with functions
sayHello("Bob")
```

### Storing functions in an array and using them

```javascript
let numberStatsFunctions = [
  (num) => num > 0 ? "Positive" : "Negative",
  (num) => num % 2 === 0 ? "Odd" : "Even",
  (num) => num >= 0 ? num.toString().length : num.toString().length - 1
];
// We can call the functions from the array
// We can loop it with for as well
numberStatsFunctions[0](2); // Positive
numberStatsFunctions[1](2); // Even
numberStatsFunctions[2](2); // 1
```

### Using function as an argument

```javascript
function calculator(calculateFunc, number1, number2) {
  return calculateFunc(number1, number2);
}

function sum(number1, number2) {
  return number1 + number2
};

function difference(number1, number2) {
  return number1 - number2
};
// We send functions sum and difference to the calculator function
// We can send anonymous functions as well
console.log(calculator(sum, 3, 6)); // 9
console.log(calculator(difference, 40, 12)); // 28
```

### Returning a function from another function

```javascript
function calculator(operation) {
  switch (operation) {
    case  "+":
      return function (number1, number2) {
        return number1 + number2
      };
      break;
    case  "-":
      return function (number1, number2) {
        return number1 - number2
      };
      break;
    default:
      console.log("ERROR")
      return null;
  }
}

// We call the calculator function and get back a function as a result
let result = calculator("+");
// We can call the result function now
console.log(result(2, 5)); // 7
// We can also call the function right away
console.log(calculator("-")(7, 2)); // 5
```

### A function with properties and a method

```javascript
function sayHello(name) {
  return `Hello there ${name}!`;
}

// Adding a properties to a function
sayHello.defaultName = "Bob";
sayHello.description = "This is a function that greets a person.";
// Getting property value from the function
sayHello(sayHello.defaultName); // Hello there Bob!
// Adding a method to a function
sayHello.differentGreeting = function (name) {
  return `Hi ${name}!`;
}
// Calling the method from the function
sayHello.differentGreeting("Bob"); // Hi Bob!
```

## Function arguments

Every functions has a collection of all the arguments sent to that function when it was called. Since the person calling
the function can send as much arguments as he wants, it's important to know how to check how many arguments were passed
before continuing with your execution

```javascript
function longestString() {
  console.log(arguments[0]) // first argument
  console.log(arguments[1]) // second argument
  console.log(arguments[2]) // third argument
  let longest = '';
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}
```

## Higher-order functions

Higher-order functions are just functions that take other functions as arguments. With these functions, we can make our
code more readable and more organized. We can combine higher-order functions to get results that would otherwise cost us
10+ lines of code, to be written and compacted into only one or two

### forEach

forEach is a function that accepts a function as an argument and it runs it for every element in an array. This function
does not return anything. It just runs a code for every element without any resul in return

```javascript
// Without higher order function
for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].firstName} ${students[i].lastName}`);
}

// With higher order function using a function
function logFullNames(student) {
  console.log(`${student.firstName} ${student.lastName}`);
}

students.forEach(logFullNames);

// With higher order function using annonimous function
students.forEach(function (student) {
  console.log(`${student.firstName} ${student.lastName}`)
});

// With higher order function using arrow function
students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
```

### filter

Filter is a higher order function that accepts a function as an argument. That function has an expression that tests
every value from the collection and returns a new collection with values that are true for the expression or statement
in the argument function

```javascript
// Without higher order function
let above18 = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].age >= 18) {
    above18.push(students[i]);
  }
}

// With higher order function using a function
function above18check(student) {
  return student.age >= 18;
}

let above18 = students.filter(above18check);

// With higher order function using annonimous function
let above18 = students.filter(function (student) {
  return student.age >= 18
});

// With higher order function using arrow function
let above18 = students.filter(student => student.age >= 18);
```

### map

Map is a higher order function that accepts a function as an argument as well. But this function will execute a code on
every item of a collection and then return it. This means that we can modify or use every item in an array in a
particular way with only one line of code

```javascript
// Without higher order function
let fiveGradeStudentsNames = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].averageGrade === 5) {
    fiveGradeStudentsNames.push(`${students[i].firstName} ${students[i].lastName}`);
  }
}

// With higher order function using a function
function fiveGradeCheck(student) {
  return student.averageGrade === 5;
}

function fullName(student) {
  return `${student.firstName} ${student.lastName}`;
}

let fiveGradeStudentsNames = students
    .filter(fiveGradeCheck)
    .map(fullName);

// With higher order function using annonimous function
let fiveGradeStudentsNames = students
    .filter(function (student) {
      return student.averageGrade === 5
    })
    .map(function (student) {
      return `${student.firstName} ${student.lastName}`;
    });

// With higher order function using arrow function
let fiveGradeStudentsNames = students
    .filter(student => student.averageGrade === 5)
    .map(student => `${student.firstName} ${student.lastName}`);
```

### reduce

Reduce is a function that accepts a function with two parameters as an argument and a starting value. This function
aggregates multiple values from a collection into one place. It does this with the function passed in with two
parameters. The first parameter is always an aggregate variable. This means that in that all calculations and results
will be combined there. And after that, you have the second parameter which is changed after every cycle and represents
a value from the collection

```javascript
// Without higher order function
let allGradesExeptLowest = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].averageGrade > 1) {
    allGradesExeptLowest += students[i].averageGrade;
  }
}

// With higher order function using a function
function lowestGradeCheck(student) {
  return student.averageGrade > 1;
}

function getGrades(student) {
  return student.averageGrade;
}

function agregateGrades(sum, grade) {
  return sum += grade;
}

let allGradesExeptLowest = students
    .filter(lowestGradeCheck)
    .map(getGrades)
    .reduce(agregateGrades, 0);

// With higher order function using annonimous function
let allGradesExeptLowest = students
    .filter(function (student) {
      return student.averageGrade > 1
    })
    .map(function (student) {
      return student.averageGrade
    })
    .reduce(function (sum, grade) {
      return sum += grade
    }, 0);

// With higher order function using arrow function
let allGradesExeptLowest = students
    .filter(student => student.averageGrade > 1)
    .map((student) => student.averageGrade)
    .reduce((sum, grade) => sum += grade, 0);
```

### sort

Sort is a function that always returns an array of the same items, and the same length but the items are sorted by some
criteria. This function is different from the previous ones because not only does it return a result array, it also
changes the original array. So if we want to keep the original order of our array we have to create a new variable with
the copy of the original variable and sort that, so that our original array can stay the same. The sorting is done
through a simple system. We send a callback that takes two parameters. The two parameters are tested in some
expressions. If the expression returns less than 0, the first item is sent to a lower index than the second. If the
expression returns more than 0 then the second is put to a lower index than the first. If the result is 0 then nothing
happens

```javascript
// Without higher order function
function sortFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].grade < arr[j].grade) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let sorted = sortFunc(students);

// With higher order function using a function
function sortGradesDesc(student1, student2) {
  return student2.grade - student1.grade; // descending
}

function sortGradesAsc(student1, student2) {
  return student1.grade - student2.grade; // ascending
}

studentss.sort(sortGradesDesc);

// With higher order function using annonimous function
studentss.sort(function (student1, student2) {
  return student2.grade - student1.grade; // Descending
});
studentss.sort(function (student1, student2) {
  return student1.grade - student2.grade; // Ascending
});

// With higher order function using arrow function
studentss.sort((student1, student2) => student2.grade - student1.grade); // Descending
studentss.sort((student1, student2) => student1.grade - student2.grade); // Ascending

// Keeping the original array
function copyArray(array) {
  let copied = [];
  array.forEach(x => copied.push(x));
  return copied;
}

let sortedStudents = copyArray(students);
sortedStudents.sort((student1, student2) => student2.grade - student1.grade); // Descending
sortedStudents.sort((student1, student2) => student1.grade - student2.grade); // Ascending
```

#### Copy of an original array?

By just writing let newStudents = students; we do not make a copy of the students array in the newStudents. We just pass
a reference to the students array. This means that the two variables point to the same place in memory. When methods
like sort, change this array it changes in the memory, and with that in both variables.

```javascript
let sortedStudents = students;
sortedStudents.sort((student1, student2) => student2.grade - student1.grade);

console.log(sortedStudents); // Sorted 
console.log(students); // Also sorted? :(
```

### Solution

```javascript
// We create a new array [] and inside the brackets with spread, we add all elements from the students array
function copyArray(array) {
  let copied = [];
  array.forEach(x => copied.push(x));
  return copied;
}

let sortedStudents = copyArray(students);
sortedStudents.sort((student1, student2) => student2.grade - student1.grade);

console.log(sortedStudents); // Sorted 
console.log(students); // Original order
```

![Pass by reference ](https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/passbyrefference.gif?raw=true)

## Other higher order functions (good to know)

### every

Every is a function that accepts a function as an argument. This function has an expression that tests every value from
the collection and returns true or false. If every value in the collection is true for the expression, the every
function returns true. If one value is false for the expression, "every" returns false.

```javascript
let ages = [18, 16, 30, 42, 9];

let areAllMature = ages.every(age => age >= 18); // false
````

### some

Some is a function that accepts a function as an argument. This function has an expression that tests every value from
the collection and returns true or false. If one value in the collection is true for the expression, the some function
returns true. If all values are false for the expression, "some" returns false.

```javascript
let ages = [18, 16, 30, 42, 9];

let isSomeoneUnderage = ages.some(age => age < 18);  // true
````

### find

Find is a function that accepts a function as an argument. This function has an expression that tests every value from
the collection and returns true or false. If one value in the collection is true for the expression, the find function
returns that value. If all values are false for the expression, "find" returns undefined.

```javascript
let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];

let barcelona = cities.find(city => city === 'Barcelona');  // 'Barcelona'
````

### findIndex

FindIndex is a function that accepts a function as an argument. This function has an expression that tests every value
from the collection and returns true or false. If one value in the collection is true for the expression, the findIndex
function returns the index of that value. If all values are false for the expression, "findIndex" returns -1.

```javascript
let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];

let barcelonaIndex = cities.findIndex(city => city === 'Barcelona');  // 1
````

### includes

Includes is a function that accepts a value as an argument. This function checks if the value is in the collection. If
the value is in the collection, the includes function returns true. If the value is not in the collection, "includes"
returns false.

```javascript
let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];

let isBarcelonaInArray = cities.includes('Barcelona');  // true
````

### flat

Flat is a function that accepts a number as an argument. This function flattens the array to the number of levels
specified in the argument. If no argument is passed, the flat function flattens the array to one level.

```javascript
let numbers = [1, 2, [3, 4, [5, 6]]];

let flattened = numbers.flat(2);  // [1, 2, 3, 4, 5, 6]
````

### flatMap

FlatMap is a function that accepts a function as an argument. This function has an expression that tests every value
from the collection and returns true or false. If one value in the collection is true for the expression, the flatMap
function returns that value. If all values are false for the expression, "flatMap" returns undefined.

```javascript
let words = ["apple", "banana", "cherry"];

let characters = words.flatMap(word => word.split('')); // ["a", "p", "p", "l", "e", "b", "a", "n", "a", "n", "a", "c", "h", "e", "r", "r", "y"]
````

### join

Join is a function that accepts a string as an argument. This function joins all elements of the array into a string
with the argument as a separator. If no argument is passed, the join function joins all elements of the array into a
string with a comma as a separator.

```javascript
let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];

let joined = cities.join(' - '); // 'Skopje - Barcelona - New York - Berlin - Paris'
````

### slice

Slice is a function that accepts two numbers as arguments. This function returns a new array with the elements from the
first argument index to the second argument index. If no second argument is passed, the slice function returns a new
array with the elements from the first argument index to the end of the array.

```javascript
let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];

let sliced = cities.slice(1, 3); // ['Barcelona', 'New York']
````

### splice

Splice is a function that accepts three arguments. The first argument is the index from which to start removing
elements. The second argument is the number of elements to remove. The third argument is the element to add at the
index. If no third argument is passed, the splice function only removes elements. Unlike Slice, Splice manipulates the
original array.

```javascript
let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];

let spliced = cities.splice(1, 2, 'London'); // ['Skopje', 'London', 'Berlin', 'Paris']
````

### reverse

Reverse is a function that reverses the order of the elements in the array.

```javascript
let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];

let reversed = cities.reverse(); // ['Paris', 'Berlin', 'New York', 'Barcelona', 'Skopje']
````

## Pure functions

Pure functions are functions that do not need or change anything in the outside world. There is no special syntax or
code for pure functions. You wrote some pure functions until this point for sure without even knowing that you did it. A
pure function is a state of a function that we always try to achieve. With pure function, our code is cleaner, more
organized, and decoupled (with few connections and ties). A code with pure functions is a code that can scale easily (
easier to continue working on and build on top of in the future). Of course, there are times when you need something
from the outside, or you need to change something outside the function, and it is not wrong to not write a function
that is not pure. But every time you write a function ask yourself:

* Can I request the stuff that I need through parameters instead of accessing them directly and get the same results?
* Can I return a value instead of changing a value from the outside directly and get the same results?
* Do I get the same result for passing the same arguments every time?

```javascript
// Pure function
function increaseByOne(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + 1)
  }
  return result;
}

// Impure function  ( using a variable from the outside )
let one = 1

function increaseByOne(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + one)
  }
  return result;
}

// Impure function ( mutating data from the outside )
function increaseByOne(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 1
  }
  return numbers;
}

// Impure function ( changing the DOM outside of the function )
function increaseByOne(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] + 1)
    document.getElementById("result").innerHTML += numbers[i] + " ";
  }
  return result;
}
```

## What is strict typing in JavaScript?

Javascript lets us do all sorts of magic things. But some might say it is too flexible of a language. For this reason,
for securing our code from ourselves and our mistakes as developers, something that is called **strict** typing exists.
We tell at the start of our script or the start of a function **'use strict';**. With this, some extra rules are applied
to your javascript code. Some of those are:

* Not allowed to pass value to an undeclared variable
* Not allowing to delete variables, functions, or objects
* Not allowing declaring two parameters of a function with the same name
* Some extra names are not allowed to be used as variables ( are reserved for the language itself)

```javascript
'use strict';
// These lines of code will throw an error if we use strict
number = 15; // no declaration
delete number; // cant delete stuff
function sum(num1, num1) {
  return num1 + num1
}; // same parameter names
let eval = 5; // cant use keyword eval
let arguments = 2; // cant use ketworkd arguments
```

## Extra materials 📘

* [First class functions](https://medium.freecodecamp.org/discover-the-power-of-first-class-functions-fd0d7b599b69)
* [Filter,map,reduce] (https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/)
* [Pure functions and how to write them](https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3)
