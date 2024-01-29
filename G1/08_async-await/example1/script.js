// https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example1/documents.json

function getDocuments() {
	return fetch(
		'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example1/documents.json'
	);
}

function showDocuments(documents) {
	if (!documents && !Array.isArray(documents)) {
		throw new Error('Problem with documents!');
	}

	if (!documents.length) {
		throw new Error('There are no documents');
	}

	documents.forEach(document =>
		console.log(`${document.name}.${document.type} ${document.size}MB`)
	);
}

getDocuments()
	.then(res => res.json())
	.then(body => showDocuments([]))
	.catch(error => console.log(error));
