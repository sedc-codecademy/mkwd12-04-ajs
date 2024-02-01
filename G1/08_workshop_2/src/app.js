const url = 'https://swapi.dev/api/';
let peopleUrl = `${url}people/?page=1`;
let shipsUrl = `${url}starships/?page=1`;

// Getting the people
fetch(peopleUrl)
	.then(res => res.json())
	.then(people => console.log(people));

// Getting the ships
fetch(shipsUrl)
	.then(res => res.json())
	.then(ships => console.log(ships));
