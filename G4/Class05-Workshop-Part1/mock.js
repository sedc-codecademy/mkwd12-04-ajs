const personMock = {
  name: "Luke Skywalker", //Name
  height: "172", // Height
  mass: "77", //Mass
  hair_color: "blond",
  skin_color: "fair",
  eye_color: "blue",
  birth_year: "19BBY", // Birth Year
  gender: "male", // Gender
  homeworld: "https://swapi.dev/api/planets/1/",
  films: [
    //Appereances - films.length
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  species: [],
  vehicles: [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/",
  ],
  starships: [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/",
  ],
  created: "2014-12-09T13:50:51.644000Z",
  edited: "2014-12-20T21:17:56.891000Z",
  url: "https://swapi.dev/api/people/1/",
};

const shipMock = {
  name: "CR90 corvette", //Name
  model: "CR90 corvette", //Model
  manufacturer: "Corellian Engineering Corporation", // Manufacturer
  cost_in_credits: "3500000", // Cost (credits)
  length: "150",
  max_atmosphering_speed: "950",
  crew: "30-165", // Crew OR
  passengers: "600", //Passengers
  cargo_capacity: "3000000",
  consumables: "1 year",
  hyperdrive_rating: "2.0",
  MGLT: "60",
  starship_class: "corvette", //Class
  pilots: [],
  films: [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/",
  ],
  created: "2014-12-10T14:20:33.369000Z",
  edited: "2014-12-20T21:23:49.867000Z",
  url: "https://swapi.dev/api/starships/2/",
};
