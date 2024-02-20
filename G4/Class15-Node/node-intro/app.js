//USEFUL TERMINAL COMMANDS
// Make sure to intall node lts and git for windows before attempting to run node
// node -v in the terminal to check if you have node installed
// node filename.js - runs a file in node.js ex: node app.js
// cd (change directory) - shows current directory and can be used to move through the folders ex: cd ./src
// ls (list) - shows the files and folders in the currently opened folder in the terminal
// mkdir (makedirectory) - creates one or multiple folders ex: mkdir src assets
// touch - creates one or multiple files ex: touch app.js index.html app.css
import { v4 as uuid } from "uuid";
import { readNotesFromFile, saveNotesToFile } from "./src/notes.service.js";

console.log("This is a node executed file");

console.log("This is a uuid", uuid());

const printFullName = name => {
  console.log(name);
};

// printFullName("John Doe");

//Creating note class
class Note {
  id = uuid();

  constructor(author, text) {
    this.author = author;
    this.text = text;
  }
}

const newNotes = [
  new Note("Borche", "Node is great"),
  new Note("John", "This is my first note"),
  new Note("Tina", "Backend development is unique"),
];

// saveNotesToFile(newNotes);

const notesData = readNotesFromFile();

console.log("This is the returned data from the file:", notesData);

setTimeout(() => {
  console.log("test");
}, 1000);
