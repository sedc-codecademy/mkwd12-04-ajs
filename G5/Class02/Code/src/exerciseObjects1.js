function Student(fName, lName, year, academy, studentGrades){
    //this -> the object that will be created with the call of the function
    //this.firstName -> the object that will be created will have property called firstName
    if(fName){
        //if fName has value, for ex. Marko, Kate.. assign it as value to this.firstName
        this.firstName = fName;
    }
    else{
        //else if fName has falsy value, for ex. null, undefined, "", don't add it as value to 
        //this.firstName, asign "unnamed" as value to this.firstName
        this.firstName = "unnamed";
    }
    //this.firstName = !fName ? "unnamed" : fName;
    this.firstName = fName ? fName : "unnamed";
    this.lastName = lName ? lName :  "No surname"; // if(lName){this.lastName = lname} else {this.lastName = "No surname"}
    this.birthYear = year;

//if(studentGrades && studentGrades.length > 0) {this.grades = studentGrades} else {this.grades = []}
    this.grades = studentGrades && studentGrades.length > 0 ? studentGrades : [];

    this.academy = academy? academy : "unnamed";

    this.getAge = function(){

        let currentDate = new Date();
        //let age = (new Date()).getFullYear

        //currentDate.getFullYear() -> 2024
        let age = currentDate.getFullYear() - this.birthYear;
        return age;
    }

    this.getInfo = function(){
       // return "This is student " + this.firstName + " " + this. lastName + " from academy " + this.academy; 
        return `This is student ${this.firstName} ${this.lastName} from academy ${this.academy}`;
    }

    this.getAverageGrade = function(){
        let sum = 0;
        for(let grade of this.grades){
            sum += grade;
        }

        return sum / this.grades.length;
    }
}


let kate = new Student("Kate", "Markovska", 1995, "Programming", [5, 4, 5]);
let marko = new Student("Marko", "Markovski", 1999, "QA", [5, 5, 5]);
let unnamedStudent = new Student(null, "Markovski", 1999, "QA", [5, 5, 3]);

console.log(kate);
console.log(marko);
console.log(unnamedStudent);

let kateInfo = kate.getInfo();
console.log(kateInfo);

let markoInfo = marko.getInfo();
console.log(markoInfo);

let markoAvgGrade = marko.getAverageGrade();
console.log(markoAvgGrade);