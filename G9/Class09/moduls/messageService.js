export { words, getRandomWord };

let words = {
  helloVariatns: ["Hey", "Hi", "Hello", "Yo"],
  goodbyeVariants: ["Bye", "Goodbye", "Cheers", "Peace"],
};

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}
