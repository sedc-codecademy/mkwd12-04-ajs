console.log("it works");

const STUDENTS_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

const fetchStudents = async () => {
  try {
    const res = await fetch(STUDENTS_URL);
    const data = await res.json();

    // console.log(data);

    //Call print function
    printStudentsInfo(data);
  } catch (error) {
    console.error(error);
  }
};

const printStudentsInfo = students => {
  // - All students with an average grade higher than 3
  const studentsGradeAboveThree = students.filter(
    student => student.averageGrade > 3
  );

  //   console.log(studentsGradeAboveThree);

  //   console.log(
  //     studentsGradeAboveThree.every(student => student.averageGrade > 3)
  //   );

  // - All female student names with an average grade of 5
  const femaleStudentsGradeFive = students
    .filter(
      student => student.gender === "Female" && student.averageGrade === 5
    )
    .map(student => student.firstName);

  //   console.log(femaleStudentsGradeFive);

  // - All male student full names who live in Skopje and are over 18 years old
  const adultSkopjeMaleStudents = students
    .filter(
      student =>
        student.gender === "Male" &&
        student.city === "Skopje" &&
        student.age > 18
    )
    .map(student => `${student.firstName} ${student.lastName}`);

  //   console.log(adultSkopjeMaleStudents);

  // - The average grades of all female students over the age of 24
  const femalesAverageGrades = students
    .filter(student => student.gender === "Female" && student.age > 24)
    .map(student => student.averageGrade);

  console.log(femalesAverageGrades);

  const femalesOverallAverageGrade =
    femalesAverageGrades.reduce((acc, grade) => acc + grade, 0) /
    femalesAverageGrades.length;

  console.log(femalesOverallAverageGrade);

  // - All male students with a name starting with B and average grade over 2
  const maleStudentsWithNameB = students.filter(
    student =>
      student.gender === "Male" &&
      student.averageGrade > 2 &&
      student.firstName[0] === "B"
  );

  //   console.log(maleStudentsWithNameB);
};

fetchStudents();
