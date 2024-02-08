
// const sayHello = function(name){
//     return `Hi ${name}`
// }

//  console.log(sayHello("Bob")); 

//  const numberStartFunctions = [
//     (num) => num > 0 ? "Positive" : "Negative",
//     (num) => num % 2 === 0 ? "Odd" : "Even",
//     (num) => num >= 0 ? num.toString().length : num.toString().length - 1
//  ]

// const numberStartFunctions = [
//   (num) => {
//     if (num > 0) {
//       return "Positive";
//     } else {
//       return "Negative";
//     }
//   },
//   (num) => {
//     if (num % 2 === 0) {
//       return "Odd";
//     } else {
//       return "Even";
//     }
//   },
//   (num) => {
//     if (num >= 0) {
//       return num.toString().length;
//     } else {
//       return num.toString().length - 1;
//     }
//   },
// ];


//  numberStartFunctions[0](2)
//  numberStartFunctions[1](2)
//  numberStartFunctions[2](2)


// const calculator = (calFun,num1,num2) => {
//  return calFun(num1,num2)
// }

// const sum = (num1, num2) => {
//     return num1 + num2
// }

// const difference = (num1, num2) => {
//     return num1 - num2
// }

// console.log(calculator(sum,3,6));
// console.log(calculator(difference,3,6));

// const calculator = (operation) => {
//   switch (operation) {
//     case "+":
//       return function (num1, num2) {
//         return num1 + num2;
//       };
//       break;
//     case "-":
//       return function (num1, num2) {
//         return num1 - num2;
//       };
//       break;

//     default:
//     console.log("Error");
//       break;
//   }
// };

// let result = calculator("+")

// console.log(result(2,5));
// console.log(calculator("-")(7,2));


// const sayHello = (name) => {
//  return `Hello there ${name}`
// }

// sayHello.defaultName = "Bob";
// sayHello.des = "This is a function that greets a person."

// sayHello(sayHello.defaultName)

// sayHello.differentGreeting = function(name) {
//     return `Hi ${name}`
// }

// sayHello.differentGreeting("Bob")

const students = [
    {firstName: "Bob", lastName: "H", grade: 5, age: 19},
    {firstName: "Mel", lastName: "B", grade: 2, age: 33},
    {firstName: "Jill", lastName: "M", grade: 3, age: 15},
    {firstName: "Lucky", lastName: "J", grade: 5, age: 18},
    {firstName: "Strike", lastName: "K", grade: 4, age: 16},
    {firstName: "Eric", lastName: "I", grade: 1, age: 17}
  ]

//   for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i].firstName},${students[i].lastName}`);
//   }


//   const logFullName = (student) => {
//     console.log(`${student.firstName},${student.lastName}`);
//   }

//   students.forEach((student) => { console.log(`${student.firstName},${student.lastName}`);})

// const above18 = []

//   for (let i = 0; i < students.length; i++) {
//     if(students[i].age > 18){
//         above18.push(students[i])
//     }
//   }

//   const above18Check = (student) => {
//   return student.age >= 18
//   }

//   const above18Are = students.filter(above18Check)

// const above18Are = students.filter((student) => {return  student.age >= 18} )

// const fiveStudensGradeNames = []

// for (let i = 0; i < students.length; i++) {
//    if(students[i].grade === 5){
//     fiveStudensGradeNames.push(`${students[i].firstName} , ${students[i].lastName}`)
//    }
    
// }

// const fiveGradeCheck = (student) => {
//     return student.grade === 5
// }

// const fullName = (student) => {
//   return `${student.firstName} , ${student.lastName}`
// }

// const fiveGradeStudens = students.filter(fiveGradeCheck).map(fullName)

// const fiveGradeStudens = students
//   .filter((student) => {
//     return student.grade === 5;
//   })
//   .map((student) => {
//     return `${student.firstName} , ${student.lastName}`;
//   });

// console.log(fiveGradeStudens);

function sortFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
       
        for (let j = i + 1; j < arr.length; j++) {
            
           if(arr[i].grade < arr[j].grade){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
           }

        }
        
    }
    return arr
}

let sorted = sortFunc(students)


console.log(sorted);

const sortGradeDesc = (student1, student2) => {
    return student1.grade - student2.grade
}

const sortGradeAcs = (student1, student2) => {
    return student1.grade - student2.grade
}

  

console.log(students.sort(sortGradeDesc));