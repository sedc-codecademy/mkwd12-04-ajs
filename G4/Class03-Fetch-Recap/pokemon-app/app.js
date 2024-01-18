const pokemonListEl = document.querySelector(".pokemon-list");
const pokemonCardEl = document.querySelector(".pokemon-card");

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

function renderPokemonList(listEl, pokemonList) {
  for (let pokemon of pokemonList) {
    console.log(pokemon);
    const newLi = document.createElement("LI");
    newLi.innerText = pokemon.name;
    listEl.appendChild(newLi);
    // 3. Event listeners registered for every pokemon li element in list
    newLi.addEventListener("click", function () {
      // 4. If user clicks a pokemon the below function is called with the url for that specific pokemon
      fetchPokemonByUrl(pokemon.url);
    });
  }
}

function fetchPokemons() {
  fetch(POKEMON_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      //   2. Render pokemon list called when getting pokemon list data from backend
      renderPokemonList(pokemonListEl, data.results);
    });
}

function renderPokemonDetails(cardEl, pokemonDetails) {
  cardEl.innerHTML = `
        <h3>${pokemonDetails.name}</h3>
        <img src="${pokemonDetails.sprites.front_default}"  alt="a sprite of a pokemon"/>
    `;
}

function fetchPokemonByUrl(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // "data" here is the details object for the specific pokemon that we have clicked on
      console.log(data);
      //   5. Render function called below that shows on the screen the name and picture of the pokemon that was clicked
      renderPokemonDetails(pokemonCardEl, data);
    });
}

// 1. Fetch pokemons called
fetchPokemons();
