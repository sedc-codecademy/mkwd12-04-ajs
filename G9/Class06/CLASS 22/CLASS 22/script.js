const cosmonaut = document.getElementById("cosmonaut");
const rocket = document.getElementById("rocket");
const resultDiv = document.getElementById("resultDiv");
const peopleTable = document.getElementById("peopleTable");
const peopleTableBody = document.getElementById("peopleTableBody");
const shipTableBody = document.getElementById("shipTableBody");
const shipTable = document.getElementById("shipTable");
const spinner = document.getElementById('spinner');

function getApi() {
  return fetch("https://swapi.dev/api/people/?page=1")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

cosmonaut.addEventListener("click", function () {
  shipTable.style.display = 'none';
  spinner.style.display = 'block';
  getApi().then((data) => {
    data.results.forEach((person) => {
        console.log(person)
        createPeopleTable(person);
    });
    peopleTable.style.display = 'block';
    spinner.style.display = 'none';
  }
  );
});

function createPeopleTable(person) {
  peopleTableBody.innerHTML += `<tr>
  <td>${person.name}</td>
  <td>${person.height}</td>
  <td>${person.mass}</td>
  <td>${person.birth_year}</td>
  <td>${person.films.length}</td>
  </tr>`;
}

function createShipTable(ship) {
  shipTableBody.innerHTML += `<tr>
  <td>${ship.name}</td>
  <td>${ship.model}</td>
  <td>${defineShipCapacity(ship)}</td>
  <td>${ship.manufacturer}</td>
  <td>${ship.starship_class}</td>
  </tr>`;
}

function defineShipCapacity({crew = 0 , passengers = 0}) {
  if(isNaN(crew)) {
    return crew;
  }
  else return Number(crew) + Number(passengers);
}

async function fetchStarships() {
  try {
    let res = await fetch("https://swapi.dev/api/starships/?page=1");
    let data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

rocket.addEventListener("click", async function () {
  try {
    spinner.style.display = 'block';
    peopleTable.style.display = 'none';
    let starships = await fetchStarships();
    starships.forEach((starship) => {
      createShipTable(starship);
    });
    shipTable.style.display = 'block';
    spinner.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
});
