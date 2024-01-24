// Selected Elements
const html = {
	cardContainer: document.querySelector('#cardContainer'),
	spinner: document.querySelector('#spinner'),
	searchInput: document.querySelector('#searchInput'),
	searchBtn: document.querySelector('#searchBtn'),
	notification: document.querySelector('#notification'),
};

// Functions
function getCountries() {
	fetch('https://restcountries.com/v3.1/all')
		.then(response => response.json())
		.then(countries => showCountries(countries))
		.finally(() => {
			html.spinner.style.display = 'none';
		});
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
                <p class="info-text">${
									country.name.common
								} is a country with population of ${
		country.population
	} and capital city is ${country.capital?.[0] || 'unknown'}.</p>
            </div>
            <div class="info-footer">
                <small class="text-muted">Open on <a href="https://en.wikipedia.org/wiki/${prepareWikiSearchName(
									country.name.common
								)}" target="_blank" />Wikipedia</a></small>
            </div>
        </div>
    </div>`;
}

function prepareWikiSearchName(name) {
	// return name.split(' ').join('_');
	return name.replace(' ', '_');
}

// Events
html.searchBtn.addEventListener('click', () => {
	html.spinner.style.display = 'block'; // show
	const value = html.searchInput.value;

	if (!value) {
		html.notification.innerHTML = `<div class="alert-danger">You have entered an invalid value or value is empty!</div>`;
		return;
	}
	html.cardContainer.innerHTML = '';
	html.notification.innerHTML = '';
	// get countries which match the search value criteria
	fetch(`https://restcountries.com/v3.1/name/${value}`)
		.then(response => response.json())
		.then(countries => showCountries(countries))
		.finally(() => {
			html.spinner.style.display = 'none'; // hide
		});
});

// Init
getCountries();

// Multiple versions for checking capital city

// Version 1
// !!country.capital && !!country.capital.length
// ? country.capital[0]
// : 'unknown'

// Version 2
// !!country.capital?.length ? country.capital[0] : 'unknown';

// Version 3
// country.capital?.[0] || 'unknown';
