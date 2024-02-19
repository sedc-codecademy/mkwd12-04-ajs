// used for mapping the API data into our own Country model that has only the properties we need for our logic
export class Country {
    constructor({ name : { common }, flags: { png }, population, capital }) {
        this.name = common;
        this.flag = png;
        this.population = population;
        // this.capital = capital && capital[0] || "N/A";
        this.capital = capital?.length ? capital[0] : "N/A";
        // const wikiLinkName = this.name.split(" ").join("_");
        this.wikiLink = `https://en.wikipedia.org/wiki/${this.name.split(" ").join("_")}`;
    }
}