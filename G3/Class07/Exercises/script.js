console.log("========== Exercise 1 ==========");

fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(response => response.json())
    // .then(function (response) {
    //     return response.json();
    // })
    .then(result => {
        console.log(result);
        // Array of students got from the fetch call
        let students = result;

        // 1. All students with an average grade higher than 3

        let avgGradeHigherThan3 = students.filter(student => student.averageGrade > 3);
        // console.log(avgGradeHigherThan3);


        // 2. All female student names with an average grade of 5

        // High order function example (filter)
        let femalesWith5 = students.filter(student => student.gender === "Female" && student.averageGrade === 5)

        // filter breakdown
        let filteredArray = [];
        for (let student of students) {
            if (student.gender.toLowerCase() === "female" && student.averageGrade === 5) {
                filteredArray.push(student);
            }
        }
        console.log(filteredArray);

        // High order function example (map)
        let femaleNamesWith5 = femalesWith5.map(student => student.firstName);
        console.log(femaleNamesWith5);

        // map breakdown
        let mappedArray = [];
        for (let student of filteredArray) {
            mappedArray.push(`${student.firstName} ${student.lastName}`)
        }
        console.log(mappedArray);


    })

// In case of CORS problem or any similar
fetch("students.json")
    .then(response => response.json())
    .then(result => console.log(result))