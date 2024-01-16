/*
## Reminder App

* Create a reminder app
* There should be:
    * An input for entering the title
    * An input for entering priority
    * An input for color
    * A textarea for adding a description
    * A button for adding the reminder
    * A button for showing all reminders
* When the button for adding is clicked an object
  needs to be created with the properties from the inputs
  (title,  priority, color, and description)
* The object should then be added to an array of reminders
* When the button for showing all reminders is clicked it
  should show a table with title, priority, and description
  columns
* The row background should be the color of the "color" property

Extra requirements:
1. Clear inputs upon submit
2. Title and Color are the only required fields, priority is
   medium by default
3. Table should be hidden by default. Show only upon click
   of show reminders btn
4. Description can't be longer than 15 chars.
*/

// Selected Elements
let inputTitle = document.querySelector("#title");
let inputPriority = document.querySelector("#priority");
let inputColor = document.querySelector("#color");
let inputDescription = document.querySelector("#description");
let btnSubmit = document.querySelector("#submit-reminder");
let btnShow = document.querySelector("#show-reminders");
let tbody = document.querySelector("#tbody");
let error = document.querySelector("#error");
let table = document.querySelector("table");

// Models
function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority || "Medium";
  this.color = color;
  this.description = description || "N/A";
}

// Data
let reminders = [
  {
    title: "Wash car",
    priority: "Medium",
    color: "red",
    description: "Use soap",
  },
  {
    title: "Walk dog",
    priority: "High",
    color: "green",
    description: "Walk the dog",
  },
];

// Functionality
function addReminder(event) {
  event.preventDefault();

  let title = inputTitle.value;
  let priority = inputPriority.value;
  let color = inputColor.value;
  let description = inputDescription.value;

  error.innerText = "";

  if (!title) {
    error.innerText = "Title is required!";
    error.style.color = "red";
    return;
  }

  let descriptionLength = description.length;
  console.log(descriptionLength);

  if (descriptionLength >= 15) {
    description = description.substring(0, 15);
  }

  let reminder = new Reminder(title, priority, color, description);

  reminders.push(reminder);

  inputTitle.value = "";
  inputColor.value = "#FFFFFF";
  inputPriority.value = "";
  inputDescription.value = "";

  showReminders();
}

function showReminders() {
  table.style.display = "inline-block";
  tbody.innerHTML = "";

  for (let reminder of reminders) {
    tbody.innerHTML += `
            <tr style="background-color: ${reminder.color}">
                <td>${reminder.title}</td>
                <td>${reminder.priority}</td>
                <td>${reminder.description}</td>
            </tr>
        `;
  }
}

// Events
btnSubmit.addEventListener("click", addReminder);
btnShow.addEventListener("click", showReminders);

// Initialization
table.style.display = "none";
