// const fileSystem = require('fs');
import fs from 'fs';

let files = fs.readdirSync('./')
console.log(files);

const fileName = "example.txt";
const text = "Hello from SEDC G2";

fs.writeFile(fileName, text, function (err){
    if(err){
        // console.log(err);
        // return;
        throw new Error(err);
    }
    console.log("File has been successfully written!");
});

fs.readFile(fileName, 'utf8', function (err, data){
    if(err){
        // console.log(err);
        // return;
        throw new Error(err);
    }
    console.log("Content of file: ", data);
})
let userJsonData = 'users.json';

fs.readFile(userJsonData, 'utf8', function (err, data){
    if(err){
        // console.log(err);
        // return;
        throw new Error(err);
    }
    console.log("Content of json file: ", JSON.parse(data));
})