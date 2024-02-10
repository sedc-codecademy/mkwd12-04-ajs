const app = {
	html: {
		pageMusicButton: document.querySelector('#page-music-btn'),
		pagePlaylistButton: document.querySelector('#page-playlist-btn'),
		error: document.querySelector('#error'),
		tableBody: document.querySelector('#table-body'),
	},

	songs: [],
	songsInPlaylist: [],

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

	renderMusic: function () {
		this.html.tableBody.innerHTML = '';

		this.songs.forEach((song, index) => {
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
							<button class="btn btn-primary">Add to playlist</button>
						</td>
      </tr>
      `;
		});
	},

	init: async function () {
		this.html.error.style.display = 'none';
		await this.getSongs();
		this.renderMusic();
	},
};

app.init();
