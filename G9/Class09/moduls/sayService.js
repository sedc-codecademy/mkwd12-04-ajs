import { getRandomWord, words } from "./messageService.js";

export function sayHello(name) {
  let hello = "Hey";
  console.log(`${getRandomWord(words.helloVariatns)} there ${name}!`);
}

export function sayGoodbye(name) {
  let bye = "Bye";
  console.log(`${getRandomWord(words.goodbyeVariants)} there ${name}!`);
}
