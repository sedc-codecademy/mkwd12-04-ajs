// Example 1
function sumToNumber (num) {
    if (num === 0) {
        return 0;
    }
    return num + sumToNumber(num - 1)
};

const resultSum = sumToNumber(1000);
console.log(resultSum);

// Example 2
function factoriel(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factoriel(n - 1);
}

let resultFactoriel = factoriel(500);
console.log(resultFactoriel);

// Example 3
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let resultFibonacci = fibonacci(10);
console.log(resultFactoriel);

// Be careful with recursion and don't forget to put an exit case