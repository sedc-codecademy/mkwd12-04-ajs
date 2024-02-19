import { Loader } from "./loader.js";
import { ApiService } from "./api-service.js";
import { Country } from "./country.js";

export class CountryService {
    constructor() {
        this.apiService = new ApiService();
        this.searchInput = document.getElementById("searchInput");
        this.searchBtn = document.getElementById("searchBtn");
        this.resetBtn = document.getElementById("resetBtn");
        this.countriesContainer = document.getElementById("cardContainer");
        this.notification = document.getElementById("notification");
        this.btnEurope = document.getElementById("btnEurope");
        this.btnNeighbours = document.getElementById("btnNeighbors");
        this.btnMacedonia = document.getElementById("btnMacedonia");
    }

    async searchCountries(searchInput) {
        this.resetContainers();
        const searchValue = searchInput.trim();
        if (!searchValue) {
            this.notification.innerHTML = "<div class='alert-danger'>You entered an invalid or empty name!</div>";
            return;
        }
        Loader.show();

        try {
            const countriesData = await this.apiService.getCountriesByName(searchValue);
            if (!countriesData.length) {
                throw new Error(`No countries found! Search value: ${searchInput}`);
            }
            const mappedCountries = this.mapCountryData(countriesData);
            this.renderCountries(mappedCountries);
        } catch (error) {
            this.notification.innerHTML = `<div class='alert-danger'>${error}</div>`;
        } finally {
            Loader.hide();
        }
    }

    async getCountriesInEurope() {
        Loader.show();
        this.resetContainers();
        try {
            const countriesData = await this.apiService.getCountriesByRegion("Europe");
            if (!countriesData.length) {
                throw new Error("No countries from Europe found!");
            }
            const mappedCountries = this.mapCountryData(countriesData);
            this.renderCountries(mappedCountries);
        } catch (error) {
            this.notification.innerHTML = `<div class='alert-danger'>${error}</div>`;
        } finally {
            Loader.hide();
        }
    }

    async getMacedoniaNeighbours() {
        Loader.show();
        this.resetContainers();
        try {
            const countriesData = await this.apiService.getMacedoniaNeighbours();
            if (!countriesData.length) {
                throw new Error("No neighbours for Macedonia found!");
            }
            const mappedCountries = this.mapCountryData(countriesData);
            this.renderCountries(mappedCountries);
        } catch (error) {
            this.notification.innerHTML = `<div class='alert-danger'>${error}</div>`;
        } finally {
            Loader.hide();
        }
    }

    mapCountryData(countries) {
        return countries.map(country => new Country(country));
    }

    renderCountries(countries) {
        countries.forEach(country => {
            this.countriesContainer.innerHTML += `
                <div class="column margin-bottom">
                    <div class="info-card">
                        <img src="${country.flag}" alt="${country.name} Flag" class="info-image">
                        <div class="info-body">
                            <h5 class="info-title">${country.name}</h5>
                            <p class="info-text">${country.name} is a country with a population of ${country.population} and the capital city is ${country.capital}. </p>
                        </div>
                        <div class="info-footer">
                            <small class="text-muted">Open on <a href="${country.wikiLink}" target="_blank">Wikipedia</a></small>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    resetContainers() {
        this.notification.innerHTML = "";
        this.countriesContainer.innerHTML = "";
        this.searchInput.value = "";
    }

    registerEvents() {
        document.addEventListener("DOMContentLoaded", () => this.getCountriesInEurope());
        this.searchBtn.addEventListener("click", () => this.searchCountries(this.searchInput.value));
        this.resetBtn.addEventListener("click", () => this.resetContainers());
        this.btnEurope.addEventListener("click", () => this.getCountriesInEurope());
        this.btnMacedonia.addEventListener("click", () => this.searchCountries("Macedonia"));
        this.btnNeighbours.addEventListener("click", () => this.getMacedoniaNeighbours());
    }
}