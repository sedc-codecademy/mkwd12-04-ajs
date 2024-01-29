function sum(num1, num2){
    return num1 + num2;
}

//1. call url to get documents
//2. we want to read and parse json
//3. print all documents

//meanwhile we want to call a function for calculating sum and to print the sum

//1.
async function getAndPrintDocuments(){
    //these lines wait on each other
    try{
        let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json") //PROMISE
        let parsedObjects = await response.json();
        //print
        parsedObjects.forEach(document => console.log(document));
    }
    catch(error){
        console.log("An error ocurred");
        console.log(error);
    }
}

getAndPrintDocuments();
//this line will not wait
console.log(sum(2,4));

