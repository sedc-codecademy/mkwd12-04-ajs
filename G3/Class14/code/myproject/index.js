const fileSystem = require("fs");
//almost all the sync methods of "fs" has their duplicates that are async

// Display all the files inside a directory
// Sync operation
let files = fileSystem.readdirSync('./');
console.log(files);

const fileName = 'example.txt';
let text = 'Hello, this is some text to be written to the file';

// async operation
// if the file exists, it overwrites the content of the file
// if the file doesn't exist, it is created
fileSystem.writeFile(fileName, text, function(err){
    if (err) {
        console.error('Error while writing to file');
        return;
    }
    console.log('File has been written successfully');
})

// async operation
fileSystem.readFile(fileName, 'utf8', function(err, data){
    if (err) {
        console.error('Error reading the file');
        return;
    }
    console.log(`Content of the file ${data}`);
})

// use appendFile to appent text to already existing one