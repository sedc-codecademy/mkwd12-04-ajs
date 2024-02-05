const tableContainerEl = document.querySelector(".table-container");
const buttonsContainerEl = document.querySelector(".buttons-container");
const spinnerContainerEl = document.querySelector(".spinner-container");

const peopleImageEl = document.querySelector(".people-image");
const shipsImageEl = document.querySelector(".ships-image");
const planetsImageEl = document.querySelector(".planets-image");
const errorEl = document.querySelector(".error");

const PEOPLE_FIRST_URL = "https://swapi.dev/api/people/?page=1";
const SHIPS_FIRST_URL = "https://swapi.dev/api/starships/?page=1";
const PLANETS_FIRST_URL = "https://swapi.dev/api/planets/?page=1";

const toggleSpinner = isShown => {
  if (isShown) {
    // This removes a css class from an element
    spinnerContainerEl.classList.remove("hide");
  } else {
    spinnerContainerEl.classList.add("hide");
  }
};

const displayError = error => {
  errorEl.innerText = error;
  tableContainerEl.innerHTML = "";
  buttonsContainerEl.innerHTML = "";
};

const toggleError = isShown => {
  if (isShown) {
    // This removes a css class from an element
    errorEl.classList.remove("hide");
  } else {
    errorEl.classList.add("hide");
  }
};

// Reusable next prev render function using a callback
const renderNextPrevBtns = (element, data, callback) => {
  element.innerHTML = "";

  if (data.previous) {
    // Add a previous button here
    const previousBtn = document.createElement("BUTTON");
    previousBtn.innerText = "Previous";
    element.appendChild(previousBtn);
    // Add listener to allow pagination
    previousBtn.addEventListener("click", () => {
      callback(data.previous);
    });
  }

  if (data.next) {
    //Add a next button here
    const nextBtn = document.createElement("BUTTON");
    nextBtn.innerText = "Next";
    element.appendChild(nextBtn);
    // Add listener to allow pagination
    nextBtn.addEventListener("click", () => {
      callback(data.next);
    });
  }
};

// ===============================
// PEOPLE
// ===============================

//1. Fetch people
const fetchPeople = async url => {
  toggleSpinner(true);

  try {
    const res = await fetch(url);
    const peopleData = await res.json();
    console.log(peopleData);

    renderPeopleTable(tableContainerEl, peopleData);
    renderNextPrevBtns(buttonsContainerEl, peopleData, fetchPeople);
    toggleError(false);
  } catch (error) {
    console.error(error);

    displayError(error);
    toggleError(true);
  }

  toggleSpinner(false);
};

// 2. Render people table
const generatePeopleTableHTML = peopleList => {
  const tableBodyHTML = peopleList
    .map(person => {
      return `
            <tr>
                <td>${person.name}</td>
                <td>${person.height}</td>
                <td>${person.mass}</td>
                <td>${person.gender}</td>
                <td>${person.birth_year}</td>
                <td>${person.films.length}</td>
            </tr>
        `;
    })
    .join("");

  console.log(tableBodyHTML);

  const tableHTML = `
    <table>
     <thead>
       <tr>
         <th>Name</th>
         <th>Height (cm)</th>
         <th>Mass (kg)</th>
         <th>Gender</th>
         <th>Birth Year</th>
         <th>Appearances</th>
       </tr>
     </thead>
     <tbody>
      ${tableBodyHTML}
     </tbody>
    </table>
    `;

  return tableHTML;
};

const renderPeopleTable = (element, data) => {
  element.innerHTML = generatePeopleTableHTML(data.results);
};

// 4. Add listener to people image el
peopleImageEl.addEventListener("click", () => {
  console.log("people image clicked");
  fetchPeople("aasdaksdkjhasd");
});

// ===============================
// SHIPS
// ===============================

const fetchShips = async url => {
  toggleSpinner(true);

  try {
    const res = await fetch(url);
    const shipsData = await res.json();
    console.log(shipsData);

    renderShipsPage(tableContainerEl, shipsData);
    renderNextPrevBtns(buttonsContainerEl, shipsData, fetchShips);
    toggleError(false);
  } catch (error) {
    displayError(error);
    toggleError(true);
  }

  toggleSpinner(false);
};

const generateShipsTableHTML = shipsList => {
  const tableBodyHTML = shipsList.reduce((acc, ship) => {
    const tableRowHTML = `
       <tr>
         <td>${ship.name}</td>
         <td>${ship.model}</td>
         <td>${ship.manufacturer}</td>
         <td>${ship.cost_in_credits}</td>
         <td>${ship.passengers}</td>
         <td>${ship.starship_class}</td>
       </tr>
       `;

    return acc + tableRowHTML;
  }, "");

  const tableHTML = `
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Manufacturer</th>
            <th>Cost (credits)</th>
            <th>People Capacity (passengers)</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
        ${tableBodyHTML}
        </tbody>
    </table
  `;

  return tableHTML;
};

const renderShipsPage = (element, shipsData) => {
  element.innerHTML = generateShipsTableHTML(shipsData.results);
};

shipsImageEl.addEventListener("click", () => {
  console.log("people image clicked");
  fetchShips(SHIPS_FIRST_URL);
});

// ===============================
// PLANETS
// ===============================

const fetchPlanets = async url => {
  toggleSpinner(true);

  try {
    const res = await fetch(url);
    const planetsData = await res.json();
    console.log(planetsData);

    renderPlanetsPage(tableContainerEl, planetsData);
    renderNextPrevBtns(buttonsContainerEl, planetsData, fetchPlanets);
    toggleError(false);
  } catch (error) {
    displayError(error);
    toggleError(true);
  }

  toggleSpinner(false);
};

const generatePlanetsTableHTML = planetsList => {
  const tableBodyHTML = planetsList.reduce((acc, planet) => {
    const tableRowHTML = `
             <tr>
               <td>${planet.name}</td>
               <td>${planet.population}</td>
               <td>${planet.climate}</td>
               <td>${planet.gravity}</td>
               <td>${planet.terrain}</td>
             </tr>
             `;
    return acc + tableRowHTML;
  }, "");

  const tableHTML = `
    <table>
        <thead>
          <tr>
          <th>Planet Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          </tr>
        </thead>
        <tbody>
        ${tableBodyHTML}
        </tbody>
    </table
  `;

  return tableHTML;
};

const renderPlanetsPage = (element, data) => {
  element.innerHTML = generatePlanetsTableHTML(data.results);
};

planetsImageEl.addEventListener("click", () => {
  console.log("people image clicked");
  fetchPlanets(PLANETS_FIRST_URL);
});
