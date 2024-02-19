export class ApiService {
    constructor() {
        this.baseUrl = "https://restcountries.com/v3.1";
    }
    // logic for communicating with the API
    async getCountriesByName(name) {
        const response = await fetch(`${this.baseUrl}/name/${name}`);
        const data = await response.json();
        return data;
    }
}
