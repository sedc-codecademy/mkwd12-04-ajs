fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json") //returns a Promise
.then(result => result.json()) //returns a Promise
.then(data =>{
    //the object that will accumulate data from filtered data in reduce
     let initialValues = {
        studentWithHighestAverageGrade: null,
        highestAvgGrade:-Infinity,
        sumOfAverageGrades: 0,
        sumOfAge: 0
     }

    let filteredData =  data.filter(x => x.age > 20);

    let res = filteredData.reduce(function(accumulator, currentFilteredStudent){
        accumulator.sumOfAge += currentFilteredStudent.age;
        accumulator.sumOfAverageGrades += currentFilteredStudent.averageGrade;
        if(currentFilteredStudent.averageGrade > accumulator.highestAvgGrade){
            accumulator.highestAvgGrade = currentFilteredStudent.averageGrade;
            accumulator.studentWithHighestAverageGrade = currentFilteredStudent;
        }
    return accumulator;
    }, initialValues) //we pass initialValues by reference, so in the end, initialValues will have the same values as res
console.log(`The student with highest avg grade is ${initialValues.studentWithHighestAverageGrade.firstName} ${initialValues.studentWithHighestAverageGrade.lastName}
        with avg grade ${res.highestAvgGrade}`) //${initialValues.studentWithHighestAverageGrade.averageGrade}
console.log(`Average avg grade is ${initialValues.sumOfAverageGrades/filteredData.length}`);
console.log(`Average age is ${res.sumOfAge/filteredData.length}`);
});

