console.log("works");

const app = () => {
  const COUNTRIES_ALL_URL = "https://restcountries.com/v3.1/all";
  const COUNTRIES_NAME_URL = "https://restcountries.com/v3.1/name";

  const searchBtn = document.querySelector("#searchBtn");
  const searchInputEl = document.querySelector("#searchInput");
  const cardsContainerEl = document.querySelector(".cards-container");

  const filterInputEl = document.querySelector("#filterInput");
  const sortInputEl = document.querySelector("#sortInput");
  const filterBtn = document.querySelector("#filterBtn");

  let countryData = [];

  const toggleSpinner = isShown => {
    const spinnerContainerEl = document.querySelector(".spinner-container");

    if (isShown) {
      spinnerContainerEl.classList.remove("hide");
      cardsContainerEl.innerHTML = "";
    } else {
      spinnerContainerEl.classList.add("hide");
    }
  };

  const fetchCountries = async url => {
    toggleSpinner(true);

    try {
      const res = await fetch(url);

      console.log("response", res);

      if (res.status === 404) throw "Country Not Found";

      const data = await res.json();

      toggleSpinner(false);
      return data;
    } catch (error) {
      toggleSpinner(false);
      throw new Error(error);
    }
  };

  const sortCountries = (filter, order, countryData) => {
    const countriesCopy = [...countryData];

    if (filter === "name") {
      countriesCopy.sort((a, b) => {
        if (order === "asc") {
          if (a.name.common > b.name.common) return 1;
          if (a.name.common < b.name.common) return -1;
        } else {
          if (a.name.common < b.name.common) return 1;
          if (a.name.common > b.name.common) return -1;
        }

        return 0;
      });
    }

    if (filter === "population") {
      countriesCopy.sort((a, b) =>
        order === "asc"
          ? a.population - b.population
          : b.population - a.population
      );
    }

    if (filter === "area") {
      countriesCopy.sort((a, b) =>
        order === "asc" ? a.area - b.area : b.area - a.area
      );
    }

    renderCountryCards(countriesCopy, cardsContainerEl);
  };

  const renderCountryCards = (countryData, element) => {
    element.innerHTML = countryData
      .map(country => {
        if (!country.currencies) {
          console.log(country.name.common);
          console.log(country.currencies);
        }

        return `
        <div class="card">
          <div class="card-flag">
            <img src="${country.flags.png}" alt="a country flag" />
          </div>
          <div class="card-info">
            <h3>${country.name.common}</h3>
            <p>Population: ${country.population}</p>
            <p>Capital: ${country.capital ? country.capital[0] : "N/A"}</p>
            <p>Area: ${country.area} km<sup>2</sup></p>
            <p>Languages: ${
              country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A"
            }</p>
            <p>Currencies: ${
              country.currencies
                ? Object.keys(country.currencies)
                    .map(key => country.currencies[key].name)
                    .join(", ")
                : "N/A"
            }</p>
          </div>
        </div>
    `;
      })
      .join("");
  };

  const renderErrorMsg = (error, element) => {
    element.innerHTML = `<h2 class="error">${error}</h2>`;
  };

  searchBtn.addEventListener("click", async () => {
    try {
      const searchValue = searchInputEl.value;

      // Call all if no searchValue
      if (!searchValue) {
        countryData = await fetchCountries(COUNTRIES_ALL_URL);
      }

      // Call name if there is a search value
      if (searchValue) {
        countryData = await fetchCountries(
          `${COUNTRIES_NAME_URL}/${searchValue}`
        );
      }

      renderCountryCards(countryData, cardsContainerEl);
      searchInputEl.value = "";
    } catch (error) {
      renderErrorMsg(error, cardsContainerEl);
    }
  });

  filterBtn.addEventListener("click", () => {
    const filterInputValue = filterInputEl.value;
    const sortInputValue = sortInputEl.value;

    console.log(countryData);

    sortCountries(filterInputValue, sortInputValue, countryData);

    console.log(filterInputValue, sortInputValue);
  });
};

app();
