const app = {
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

	songs: [],
	songsInPlaylist: [],

	search: function () {
		const searchValue = this.html.search.value; // aa Aa
		const genreValue = this.html.genre.value;
		const isRestricted = this.html.restricted.checked;

		let filteredSongs = [...this.songs];

		if (searchValue) {
			filteredSongs = filteredSongs.filter(
				song =>
					song.title.toLowerCase().includes(searchValue.toLowerCase()) ||
					song.album.toLowerCase().includes(searchValue.toLowerCase()) ||
					song.artist.toLowerCase().includes(searchValue.toLowerCase())
			);
		}

		if (genreValue) {
			filteredSongs = filteredSongs.filter(song => song.genre === genreValue);
		}

		if (!isRestricted) {
			filteredSongs = filteredSongs.filter(song => song.restricted === 'None');
		}

		this.renderMusic(filteredSongs);
	},

	showPage: function (page) {
		if (page === 'music') {
			this.html.searchSection.style.display = 'block';
			this.renderMusic(this.songs);
		} else {
			// if it's playlist
			this.html.searchSection.style.display = 'none';
			this.renderMusic(this.songsInPlaylist);
		}
	},

	getSongs: async function () {
		try {
			const response = await fetch(
				'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/11_exercise/songs.json'
			);
			if (!response?.ok) {
				throw new Error('Something went wrong!');
			}
			this.songs = await response.json();
		} catch (error) {
			this.html.error.innerText = error?.message || 'Something went wrong!';
			this.html.error.style.display = 'block';
		}
	},

	renderMusic: function (songs) {
		this.html.tableBody.innerHTML = '';

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
							<button id="add-btn-${song.id}" class="btn btn-primary">Add to playlist</button>
						</td>
      </tr>
      `;
		});

		this.attachAddToPlaylistEventListener();
	},

	attachAddToPlaylistEventListener: function () {
		this.songs.forEach(song => {
			const button = document.querySelector(`#add-btn-${song.id}`);
			button.addEventListener('click', this.addToPlaylist.bind(this));
		});
	},

	addToPlaylist: function (event) {
		const id = event.target.id.split('-')[2];
		const song = this.songs.find(s => s.id === id);
		this.songsInPlaylist.push(song);
		const filteredSongs = this.songs.filter(s => s.id !== id);
		// this.renderMusic(filteredSongs);
	},

	init: async function () {
		this.html.error.style.display = 'none';

		this.html.pageMusicButton.addEventListener('click', () =>
			this.showPage('music')
		);
		this.html.pagePlaylistButton.addEventListener('click', () =>
			this.showPage('playlist')
		);
		this.html.search.addEventListener('input', this.search.bind(this));
		this.html.genre.addEventListener('input', this.search.bind(this));
		this.html.restricted.addEventListener('input', this.search.bind(this));

		await this.getSongs();
		this.renderMusic(this.songs);
	},
};

app.init();
