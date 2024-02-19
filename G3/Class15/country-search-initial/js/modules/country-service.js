import { ApiService } from "./api-service.js";
import { Country } from "./country.js";
import { Loader } from "./loader.js";

// const searchBtn = document.getElementById("searchBtn");
// let obj = {
//     name: "fds",
//     lastName: "fdsfs",
//     func1: function () {
//         console.log(this.name);
//     }
// }

export class CountryService {
  constructor() {
    this.apiService = new ApiService();
    this.searchBtn = document.getElementById("searchBtn");
    this.searchInput = document.getElementById("searchInput");
    this.resetBtn = document.getElementById("resetBtn");
    this.countriesContainer = document.getElementById("cardContainer");
    this.notification = document.getElementById("notification");
    this.btnEurope = document.getElementById("btnEurope");
    this.btnNeighbours = document.getElementById("btnNeighbors");
    this.btnMacedonia = document.getElementById("btnMacedonia");
  }
  // the main logic of the app (rendering countries, searching functionality, validations, events etc...)

  async searchCountries(searchInput) {
    Loader.show();
    this.resetContainers();
    try {
      const apiData = await this.apiService.getCountriesByName(searchInput);
      if (!apiData.length) {
        throw new Error("No countries available! Search value " + searchInput)
      }
      console.log(apiData);
      const mappedData = apiData.map((country) => new Country(country));
      console.log(mappedData);
      this.renderCountries(mappedData);
    } catch (error) {
        this.notification.innerHTML = `<div class='alert-danger'>${error}</div>`;
    } finally {
        Loader.hide();
    }
  }

  renderCountries(countries) {
    countries.forEach((country) => {
      this.countriesContainer.innerHTML += `
        <div class="column margin-bottom">
            <div class="info-card">
                <img src="${country.flag}" alt="${country.name} Flag" class="info-image">
                <div class="info-body">
                    <h5 class="info-title">${country.name}</h5>
                    <p class="info-text">${country.name} is a country with a population of
                    ${country.population} and the capital city is ${country.capital}. </p>
                </div>
                <div class="info-footer">
                    <small class="text-muted">Open on <a href="${country.wikiLink}"
                            target="_blank">Wikipedia</a></small>
                </div>
            </div>
        </div>`;
    });
  }

  resetContainers() {
    this.countriesContainer.innerHTML = "";
    this.notification.innerHTML = "";
    this.searchInput.value = "";
  }

  registerEvents() {
    this.searchBtn.addEventListener("click", async () => {
      this.searchCountries(this.searchInput.value);
    });
  }
}
