const peopleBtn = document.getElementById("peopleBtn");
const shipsBtn = document.getElementById("shipsBtn");
const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("prevBtn");
let currentPage = 1;
let pageType = "";

const registerListeners = () => {
  peopleBtn.addEventListener("click", async () => {
    currentPage = 1;
    if (pageType === "people") return;
    toggleLoader(true);
    await getPeople(1);
    pageType = "people";
  });

  shipsBtn.addEventListener("click", async () => {
    currentPage = 1;
    if (pageType === "ships") return;
    toggleLoader(true);
    await getShips(1);
    pageType = "ships";
  });

  nextBtn.addEventListener("click", nextPage);
  previousBtn.addEventListener("click", previousPage);
};

const nextPage = () => {
  currentPage++;
  toggleLoader(true);

  if (pageType === "people") getPeople(currentPage);
  if (pageType === "ships") getShips(currentPage);
};

const previousPage = () => {
  currentPage--;
  toggleLoader(true);
  if (pageType === "people") getPeople(currentPage);
  if (pageType === "ships") getShips(currentPage);
};

const navButtonsCheck = (response) => {
  if (response.next === null) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
  if (response.previous === null) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "block";
  }
};

const url = "https://swapi.dev/api/";

const getPeople = async (page) => {
  let peopleUrl = `${url}people/?page=${page}`;
  try {
    let response = await fetch(peopleUrl);
    let people = await response.json();
    navButtonsCheck(people);
    toggleLoader(false);
    loadPeoplePage(people.results);
  } catch (error) {
    console.error('The request failed!');
    console.error(error);
  }
};

const getShips = async (page) => {
  let shipsUrl = `${url}starships/?page=${page}`;
  try {
    let response = await fetch(shipsUrl);
    let ships = await response.json();
    navButtonsCheck(ships);
    toggleLoader(false);
    loadShipsPage(ships.results);
  } catch (error) {
    console.error('The request failed!');
    console.error(error);
  }
};

const resultElement = document.getElementById("result");
const loader = document.getElementById("loader");
const peopleHeaderValues = ["Name", "Height", "Mass", "Gender", "Birth Year", "Films"];
const shipsHeaderValues = ["Name", "Model", "Manifacturer", "Cost", "Capacity", "Class"];

const toggleLoader = (toggle) => {
  if (toggle) loader.style.display = "block";
  else loader.style.display = "none";
};

const appendColumn = (row, text) => {
  let col = document.createElement("div");
  col.classList.add("col");
  col.innerText = text;
  row.appendChild(col);
};

const createTableHeader = (parentElement, values) => {
  let row = document.createElement("div");
  row.classList.add("row", "yellow", "padding");
  for (const col of values) {
    appendColumn(row, col);
  }

  parentElement.appendChild(row);
};

const createPersonRow = (parentElement, person) => {
  let row = document.createElement("div");
  row.classList.add("row", "white", "padding");

  appendColumn(row, `${person.name}`);
  appendColumn(row, `${person.height} cm`);
  appendColumn(row, `${person.mass} kg`);
  appendColumn(row, `${person.gender}`);
  appendColumn(row, `${person.birth_year}`);
  appendColumn(row, `${person.films.length}`);

  parentElement.appendChild(row);
};

const loadPeoplePage = (data) => {
  resultElement.innerHTML = "";
  createTableHeader(resultElement, peopleHeaderValues);

  for (let person of data) {
    createPersonRow(resultElement, person)
  }
};

const createShipRow = (parentElement, ship) => {
  let row = document.createElement("div");
  row.classList.add("row", "white", "padding");

  appendColumn(row, `${ship.name}`);
  appendColumn(row, `${ship.model} cm`);
  appendColumn(row, `${ship.manufacturer}`);
  appendColumn(row, `${ship.cost_in_credits} $`);
  appendColumn(row, `${ship.crew + ship.passengers}`);
  appendColumn(row, `${ship.starship_class}`);

  parentElement.appendChild(row);
};

const loadShipsPage = (data) => {
  resultElement.innerHTML = "";
  createTableHeader(resultElement, shipsHeaderValues);

  for (let ship of data) {
    createShipRow(resultElement, ship);
  }
};

registerListeners();
