// === Selected Elements ===
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

// === Functions  ===
// Get countries from the API, returns a Promise of the array of countries
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
                <p class="info-text">${country.name.common} is a country with population of ${country.population} and capital city is ${country.capital?.[0] || 'unknown'}.</p>
            </div>
            <div class="info-footer">
                <small class="text-muted">Open on <a href="https://en.wikipedia.org/wiki/${prepareWikiSearchName(country.name.common)}" target="_blank" />Wikipedia</a></small>
            </div>
        </div>
    </div>`;
}

function prepareWikiSearchName(name) {
	// return name.split(' ').join('_');
	return name.replace(' ', '_'); // replace can be used as combination of split and join
}

function toggleSpinner(showSpinner) {
	// this function shows or hides the spinner
	if (showSpinner) {
		// if showSpinner is true, show the spinner
		html.spinner.style.display = 'block';
	} else {
		// else hide the spinner
		html.spinner.style.display = 'none';
	}
}

// Events
html.searchBtn.addEventListener('click', () => {
	// when the search button is clicked, we show the spinner
	toggleSpinner(true);
	// when the search button is clicked, we get the value from the input field
	const value = html.searchInput.value;

	// if the value is empty or undefined, we show a notification and return
	if (!value) {
		html.notification.innerHTML = `<div class="alert-danger">You have entered an invalid value or value is empty!</div>`;
		return;
	}
	// if the value is not empty, we clear the notification and the card container
	html.cardContainer.innerHTML = '';
	html.notification.innerHTML = '';

	// we fetch the countries from the API and show them
	fetch(`https://restcountries.com/v3.1/name/${value}`)
		.then(response => response.json())
		.then(countries => showCountries(countries))
		.finally(() => toggleSpinner(false));
});

btnEurope.addEventListener('click', () => {
	// when the Europe button is clicked, we show the spinner
	toggleSpinner(true);
	// when the Europe button is clicked, we clear the card container
	html.cardContainer.innerHTML = '';

	// we fetch the countries from the API and show them
	getCountries()
		.then(countries => {
			// we filter the countries by region
			const countriesFromEurope = countries.filter(
				country => country.region === 'Europe'
			);

			// we show the countries
			showCountries(countriesFromEurope);
		})
		.finally(() => toggleSpinner(false));
});

btnNeighbors.addEventListener('click', () => {
	// when the Neighbors button is clicked, we show the spinner
	toggleSpinner(true);
	// when the Neighbors button is clicked, we clear the card container
	html.cardContainer.innerHTML = '';

	// we fetch the countries from the API and show them
	getCountries()
		.then(countries => {
			// we filter the countries by region
			const countriesNeighbors = countries.filter(country =>
				country.borders?.includes('MKD')
			);

			// we show the countries
			showCountries(countriesNeighbors);
		})
		.finally(() => toggleSpinner(false));
});

btnMacedonia.addEventListener('click', () => {
	// when the Macedonia button is clicked, we show the spinner
	toggleSpinner(true);
	// when the Macedonia button is clicked, we clear the card container
	html.cardContainer.innerHTML = '';

	// we fetch the countries from the API and show them
	getCountries()
		.then(countries => {
			const macedonia = countries.find(
				country => country.name.common === 'North Macedonia'
			);

			// we show the countries
			showCountries([macedonia]);
		})
		.finally(() => toggleSpinner(false));
});

resetBtn.addEventListener('click', () => {
	// when the Reset button is clicked, we clear the card container, the notification and the input field
	html.notification.innerHTML = '';
	html.searchInput.value = '';
	html.cardContainer.innerHTML = '';

	// when the Reset button is clicked, we show the spinner
	toggleSpinner(true);

	// we fetch the countries from the API and show them
	getCountries()
		.then(countries => showCountries(countries))
		.finally(() => toggleSpinner(false));
});

// Init
// on page load, we show fetch the countries from the API and show them
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
