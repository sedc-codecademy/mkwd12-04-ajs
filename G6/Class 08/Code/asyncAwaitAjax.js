async function getAndPrintDocument() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
        let parsedObject = await response.json();
        parsedObject.forEach(document => console.log(document)
        );
    } catch (errorResponse) {
        console.log(errorResponse)
    }
}

getAndPrintDocument();

console.log("Hi")