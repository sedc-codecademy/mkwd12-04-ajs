// Selected Elements
// Here we combine all selected elements in an html object to organize the code
const html = {
	cardContainer: document.querySelector('#cardContainer'),
	spinner: document.querySelector('#spinner'),
	searchInput: document.querySelector('#searchInput'),
	searchBtn: document.querySelector('#searchBtn'),
	notification: document.querySelector('#notification'),
	btnEurope: document.querySelector('#btnEurope'),
	btnNeighbors: document.querySelector('#btnNeighbors'),
	btnMacedonia: document.querySelector('#btnMacedonia'),
	resetBtn: document.querySelector('#resetBtn'),
};

// Functions
function getCountries() {
	return fetch('https://restcountries.com/v3.1/all').then(response =>
		response.json()
	);
}

function showCountries(countries) {
	// this function takes an array of countries and converts each element to a HTML card
	countries.forEach(country => {
		// each element is injected in the card container
		html.cardContainer.innerHTML += createCard(country);
	});
}

function createCard(country) {
	// create card function generate the HTML for a single country
	// 1 JS Object country === 1 HTML element card
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
	return name.replace(' ', '_'); // replace can be used as combination of split and join
}

function toggleSpinner(showSpinner) {
	if (showSpinner) {
		html.spinner.style.display = 'block';
	} else {
		html.spinner.style.display = 'none';
	}
}

// Events
html.searchBtn.addEventListener('click', () => {
	toggleSpinner(true);
	const value = html.searchInput.value;

	if (!value) {
		html.notification.innerHTML = `<div class="alert-danger">You have entered an invalid value or value is empty!</div>`;
		return;
	}
	html.cardContainer.innerHTML = '';
	html.notification.innerHTML = '';

	fetch(`https://restcountries.com/v3.1/name/${value}`)
		.then(response => response.json())
		.then(countries => showCountries(countries))
		.finally(() => toggleSpinner(false));
});

btnEurope.addEventListener('click', () => {
	toggleSpinner(true);
	html.cardContainer.innerHTML = '';

	getCountries()
		.then(countries => {
			const countriesFromEurope = countries.filter(
				country => country.region === 'Europe'
			);

			showCountries(countriesFromEurope);
		})
		.finally(() => toggleSpinner(false));
});

btnNeighbors.addEventListener('click', () => {
	toggleSpinner(true);
	html.cardContainer.innerHTML = '';

	getCountries()
		.then(countries => {
			const countriesNeighbors = countries.filter(country =>
				country.borders?.includes('MKD')
			);

			showCountries(countriesNeighbors);
		})
		.finally(() => toggleSpinner(false));
});

btnMacedonia.addEventListener('click', () => {
	toggleSpinner(true);
	html.cardContainer.innerHTML = '';

	getCountries()
		.then(countries => {
			const macedonia = countries.find(
				country => country.name.common === 'North Macedonia'
			);

			showCountries([macedonia]);
		})
		.finally(() => toggleSpinner(false));
});

resetBtn.addEventListener('click', () => {
	html.notification.innerHTML = '';
	html.searchInput.value = '';
	html.cardContainer.innerHTML = '';
	toggleSpinner(true);

	getCountries()
		.then(countries => showCountries(countries))
		.finally(() => toggleSpinner(false));
});

// Init
getCountries()
	.then(countries => showCountries(countries))
	.finally(() => toggleSpinner(false));

// Multiple versions of the logic for checking capital city

// Version 1
// !!country.capital && !!country.capital.length // if country has the property capital AND the country capital property (which is an array) contains elements inside...
// ? country.capital[0] // show the first element
// : 'unknown' // else show unknown

// Version 2 - no need to check for length separately if we use optional chaining
// !!country.capital?.length ? country.capital[0] : 'unknown';

// Version 3 - no need to check for length, if we check if the first one exists optionally
// country.capital?.[0] || 'unknown';

// Read more - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

[{ borders: ['ITA'] }, { borders: [] }, {}];
