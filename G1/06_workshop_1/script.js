// Selected Elements
const html = {
	cardContainer: document.querySelector('#cardContainer'),
};

// Functions
function getCountries() {
	fetch('https://restcountries.com/v3.1/all')
		.then(response => response.json())
		.then(countries => showCountries(countries));
}

function showCountries(countries) {
	countries.forEach(country => {
		html.cardContainer.innerHTML += createCard(country);
	});
}

function createCard(country) {
	return `
    <div class="column margin-bottom>
        <div class="info-card">
            <img src="${country.flags.png}"
                 alt="${country.flags.alt}"
                 class="info-image"
            />
            <div class="info-body">
                <h5 class="info-title">${country.name.common}</h5>
                <p class="info-text">${country.name.common} is a country with population of ${country.population} and capital city is ${country.capital[0]}.</p>
            </div>
            <div class="info-footer">
                <small class="text-muted">Open on <a href="#" />Wikipedia</a></small>
            </div>
        </div>
    </div>`;
}

// Init
getCountries();
