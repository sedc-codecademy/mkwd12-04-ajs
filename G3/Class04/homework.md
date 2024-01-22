## Exercise 1

Make 3 functions:

1. Function that takes a number through a parameter and returns how many digits that number has
2. Function that takes a number through a parameter and returns if its even or odd
3. Function that takes a number through a parameter and returns if its positive or negative

Create a function that takes a number through a parameter and calls all three functions for the number that was passed.
It should show the results in the console.

#### Ex:

**Code:** getNumberStats(-25);
**Console:** 2 Digits, Odd, Negative
 
## Exercise 2

Create 2 variables with arrow functions.

1. First arrow function will accept two parameters, one for element and one for color. The function should change the
   given element text color with the color given from the second color parameter. If no parameter is passed for color,
   the default value is **black**.
2. Second arrow function will accept two parameters, one for element and one for textSize. The function should change
   the given element text size to the number given from the second textSize parameter. If no parameter is passed for
   textSize, the default value is 24.

Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text
size and the second for color. When the button is clicked the h1 header should change according to the input values (
change size as the first input value and color as the second input value ). Use the functions that we declared earlier
and use arrow function for the event listener of the button.

#### Ex:

**Input1: ** Person enters 28
**Input2: ** Person enters red
**Result: ** The h1 text should change to size 28 and color red

## Exercise 3

Write an anonymous function that takes an array as a parameter and returns the square of each element.

*Hint: square = number * number or number on power 2.

## Exercise 4

Write a self-invoked function that calculates the factorial of a given number and logs it to the console.
BONUS: Provide the input from the HTML, and print the result in the HTML.

*Hint: refer the examples from the class code.

## Exercise 5

Write an arrow function that takes a string and returns a new string with each word reversed.
Example: 'hello from qinshift academy' ==> 'olleh morf tfihdniq ymedaca'
*You don't have to handle uppercase and lowercase, make the example all lowercase
BONUS: Provide the input from the HTML, and print the result in the HTML.

## Exercise 6

Create an anonymous function that takes a given array and returns the product of all positive numbers.
Test array: let array = [-10, 5, 7894, NaN, 'Hello world', Infinity, false, [Object, Object], 25, name => `Hello ${name}`, -Infinity, ['hi', 28, -93, true], {
  name: 'Bob',
  age: 23,
}, undefined, 14, null, 159, 0, -11];

*Hints: 
1. Iterate over each element of the array
2. Find a way to check if each element is number
3. Check if the number is a positive number and if true, store it in a filtered array with all positive numbers
4. Multiply all positive numbers

## Exercise 7

Create an arrow function that takes a string and returns the number (count) of vowels contained within it. (Use anonymous functions/Arrow functions for the implementation)
BONUS: Provide the input from the HTML, and print the result in the HTML.

* Hint: vowels: a, e, i, o, u


## Additional notes

MOST IMPORTANT: DO NOT try to solve this exercise (or any other more complicated problem) within single function. Rather split the logic into multiple parts and solve them step by step. Once each of that parts is solved, combine the solutions into one final solution.
Don't ask CHAT GPT to solve the exercises, and don't use any other shortcuts to get quicker the solution. Everything from the exercises can be solved with the material we have learned so far :)

Good luck!