let html = {
  searchInput: document.getElementById("searchInput"),
  searchBtn: document.getElementById("searchBtn"),
  resetBtn: document.getElementById("resetBtn"),
  spiner: document.getElementById("spiner"),
  cardContainer: document.getElementById("cardContainer"),
  notification: document.getElementById("notification"),
  btnEurope: document.getElementById("btnEurope"),
  btnNeighbors: document.getElementById("btnNeighbors"),
  btnMacedonia: document.getElementById("btnMacedonia")
}

function getData() {
  return fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
}

getData().then((countries) => {
  countries.forEach(country => {
    html.cardContainer.innerHTML += createCard(country);
  });
  toggleSpinner(false)
}).catch(error => console.error(error));

function prepareWikiSearchValue(countryName) {
  return countryName.split(" ").join("_");
}

function createCard(country) {
  return `
    <div class="column margin-bottom">
        <div class="info-card">
            <img src="${country.flags.png}" alt="${country.name.common} Flag" class="info-image">
            <div class="info-body">
                <h5 class="info-title">${country.name.common}</h5>
                <p class="info-text">${country.name.common} is a country with a population of ${country.population} and the capital city is ${country.capital?.[0] || "unknown"}. </p>
            </div>
            <div class="info-footer">
                <small class="text-muted">Open on <a href="https://en.wikipedia.org/wiki/${prepareWikiSearchValue(country.name.common)}" target="_blank">Wikipedia</a></small>
            </div>
        </div>
    </div>`
}

function toggleSpinner(showSpinner) {
  if (showSpinner) {
    html.spiner.style.display = "block";
  } else {
    html.spiner.style.display = "none";
  }

  // html.spiner.style.display = showSpinner ? 'block' : 'none';
}

html.btnEurope.addEventListener("click", () => {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  toggleSpinner(true);

  getData().then((countries) => {
    let filteredCountries = countries.filter(country => country.region === "Europe");
    filteredCountries.forEach(country => {
      html.cardContainer.innerHTML += createCard(country);
    });
    toggleSpinner(false);
  })
})

html.btnNeighbors.addEventListener("click", function () {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  toggleSpinner(true);

  getData().then(function (countriesData) {
    toggleSpinner(false);
    let filteredCountries = countriesData.filter(x => x.borders?.includes("MKD"));
    filteredCountries.forEach(country => {
      html.cardContainer.innerHTML += createCard(country);
    });
  })
})

html.btnMacedonia.addEventListener("click", function () {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  toggleSpinner(true);

  getData().then(function (countryData) {
    toggleSpinner(false);
    let result = countryData.find(x => x.name.common.includes("Macedonia")); // result is an array of one element
    html.cardContainer.innerHTML += createCard(result);
  })
})

async function searchCountriesByName(countryName) {
  toggleSpinner(true);

  fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(response => response.json()).then(countries => {
    html.cardContainer.innerHTML = "";
    html.notification.innerHTML = "";

    countries.forEach(c => html.cardContainer.innerHTML += createCard(c));
  }).catch(() => {
    html.notification.innerHTML = "<div class='alert-danger'>You entered an invalid or empty name!</div>"
  }).finally(() => {
    toggleSpinner(false);
  })
}

html.searchBtn.addEventListener("click", () => searchCountriesByName(html.searchInput.value))

html.resetBtn.addEventListener("click", () => {
  html.cardContainer.innerHTML = "";
  html.notification.innerHTML = "";
  html.searchInput.value = "";
})
