async function getData(){
    try{
        let response = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");
        let students = await response.json();

        //get student fullnames after 5 seconds
        let studentFullNames = await getStudentsFullNames(students);
        console.log("Student fullnames:");
        studentFullNames.forEach(s => console.log(s));

        let documentsResponse = await fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json");
        let documents = await documentsResponse.json();

        //after 5 seconds, print the documents, sorted by size asc
        // setTimeout(function(){
        //     documents.sort(function(d1, d2){
        //         return d1.size - d2.size;
        //     });

        //     console.log(documents);

        // }, 5000);

        let sortedDocuments = await getSortedDocuments(documents);
        console.log(sortedDocuments);

    }
    catch{
        console.log("Error");
    }

}


function getStudentsFullNames(studentsArray){
    return new Promise(function(resolve, reject){
        //we need to tell to this Promise that it will be fulfilled after 5 seconds
        //and it will give student fullnames as data
        if(!studentsArray){
            reject("No students were sent!");
        }

        setTimeout(function(){
            resolve(studentsArray.map(s => `${s.firstName} ${s.lastName}`));
        }, 5000);
    })
}

function getSortedDocuments(documentsArray){
    return new Promise(function(resolve, reject){
       setTimeout(function(){

        //1. sort
        documentsArray.sort(function(d1, d2){
            return d1.size - d2.size;
        })

        //2. resolve and return the sorted documents
        resolve(documentsArray);

       }, 5000);
    })
}


getData();