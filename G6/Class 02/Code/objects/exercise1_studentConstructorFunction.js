// * Create a constructor function for Student objects with:
//   * Properties:
//     * firstName
//     * lastName
//     * birthYear
//     * academy 
//     * grades - array of numbers
//   * Methods:
//     * getAge() - returns age of student
//     * getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
//     * getGradesAverage() - returns the average of the student grades
// * Create an array with 3 students

var student = "Tijana";

var s = student.length >= 5  ? "The name of the students has more or exactly 5 letters" : "The name of the students has less than 5 letters"

function Student(fName, lName, bYear, acad, grades){
    this.firstName = !fName ? "unnamed" : fName;
    this.lastName = !lName ? "unnamed" : lName;
    this.birthYear = bYear;
    this.academy = !acad ? "unnamed" : acad;
    this.grades = grades;
    this.getAge = function(){
        if(!this.birthYear){
            return "The students has no birth year"
        }
        else{
            return (new Date()).getFullYear() - this.birthYear;
        }
    }

    this.getInfo = function(){
        if(this.firstName == "unnamed" || this.lastName == "unnamed" || this.academy == "unnamed"){
            return "There are some missing information about the student"
        }
        // if(this.firstName == "unnamed"){
        //     return "The student has no first name"
        // }
        // if(!lName){
        //     return "The student has no last name"
        // }
        // if(this.academy == "unnamed"){
        //     return "The student has no academy"
        // }
        else{
            return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}!`;
        }   
    }

    this.getGradesAverage =  function(){
        //validation
        if(!this.grades || this.grades.length == 0){ //null.length will cause an error, beacuse null does not have a length
                return "No grades"
        } else{ 
            //grades = [5,4,3]
            let sum = 0;
            for(let g of this.grades){
                sum+=g;
            }

            return sum/this.grades.length;
        }
    }
}


let students = [new Student("Matej", "Nikolov", 2001, "SEDC", [5, 5,4]), new Student(undefined, "Stojanovska"), new Student("Petko", "Petkovski", 1997, "SEDC")]
console.log(students[0].getGradesAverage());
console.log(students[1].getInfo());
console.log(students[2].getGradesAverage());