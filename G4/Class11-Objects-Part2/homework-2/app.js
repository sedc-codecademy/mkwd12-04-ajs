console.log("We are online");

const containerEl = document.querySelector(".container");

const STUDENTS_URL =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

const fetchStudents = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const calculateAverageFromObject = (array, key) => {
  return array.reduce((acc, obj) => acc + obj[key], 0) / array.length;
};

const generateStudentHTML = student => {
  return `
        <div class="student-info">
            <h4>${student.id}. ${student.firstName} ${student.lastName}</h4>
            <p>City: ${student.city}</p>
            <p>Gender: ${student.gender}</p>
            <p>Average Grade: ${student.averageGrade}</p>
            <p>Age: ${student.age}</p>
        </div>        
    `;
};

const renderStudentsData = (element, students) => {
  // 1. Show the average age and average grade of all students combined
  //   const averageAgeAll =
  //     students.reduce((acc, student) => acc + student.age, 0) / students.length;

  //   const averageGradeAll =
  //     students.reduce((acc, student) => acc + student.averageGrade, 0) /
  //     students.length;

  const averageAgeAll = calculateAverageFromObject(students, "age");
  const averageGradeAll = calculateAverageFromObject(students, "averageGrade");

  // .toFixed(number) is used to limit decimals of a number
  element.innerHTML += `
    <h3>Average age and grade</h3>
    <p>The average age of all students is: ${averageAgeAll.toFixed(
      2
    )} years old, and the average grade of all students is ${averageGradeAll.toFixed(
    2
  )}
    `;
  // 2. Show the number of students that are over 60 and the number of students that are under 30 years old
  const studentsOver60 = students.filter(student => student.age > 60).length;
  const studentsUnder30 = students.filter(student => student.age < 30).length;

  element.innerHTML += `
            <h3>Number of students per age</h3>
            <p>The number of students over 60 is: ${studentsOver60} and the number of students below 30 years of age is: ${studentsUnder30}
            `;
  // 3. Create a list that will have the firstname lastname and city of the students that are over 30 and have an average grade of 4 and above

  const studentListHTML = students
    .filter(student => student.age > 30 && student.averageGrade >= 4)
    .map(
      student =>
        `<li>${student.firstName} ${student.lastName} from ${student.city}</li>`
    )
    .join("");

  element.innerHTML += `
        <h3>Students with a grade above or equal to 4</h3>
        <ol>${studentListHTML}</ol>
    `;
  // 4. Find the student named Arthur Cadore and display all of his information
  const foundStudent = students.find(
    student => student.firstName === "Arthur" && student.lastName === "Cadore"
  );

  element.innerHTML += `<h3>Find Arthur Cadore</h3>`;

  if (foundStudent) {
    element.innerHTML += generateStudentHTML(foundStudent);
  } else {
    element.innerHTML += `<h4>Arthur Cadore was not found!<h4>`;
  }
  // 5. Find the oldest and youngest student and display their information on the screen
  const studentsCopyOne = [...students];

  studentsCopyOne.sort(
    (studentOne, studentTwo) => studentOne.age - studentTwo.age
  );

  const youngest = studentsCopyOne[0];
  const oldest = studentsCopyOne[studentsCopyOne.length - 1];

  element.innerHTML += `
        <h3>Youngest/Oldest</h3>
        <p>The oldest is:</p>
        ${generateStudentHTML(oldest)}
        <p>The youngest is:</p>
        ${generateStudentHTML(youngest)}
    `;
  // 6. Show a list of the full names of students that have a last name longer than 8 characters
  element.innerHTML += `
    <h3>Students with long names</h3>
    <ul>
    ${students
      .filter(student => student.lastName.length > 8)
      .map(student => `<li>${student.firstName} ${student.lastName}</li>`)
      .join("")}
      </ul>
      `;
  // 7. Show a list of the top 10 best students by average grade
  const studentsCopyTwo = [...students].sort(
    (a, b) => b.averageGrade - a.averageGrade
  );

  element.innerHTML += `
        <h3>Top Ten Students</h3>
        ${studentsCopyTwo
          .slice(0, 10)
          .map(student => generateStudentHTML(student))
          .join("")}
    `;
  // 8. Show on the screen if some users have an average grade of 1 or if all users are adults ( above 18)
  element.innerHTML += `
        <h3>Some Every Task</h3>
        <p>Do some students have an average grade of 1? ${
          students.some(student => student.averageGrade === 1) ? "YES" : "NO"
        }
        </p>
        <p> Are all students adults? ${
          students.every(student => student.age > 18) ? "YES" : "NO"
        }
    `;
};

const app = async () => {
  try {
    const students = await fetchStudents(STUDENTS_URL);

    renderStudentsData(containerEl, students);
  } catch (error) {}
};

app();
