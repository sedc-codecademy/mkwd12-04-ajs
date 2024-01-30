async function getDocuments(){
    return fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
    .then(response => response.json())
    .then(data=> data)
    .catch(err => console.log(err))
}

async function getImportantDocuments(documents){
    let importantDocuments = documents.filter(document=>document.important);
    return new Promise((resolve, reject) => {
        if(importantDocuments.length === 0){
            reject('There are no important documents')
        }
        setTimeout(function(){
            resolve(importantDocuments)
        },3000)
    })
}

async function checkDocument(documents){
    if(documents.length === 0){
        throw new Error('No documents found')
    }
    if(!documents){
        throw new Error('Problem with document')
    }
}

async function showDocument(documents){
    documents.forEach(document=>console.log(`${document.name} ${document.type}`))
}


async function showImportantDoc(){
    let doc = await getDocuments();//2
    // console.log(doc);
    checkDocument(doc);//3
    let importantDocuments = await getImportantDocuments(doc);//5
    showDocument(importantDocuments);//6
}

showImportantDoc(); //1
console.log("Random text");