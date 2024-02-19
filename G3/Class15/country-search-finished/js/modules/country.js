export class Country {
    constructor({ flags: { png }, name: { common }, population, capital }) {
        this.flag = png;
        this.name = common;
        this.population = population;
        this.capital = capital?.length ? capital[0] : "N/A";
        this.wikiLink = `https://en.wikipedia.org/wiki/${this.name.split(" ").join("_")}`;
    }
}
