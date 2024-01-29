// https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example2/movies.json

// getMovies - returns a promise from the fetch call to the movies.json
const getMovies = () =>
	fetch(
		'https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G1/08_async-await/example2/movies.json'
	);

// getAllOscarWinningMovies - returns all movies that have won an oscar
const getAllOscarWinningMovies = async () => {
	try {
		const res = await getMovies(); // getMovies returns a promise, so we need to await it
		const movies = await res.json(); // res.json() returns a promise, so we need to await it

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

		const isSomeMovieInTheatre = movies.some(m => m.isInMovieTheaters);  // m.isInMovieTheaters === true

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

		const actors = movies.flatMap(m => m.actors); // flatMap is a combination of map and flat as actors is an array and if we use map we will get an array of arrays

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

		// includes returns true or false which is what we need for filter to determine if the movie should be included in the new array
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

		// sort movies by budget from most expensive to the least expensive
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

		// reduce the movies to a single object that contains the info on how many movies are for kids, teenagers and adults
		const moviesInfo = movies.reduce(
			(acc, movie) => {
				// acc is the accumulator which is the object we are returning
				// movie is the current movie we are iterating over
				// we check the minAge of the movie and based on that we increment the appropriate property of the accumulator
				// we start with large numbers and go down to smaller numbers to get the correct count
				if (movie.minAge >= 18) {
					acc.adults++;
				} else if (movie.minAge >= 13) {
					acc.teenagers++;
				} else {
					acc.kids++;
				}
				// we return the accumulator so that it can be used in the next iteration
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
