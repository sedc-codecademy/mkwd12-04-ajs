// const saySomething = require('./sayService.js');
import { addText, appendText, readText, removeText, deleteFile } from './textService.mjs';

// console.log(saySomething);
// console.log(saySomething.helloFunc("Aleksandar"));
// console.log(saySomething.byeFunc("Aleksandar"));

addText("Hello, this is the first line of text");
appendText("\nThis is another line of text");
appendText("\nThis is the third line of text");
console.log(readText());

removeText();
deleteFile();