const html = {
  searchInput: document.getElementById("searchInput"),
  btnSearch: document.getElementById("btnSearch"),
  btnReset: document.getElementById("btnReset"),
  cardContainer: document.getElementById("cardContainer"),
  btnPopulation: document.getElementById("btnPopulation"),
  btnAustralia: document.getElementById("btnAustralia"),
  btnSouthAmerica: document.getElementById("btnSouthAmerica"),
  btnNorthAmerica: document.getElementById("btnNorthAmerica"),
  btnAsia: document.getElementById("btnAsia"),
  btnAfrica: document.getElementById("btnAfrica"),
  btnEurope: document.getElementById("btnEurope"),
  notification: document.getElementById("notification"),
};

let data;

async function fetchData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

fetchData();

function createCard(country) {
  return `  
      <div class="col-sm-6">
      <div class="card" style="width: 18rem;">
      <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
      <div class="card-body">
          <h5 class="card-title">${country.name.common}</h5>
          <p class="card-text">${country.name.common} is country with population of ${country.population} with the capital city ${country.capital[0]}</p>
      </div>
    </div>
      </div>
     `;
}

html.btnReset.addEventListener("click", function () {
  html.notification.innerHTML = "";
  html.cardContainer.innerHTML = "";
  html.searchInput.value = "";
});

function filterAndDisplayContinent(continent) {
  html.notification.innerHTML = "";
  html.cardContainer.innerHTML = "";
  data
    .filter((country) => country.continents[0] === continent)
    .forEach((country) => {
      html.cardContainer.innerHTML += createCard(country);
    });
}

html.btnPopulation.addEventListener("click", function () {
  html.notification.innerHTML = "";
  html.cardContainer.innerHTML = "";
  data
    .filter((country) => country.population >= 100000000)
    .forEach((country) => {
      html.cardContainer.innerHTML += createCard(country);
    });
});

html.btnEurope.addEventListener("click", function () {
  filterAndDisplayContinent("Europe");
});

html.btnAfrica.addEventListener("click", function () {
  filterAndDisplayContinent("Africa");
});

html.btnAsia.addEventListener("click", function () {
  filterAndDisplayContinent("Asia");
});

html.btnNorthAmerica.addEventListener("click", function () {
  filterAndDisplayContinent("North America");
});

html.btnSouthAmerica.addEventListener("click", function () {
  filterAndDisplayContinent("South America");
});

html.btnAustralia.addEventListener("click", function () {
  filterAndDisplayContinent("Oceania");
});

async function displayCountries(countries) {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  countries.forEach((country) => {
    html.cardContainer.innerHTML += createCard(country);
  });
}

//Search with button click
html.btnSearch.addEventListener("click", async function () {
  await fetch(`https://restcountries.com/v3.1/name/${html.searchInput.value}`)
    .then((response) => response.json())
    .then(async function (data) {
      await displayCountries(data);
    })
    .catch((error) => {
      html.notification.innerHTML = "";
      html.cardContainer.innerHTML = "";
      html.notification.innerHTML += `
              <div class="alert alert-danger" role="alert">
                  You have entered a wrong country name, please try again!
              </div>
              `;
    });
});

//Search with enter
html.searchInput.addEventListener("keydown", async function (event) {
  if (event.key === "Enter") {
    await fetch(`https://restcountries.com/v3.1/name/${html.searchInput.value}`)
      .then((response) => response.json())
      .then(async function (data) {
        await displayCountries(data);
      })
      .catch((error) => {
        html.notification.innerHTML = "";
        html.cardContainer.innerHTML = "";
        html.notification.innerHTML += `
                  <div class="alert alert-danger" role="alert">
                      You have entered a wrong country name, please try again!
                  </div>
                  `;
      });
  }
});
