// https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example2/movies.json

const getMovies = () =>
	fetch(
		'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example2/movies.json'
	);

const getAllOscarWinningMovies = async () => {
	try {
		const res = await getMovies();
		const movies = await res.json();

		const oscarWinningMovies = movies.filter(movie => movie.hasWonOscar); // movie.hasWonOscar === true
		const nonOscarWinningMovies = movies.filter(movie => !movie.hasWonOscar); // movie.hasWonOscar === false

		// console.log('Oscar winning movies', oscarWinningMovies);
		// console.log('Movies without an oscar', nonOscarWinningMovies);
	} catch (err) {
		console.log(err);
	}
};

getAllOscarWinningMovies();

// Are there any movies that are currently in theatre
(async () => {
	try {
		const res = await getMovies();
		const movies = await res.json();

		const isSomeMovieInTheatre = movies.some(m => m.isInMovieTheaters);

		// console.log(
		// 	`There ${isSomeMovieInTheatre ? 'are' : "aren't"} movies in the theatre`
		// );
	} catch (err) {
		console.log(err);
	}
})();

// Log all actors that play in all these movies
(async () => {
	try {
		const res = await getMovies();
		const movies = await res.json();

		const actors = movies.flatMap(m => m.actors);

		// console.log('Actors:', actors);
	} catch (err) {
		console.log(err);
	}
})();

// All movies where Matt Damon is acting
(async () => {
	try {
		const res = await getMovies();
		const movies = await res.json();

		const mattDamonMovies = movies.filter(m => m.actors.includes('Matt Damon'));

		// console.log('Matt Damon movies', mattDamonMovies);
	} catch (err) {
		console.log(err);
	}
})();

// Sort the movies by budget
(async () => {
	try {
		const res = await getMovies();
		const movies = await res.json();

		const sortedMovies = movies.sort((a, b) => b.budget - a.budget);

		// console.log('Movies from most expensive to least expensive:', sortedMovies);
	} catch (err) {
		console.log(err);
	}
})();

(async () => {
	try {
		const res = await getMovies();
		const movies = await res.json();

		const moviesInfo = movies.reduce(
			(acc, movie) => {
				if (movie.minAge >= 18) {
					acc.adults++;
				} else if (movie.minAge >= 13) {
					acc.teenagers++;
				} else {
					acc.kids++;
				}
				return acc;
			},
			{
				kids: 0,
				teenagers: 0,
				adults: 0,
			}
		);

		console.log('Movies info:', moviesInfo);
	} catch (err) {
		console.log(err);
	}
})();
