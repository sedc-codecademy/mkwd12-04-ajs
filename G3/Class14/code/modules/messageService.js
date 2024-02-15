let words = {
    helloVariants: ["Hi", "Hello", "Hey", "What's up"],
    goodbyeVariants: ["Bye", "Godbye", "Cheers", "See you soon"]
}

function getRandomWord(wordsArry){
    return wordsArry[Math.floor(Math.random() * (wordsArry.length -1))];
}

export {words, getRandomWord};