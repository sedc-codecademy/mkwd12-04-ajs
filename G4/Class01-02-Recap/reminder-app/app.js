console.log("Filip said to add this!");
/*
- Create a reminder app
- There should be:
  - An input for entering the title
  - An input for entering priority
  - An input for color
  - A textarea for adding a description
  - A button for adding the reminder
  - A button for showing all reminders
- When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
- The object should then be added to an array of reminders
- When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
- The title should be the color of the "color" property
- Don't forget to reset the inputs after adding a reminder
*/

// Selectors
const titleInput = document.querySelector("#titleInput");
const priorityInput = document.querySelector("#priorityInput");
const colorInput = document.querySelector("#colorInput");
const descriptionInput = document.querySelector("#descriptionInput");
const addBtn = document.querySelector("#addBtn");
const showBtn = document.querySelector("#showBtn");
const tableContainerEl = document.querySelector(".table-container");

// Class
class Reminder {
  constructor(title, color, priority, description) {
    this.title = title;
    this.color = color;
    this.priority = priority;
    this.description = description;
  }
}

// Data
const reminders = [];

function clearInputs(inputs) {
  for (let input of inputs) {
    input.value = "";
  }
}

function validateInputs(inputs) {
  for (let input of inputs) {
    if (!input.value) return false;
  }
  return true;
}

function renderReminderTable(containerEl, reminders) {
  let remindersHTML = "";
  for (let reminder of reminders) {
    remindersHTML += `
    <tr>
      <td style="color: ${reminder.color}" >${reminder.title}</td>
      <td>${reminder.priority}</td>
      <td>${reminder.description}</td>
    </tr>
    `;
  }

  containerEl.innerHTML = `
       <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Priority</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            ${remindersHTML}
          </tbody>
        </table>
    `;
}

// Event Listeners
addBtn.addEventListener("click", function () {
  console.log("add btn clicked");
  // Create a new object and add it to the reminders array

  if (
    !validateInputs([titleInput, colorInput, descriptionInput, priorityInput])
  ) {
    alert("INVALID INPUTS");
    return;
  }
  // If inputs are not valid , the code will never reach this point

  const newReminder = new Reminder(
    titleInput.value,
    colorInput.value,
    priorityInput.value,
    descriptionInput.value
  );
  reminders.push(newReminder);

  console.log(newReminder);

  tableContainerEl.innerHTML = "";
  clearInputs([titleInput, colorInput, descriptionInput, priorityInput]);
});

showBtn.addEventListener("click", function () {
  console.log("show btn clicked");
  renderReminderTable(tableContainerEl, reminders);
});
