// https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example1/documents.json


// Function that the list of documents
// Returns a promise
function getDocuments() {
	// returned promise will be returned to the caller of getDocuments
	return fetch(
		'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example1/documents.json'
	);
}

// Function that will show the documents in the console
function showDocuments(documents) {
	// this is going to log the documents like this "someDocument.pdf 2MB"
	documents.forEach(document =>
		console.log(`${document.name}.${document.type} ${document.size}MB`)
	);
}

// Function that will check if the documents are valid
function checkDocuments(documents) {
	// if documents is falsy AND if documents is not an array
	if (!documents && !Array.isArray(documents)) {
		// throw an error
		// this will stop the execution of the function
		throw new Error('Problem with documents!');
	}

	// if documents is an empty array
	if (!documents.length) {
		// throw an error
		// this will stop the execution of the function
		throw new Error('There are no documents');
	}
}

// Function that will filter the important documents
function getImportantDocuments(documents) {
	// this will return a promise
	return new Promise((resolve, reject) => {
		// this will filter the documents and return only the important ones
		const importantDocuments = documents.filter(document => document.important);
		setTimeout(() => {
			// inverted if statement, first check if there are no important documents
			if (!importantDocuments.length) {
				// if there are no important documents, reject the promise
				reject('There are no important documents');
			}
			// if there are important documents, resolve the promise
			resolve(importantDocuments);
		}, 1000);
	});
}

// Case 1
getDocuments()
	.then(res => res.json())
	.then(body => {
		// body = null; // used to break the app
		checkDocuments(body); // first check if the documents are valid. If this fails, the catch block will be executed
		showDocuments(body); // if they are valid, show them
	})
	.catch(error => console.log(error)); // if something goes wrong, catch the error and log it

// Case 2
getDocuments()
	.then(res => res.json())
	.then(documents => {
		// documents = null; // to fake the BE response and break the app
		checkDocuments(documents); // first check if the documents are valid. If this fails, the catch block will be executed
		return getImportantDocuments(documents); // if they are valid, return the important documents promise.
	})
	.then(importantDocuments => showDocuments(importantDocuments)) // if the important documents promise is resolved, show the important documents
	.catch(err => console.log(err));

// Async - Await
// await can be used only inside async functions
async function handleDocuments() {
	// try - catch block
	// try to execute the code inside the try block
	try {
		// await the getDocuments function and save the response in a variable
		const response = await getDocuments();
		// await the response.json() and save the body in a variable
		let body = await response.json();
		// body = null; // used to break the app
		checkDocuments(body); // first check if the documents are valid. If this fails, the catch block will be executed
		// await the getImportantDocuments function and save the important documents in a variable
		const importantDocuments = await getImportantDocuments(body);
		// if everything is ok, show the important documents
		showDocuments(importantDocuments);
	} catch (error) {
		// if something goes wrong, catch the error and log it
		console.log(error);
	} finally {
		// finally block will always be executed
		console.log(`All done at ${new Date().toLocaleString()}`);
	}
}

// call the async function
handleDocuments();
