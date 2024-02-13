# Objects Exercises

## Task 1

Create a function that render information about a movie, destructure the movie object in the argument list so that the . ( dot ) operator is not needed, after that render the movie in the html.

```
const movie = {
    title: "Saving Private Ryan"
    director: "Steven Spielberg",
    country: "USA"
    year: 1999
    productionInfo: {
        budget: "70 million",
        producer: "Ian Bryce",
    }
}
```

## Task 2

Given the below arrays, combine them all to create one main array caleed `plants`, the order is up to the student

```
const fruits = ['apples', 'oranges', 'lemons']

const vegetables = ['broccoli', 'carrots', 'cabbage']

const nuts = ['peanuts', 'almonds', 'walnuts', 'hazelnuts']
```

## Task 3

Create a Person class that has:

- firstName
- lastName
- age
- getFullName - method that returns the full name

Create a Student class that inherits from Person and has:

- academyName
- studentId
- study - method that writes in the console: The student firstName is studying in the academyName

Create two Student instances

## Task 4

Create DesignStudent, CodeStudent and NetworkStudent class that inherit from the Student class.

#### DesignStudent

- isStudentOfTheMonth - boolean
- attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

#### CodeStudent

- hasIndividualProject - boolean (not settable, default is false)
- hasGroupProject - boolean (not settable, default is false)
- doProject(type) - method that accepts string. If the string is `individual` or `group` it should write that the person is working on the project of that type and set the value to `true` on the property of the project

#### NetworkStudent

- academyPart - number
- attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!

**Note:** For all students, the academyName property should be auto generated based on which Student we are creating ( `design`, `code` or `network` )

Create one of each students
