async function getData() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");
        let students = await response.json();
        let fullNames = await getStudentFullName(students);
        console.log(fullNames);
        // let empty = await getStudentFullName();
        // console.log(empty);
        let documentsResponse = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
        let documents = await documentsResponse.json();
        let sortedDocuments = await sortDocuments(documents);
        console.log(sortedDocuments);
    }
    catch {
        console.log("An error occured");
    }
}

function getStudentFullName(students){
return new Promise(function(resolve, reject){
    if(!students || students.length == 0){
        reject("No students");
        return;
    }
    setTimeout(()=>{
        resolve(students.map(x=> `${x.firstName} ${x.lastName}`));
    }, 5000);
})
}

function sortDocuments(documents){
return new Promise(function(resolve, reject){
    if(!documents || documents.length == 0){
        reject("No documents");
        return;
    }

    setTimeout(() => {
        resolve(documents.sort(function(d1, d2){
            return d1.size - d2.size; //asc
           // return d2.size - d1.size; //desc
        }));
    }, 5000)
})
}

getData();

function sayHello(){
    console.log("Hello");
}

sayHello();