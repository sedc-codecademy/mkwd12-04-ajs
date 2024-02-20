fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
.then(function(response){
   return response.json()
})
.then(function(data){
    console.log(data);
    let studentsAgedAbove20 = data.filter(s => s.age > 20);

    console.log(studentsAgedAbove20);

    //from the filtered students
    //1. find average of all average grades

    //2. find average of age of all filtered students

    //3. find the highest average grade

    let res = {
        sumOfAverageGrades : 0,
        sumOfAges: 0,
        highestGrade: studentsAgedAbove20[0].averageGrade, //-Infinity, 0
        studentWithHighestGrade: studentsAgedAbove20[0], //null
    };

    let finalResult = studentsAgedAbove20.reduce((result, currentItem) => { //currentItem is a student object
        result.sumOfAges += currentItem.age;
        result.sumOfAverageGrades += currentItem.averageGrade;

        if(currentItem.averageGrade > result.highestGrade){
            result.highestGrade = currentItem.averageGrade;
            result.studentWithHighestGrade = currentItem;
        }

        return result;
    }, res);

    console.log(finalResult);

    console.log(`The average of average grades is: ${finalResult.sumOfAverageGrades / studentsAgedAbove20.length}`);
    console.log(`The average of ages is: ${finalResult.sumOfAges / studentsAgedAbove20.length}`);

    console.log(`The highest average grade is: ${finalResult.highestGrade}`);
    console.log(`The student with highest average grade is: ${finalResult.studentWithHighestGrade.firstName} ${finalResult.studentWithHighestGrade.lastName}`);
})