// https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example1/documents.json

function getDocuments() {
	return fetch(
		'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example1/documents.json'
	);
}

function showDocuments(documents) {
	documents.forEach(document =>
		console.log(`${document.name}.${document.type} ${document.size}MB`)
	);
}

function checkDocuments(documents) {
	if (!documents && !Array.isArray(documents)) {
		throw new Error('Problem with documents!');
	}

	if (!documents.length) {
		throw new Error('There are no documents');
	}
}

function getImportantDocuments(documents) {
	return new Promise((resolve, reject) => {
		const importantDocuments = documents.filter(document => document.important);
		setTimeout(() => {
			if (!importantDocuments.length) {
				reject('There are no important documents');
			}
			resolve(importantDocuments);
		}, 1000);
	});
}

// Case 1
// getDocuments()
// 	.then(res => res.json())
// 	.then(body => {
// 		checkDocuments(body);
// 		showDocuments(body);
// 	})
// 	.catch(error => console.log(error));

// Case 2
// getDocuments()
// 	.then(res => res.json())
// 	.then(documents => {
// 		// documents = null; // to fake the BE response and break the app
// 		checkDocuments(documents);
// 		return getImportantDocuments(documents);
// 	})
// 	.then(importantDocuments => showDocuments(importantDocuments))
// 	.catch(err => console.log(err));

// Async - Await
async function handleDocuments() {
	try {
		const response = await getDocuments();
		let body = await response.json();
		// body = null; // used to break the app
		checkDocuments(body);
		const importantDocuments = await getImportantDocuments(body);
		showDocuments(importantDocuments);
	} catch (error) {
		console.log(error);
	} finally {
		console.log(`All done at ${new Date().toLocaleString()}`);
	}
}

handleDocuments();
