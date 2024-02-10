// Create an app object. This is similar to Object Oriented Programming (OOP) in JavaScript.
const app = {
	// All HTML elements are stored in the html property
	html: {
		pageMusicButton: document.querySelector('#page-music-btn'),
		pagePlaylistButton: document.querySelector('#page-playlist-btn'),
		error: document.querySelector('#error'),
		tableBody: document.querySelector('#table-body'),
		searchSection: document.querySelector('#search-section'),
		search: document.querySelector('#search'),
		genre: document.querySelector('#genre'),
		restricted: document.querySelector('#restricted'),
	},

	songs: [], // All songs fetched from the API
	songsInPlaylist: [], // All songs added to the playlist

	// This method generates the genre options in the select element. It is called in the init method
	// It loops through all the songs and gets the unique genres
	generateGenreOptions: function () {
		const genres = this.songs.map(song => song.genre);
		let uniqueGenres = [];

		// uniqueGenres = [...new Set(genres)] // This is a shorthand for the for loop below
		genres.forEach(genre => {
			if (!uniqueGenres.includes(genre)) {
				uniqueGenres.push(genre);
			}
		});

		// This will clear the select element and add the default option
		this.html.genre.innerHTML =
			'<option selected value="">Select genre</option>';

		// This will loop through the unique genres and add them as options in the select element
		uniqueGenres.forEach(genre => {
			const option = document.createElement('option');
			option.value = genre;
			option.innerText = genre;
			this.html.genre.appendChild(option);
		});
	},

	// This method is responsible to filter the songs based on the songs added to the playlist, and also the values from search input, genre and restricted checkbox
	search: function () {
		// Get the values from the search input, genre select and restricted checkbox
		const searchValue = this.html.search.value;
		const genreValue = this.html.genre.value;
		const isRestricted = this.html.restricted.checked;

		// Get all the songs that are not in the playlist
		let filteredSongs = this.songs.filter(
			song => !this.songsInPlaylist.find(sp => sp.id === song.id) // if the song can't be found in the playlist
		);

		// If there is a value in the search input, filter the songs based on the search value
		if (searchValue) {
			// Filter the songs based on the search value
			filteredSongs = filteredSongs.filter(
				song =>
					song.title.toLowerCase().includes(searchValue.toLowerCase()) || // if the title includes the search value
					song.album.toLowerCase().includes(searchValue.toLowerCase()) || // if the album includes the search value
					song.artist.toLowerCase().includes(searchValue.toLowerCase()) // if the artist includes the search value
			);
		}

		// If there is a value in the genre select, filter the songs based on the genre value
		if (genreValue) {
			// Filter the songs based on the genre value
			filteredSongs = filteredSongs.filter(song => song.genre === genreValue);
		}

		//  If the restricted checkbox is NOT checked, filter the songs based on the restricted value
		if (!isRestricted) {
			// Filter the songs based on the restricted value - Get all the songs that are not restricted
			filteredSongs = filteredSongs.filter(song => song.restricted === 'None');
		}

		// Render the filtered songs
		this.renderMusic(filteredSongs, false);
	},

	// This method is responsible to show the page based on the page parameter upon a click event in the navbar links
	showPage: function (page) {
		// If the page is music, show the search section and render all songs
		if (page === 'music') {
			this.html.searchSection.style.display = 'block';
			this.renderMusic(this.songs, false);
		} else {
			// if it's playlist page, hide the search section and render the songs in the playlist
			this.html.searchSection.style.display = 'none';
			this.renderMusic(this.songsInPlaylist, true);
		}
	},

	// This method is responsible to fetch the songs from the API
	getSongs: async function () {
		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/11_exercise/songs.json'
			);
			// If the response is not ok, throw an error
			if (!response?.ok) {
				throw new Error('Something went wrong!');
			}
			this.songs = await response.json();
		} catch (error) {
			// If there is an error, display the error message
			this.html.error.innerText = error?.message || 'Something went wrong!';
			this.html.error.style.display = 'block';
		}
	},

	// This method is responsible to render the music based on the songs and which page is visible
	renderMusic: function (songs, isPlaylist) {
		// Clear the table body
		this.html.tableBody.innerHTML = '';

		// Loop through the songs and render them in the table
		songs.forEach((song, index) => {
			this.html.tableBody.innerHTML += `
      <tr>
						<td>${index + 1}</td>
						<td>${song.title}</td>
						<td>${song.artist}</td>
						<td>${song.album}</td>
						<td>${song.genre}</td>
						<td>${song.duration}</td>
						<td>${song.restricted}</td>
						<td>${song.releaseDate}</td>
						<td>
                            ${ 
								isPlaylist // if the page is playlist, render the remove button, else render the add button
									? `<button id="remove-btn-${song.id}" class="btn btn-danger">Remove from playlist</button>`
									: `<button id="add-btn-${song.id}" class="btn btn-primary">Add to playlist</button>`
							}
						</td>
      </tr>
      `;
		});

		// This is alternative to the ternary operator below
		// if (isPlaylist) {
		// 	this.attachRemoveFromPlaylistEventListener(songs);
		// } else {
		// 	this.attachAddToPlaylistEventListener(songs);
		// }

		// If the page is playlist, attach the remove event listener, else attach the add event listener
		isPlaylist
			? this.attachRemoveFromPlaylistEventListener(songs)
			: this.attachAddToPlaylistEventListener(songs);
	},

	// This method is responsible to attach the remove event listener to the remove buttons
	attachRemoveFromPlaylistEventListener: function (songs) {
		songs.forEach(song => {
			// Get the remove button and attach the event listener
			const button = document.querySelector(`#remove-btn-${song.id}`);
			// When the button is clicked, call the removeFromPlaylist method
			// The bind method is used to bind the this keyword to the app object
			button.addEventListener('click', this.removeFromPlaylist.bind(this));
		});
	},

	// This method is responsible to remove the song from the playlist
	removeFromPlaylist: function (event) {
		// Get the id of the song from the button id
		const id = event.target.id.split('-')[2];
		// Filter the songs in the playlist and remove the song with the id
		this.songsInPlaylist = this.songsInPlaylist.filter(song => song.id !== id);
		// Render the songs on the playlist page
		this.renderMusic(this.songsInPlaylist, true);
	},

	// This method is responsible to attach the add event listener to the add buttons
	attachAddToPlaylistEventListener: function (songs) {
		songs.forEach(song => {
			// Get the add button and attach the event listener
			const button = document.querySelector(`#add-btn-${song.id}`);
			// When the button is clicked, call the addToPlaylist method
			// The bind method is used to bind the this keyword to the app object
			button.addEventListener('click', this.addToPlaylist.bind(this));
		});
	},

	// This method is responsible to add the song to the playlist
	addToPlaylist: function (event) {
		// Get the id of the song from the button id
		const id = event.target.id.split('-')[2];
		// Find the song with the id
		const song = this.songs.find(s => s.id === id);
		// Add the song to the playlist
		this.songsInPlaylist.push(song);
		// Render the songs on the music page and keep the search value, genre and restricted checkbox
		this.search();
	},

	// This method is responsible to initialize the app
	init: async function () {
		// Hide the error message
		this.html.error.style.display = 'none';

		// Attach the event listeners to the navbar buttons
		this.html.pageMusicButton.addEventListener('click', () =>
			this.showPage('music')
		);
		this.html.pagePlaylistButton.addEventListener('click', () =>
			this.showPage('playlist')
		);

		// Attach the event listener to the search input, genre select and restricted checkbox
		this.html.search.addEventListener('input', this.search.bind(this));
		this.html.genre.addEventListener('input', this.search.bind(this));
		this.html.restricted.addEventListener('input', this.search.bind(this));

		// Fetch the songs from the API
		await this.getSongs();
		// Render the songs on the music page
		this.renderMusic(this.songs, false);
		// Generate the genre options in the select element
		this.generateGenreOptions();
	},
};

// Initialize the app
app.init();
