const posts = [
    { title: "Post one", body: "This is post one" },
    { title: "Post two", body: "This is post two" }
];

function getPosts() {
    setTimeout(() => {
        posts.forEach(post => console.log(post.title));
    }, 1000)
}

function addPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 2000)
}


// addPost({title: "Post three", body: "This is post three"}, getPosts);
// getPosts();


// --------------- Promises -----------------

function first(workTime) {
    return new Promise((resolve, reject) => {
        if(workTime >= 5000) {
            reject("This is taking too long. Please try agin")
        }

        setTimeout(() => {
            let person = {
                firstName: "Pane",
                lastName: "Manaskov",
                age: "31"
            }

            resolve(person)
        }, workTime)
    })
}

function second() {
    console.log("Second thing");
}

// first(2500)
//     .then(response => {
//         console.log(response)
//         second();
//     })
//     .catch(error => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Finnaly has been invoked");
//     })


// Handling AJAX calls with promise (with jquery)

function getDocuments() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json",
            success: response => {
                resolve(JSON.parse(response))
            },
            error: err => {
                reject(err)
            }
        })
    })
}


function showDocuments(documents) {
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}mb)`)
    })
}


// getDocuments()
//     .then(data => {
//         console.log("We got the documents");
//         showDocuments(data);

//     })
//     .catch(err => {
//         console.log(err);
//     })


function getImportantDocuments(documents) {
    let importantDocuments = documents.filter(doc => doc.important)

    return new Promise((resolve, reject) => {
        if(importantDocuments.length === 0) {
            reject("There are no important documents");
        }

        setTimeout(() => {
            resolve(importantDocuments);
        }, 3000)
    })
}


// getDocuments()
//     .then(data => {
//         console.log("We got the documents");
//         // showDocuments(data);
//         return getImportantDocuments(data)
//     })
//     .then(data => {
//         showDocuments(data);
//     })
//     .catch(err => console.log(err));



// using Fetch

function getDataFetch() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json")
    .then(response => {
       return response.json()
    })
    .then(response => {
        // console.log(response);
        // showDocuments(response)
        return getImportantDocuments(response)
    })
    .then(response => {
        console.log(response)
    })
    .catch(err => console.log(err))
    .finally(() => console.log("this is DONE"))
}

// getDataFetch();

async function getDataAsync() {
    let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
    let data = await response.json();
    // console.log(data);
    // showDocuments(data);
    let importantData = await getImportantDocuments(data);
    // console.log(importantData);
    showDocuments(importantData);
}


try {
    getDataAsync();
} catch (error) {
    console.log(error)
} 
// finally {
//     console.log("Finnaly from try and catch block");
// }







