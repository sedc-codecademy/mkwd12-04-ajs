const sayHello = (name) => {
    console.log(`Hello ${name}!`);
}

// console.log(window); // will throw error because window doesn't exist
// console.log(global);

sayHello('Jill');
sayHello('Bob');

// setTimeout(() => {
//     console.log('Delayed for 1 second')
// }, 1000);

console.log(process.argv);


process.stdout.write('Enter someting: ');

process.stdin.on('data', (input) => {
    const userInput = input.toString().trim();
    console.log(`You entered: ${userInput}`);
    // process.exit();
})

// process.exit();
