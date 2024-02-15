function sayHello(name) {
    return `Hello ${name}`
}

function sayGoodbye(name) {
    return `Bye ${name}`
}

module.exports = {
    helloFunc: sayHello,
    byeFunc: sayGoodbye
}