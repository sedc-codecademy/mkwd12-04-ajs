let navigationService = {
    peopleBtn: document.getElementById("peopleBtn"),
    shipsBtn: document.getElementById("shipsBtn"),
    nextBtn: document.getElementById("nextBtn"),
    previousBtn: document.getElementById("prevBtn"),
    currentPage: 1,
    pageType: "",
    registerListeners: function () {
        this.peopleBtn.addEventListener("click", function () {
            navigationService.currentPage = 1;
            if (navigationService.pageType === "people") return;
            uiService.toggleLoader(true);
            starWarsService.getPeople(1);
            navigationService.pageType = "people";
        });
        this.shipsBtn.addEventListener("click", function () {
            navigationService.currentPage = 1;
            if (navigationService.pageType === "ships") return;
            uiService.toggleLoader(true);
            starWarsService.getShips(1);
            navigationService.pageType = "ships";
        });
        this.nextBtn.addEventListener("click", this.nextPage);
        this.previousBtn.addEventListener("click", this.previousPage);
    },
    nextPage: function () {
        console.log(navigationService.currentPage);
        navigationService.currentPage++;
        console.log(navigationService.currentPage);
        uiService.toggleLoader(true);
        if (navigationService.pageType === "people") starWarsService.getPeople(navigationService.currentPage);
        if (navigationService.pageType === "ships") starWarsService.getShips(navigationService.currentPage);
    },
    previousPage: function () {
        navigationService.currentPage--;
        uiService.toggleLoader(true);
        if (navigationService.pageType === "people") starWarsService.getPeople(navigationService.currentPage);
        if (navigationService.pageType === "ships") starWarsService.getShips(navigationService.currentPage);
    },
    navButtonsCheck: function (response) {
        if (response.next === null) {
            this.nextBtn.style.display = "none";
        } else {
            this.nextBtn.style.display = "block";
        }
        if (response.previous === null) {
            this.previousBtn.style.display = "none";
        } else {
            this.previousBtn.style.display = "block";
        }
    }
}

let starWarsService = {
    url: "https://swapi.dev/api/",
    getPeople: function (page) {
        let peopleUrl = `${this.url}people/?page=${page}`;
        fetch(peopleUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (people) {
                console.log('The request succeeded!');
                console.log(people);
                navigationService.navButtonsCheck(people);
                uiService.toggleLoader(false);
                uiService.loadPeoplePage(people.results);
            })
            .catch(function (error) {
                console.log('The request failed!');
                console.log(error);
            });
    },
    getShips: function (page) {
        let shipsUrl = `${this.url}starships/?page=${page}`;
        fetch(shipsUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (ships) {
                console.log('The request succeeded!');
                console.log(ships);
                navigationService.navButtonsCheck(ships);
                uiService.toggleLoader(false);
                uiService.loadShipsPage(ships.results);
            })
            .catch(function (error) {
                console.log('The request failed!');
                console.log(error);
            });
    }
}

let uiService = {
    resultElement: document.getElementById("result"),
    loader: document.getElementById("loader"),
    peopleHeaderValues: ["Name", "Height", "Mass", "Gender", "Birth Year", "Films"],
    shipsHeaderValues: ["Name", "Model", "Manifacturer", "Cost", "Capacity", "Class"],
    toggleLoader: function (toggle) {
        if (toggle) this.loader.style.display = "block";
        else this.loader.style.display = "none";
    },
    appendColumn: function (row, text) {
        let col = document.createElement("div");
        col.classList.add("col");
        col.innerText = text;
        row.appendChild(col);
    },
    createTableHeader(parentElement, values) {
        let row = document.createElement("div");
        row.classList.add("row", "yellow", "padding");
        for (const col of values) {
            this.appendColumn(row, col);
        }

        parentElement.appendChild(row);
    },
    createPersonRow(parentElement, person) {
        let row = document.createElement("div");
        row.classList.add("row", "white", "padding");

        this.appendColumn(row, `${person.name}`);
        this.appendColumn(row, `${person.height} cm`);
        this.appendColumn(row, `${person.mass} kg`);
        this.appendColumn(row, `${person.gender}`);
        this.appendColumn(row, `${person.birth_year}`);
        this.appendColumn(row, `${person.films.length}`);

        parentElement.appendChild(row);
    },
    loadPeoplePage: function (data) {
        this.resultElement.innerHTML = "";
        this.createTableHeader(this.resultElement, this.peopleHeaderValues);

        for (let person of data) {
            this.createPersonRow(this.resultElement, person)
        }
    },
    createShipRow(parentElement, ship) {
        let row = document.createElement("div");
        row.classList.add("row", "white", "padding");

        this.appendColumn(row, `${ship.name}`);
        this.appendColumn(row, `${ship.model} cm`);
        this.appendColumn(row, `${ship.manufacturer}`);
        this.appendColumn(row, `${ship.cost_in_credits} $`);
        this.appendColumn(row, `${ship.crew + ship.passengers}`);
        this.appendColumn(row, `${ship.starship_class}`);

        parentElement.appendChild(row);
    },
    loadShipsPage: function (data) {
        this.resultElement.innerHTML = "";
        this.createTableHeader(this.resultElement, this.shipsHeaderValues);

        for (let ship of data) {
            this.createShipRow(this.resultElement, ship);
        }
    }
}

navigationService.registerListeners();