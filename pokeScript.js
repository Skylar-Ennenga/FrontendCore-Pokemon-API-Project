// Create a function to fetch data from the api
async function fetchPokemonData(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    if (!response.ok) {
      throw new Error('Pokemon not found');
    }
    const pokemonData = await response.json();
    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return null;
  }
}

// Funstion to give a color back based on the pokemons type
function getTypeColor(type) {
  const typeColors = {
    grass: '#78C850',
    fire: '#F08030',
    water: '#6890F0',
    bug: '#A8B820',
    normal: '#A8A878',
    poison: '#A040A0',
    electric: '#F8D030',
    ground: '#E0C068',
    fairy: '#EE99AC',
    fighting: '#C03028',
    psychic: '#F85888',
    rock: '#B8A038',
    ghost: '#705898',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    flying: '#A890F0',
  };

  return typeColors[type.toLowerCase()] || '#A8A878'; // Default color if type is not found
}

// Function for capitalizing the first letter

function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// LIstener event for the submit button
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('pokemon-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const pokemonName = document.getElementById('pokemon-name').value.trim();
    if (pokemonName) {
      const pokemonData = await fetchPokemonData(pokemonName);
      if (pokemonData) {
        displayPokemonData(pokemonData);
      } else {
        displayError(`Pokemon "${pokemonName}" not found.`);
      }
    }
  });
});

function displayPokemonData(pokemonData) {
  const pokemonInfoElement = document.getElementById('pokemon-card');
  pokemonInfoElement.style.display = 'block'; // Make sure the card is visible

  const pokemonDataName = toTitleCase(pokemonData.name); // Convert to title case

  // Get the primary type and use the function above to get a color
  const primaryType = pokemonData.types[0].type.name;
  const typeColor = getTypeColor(primaryType);

  // Convert type names to title case
  const typeNames = pokemonData.types.map(typeInfo => toTitleCase(typeInfo.type.name)).join(', ');

  // Convert other information to title case
  const hp = `HP: ${pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat}`;
  const attack = `Attack: ${toTitleCase(pokemonData.moves[10].move.name)}`;
  const defense = `Defense: ${pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat}`;

  pokemonInfoElement.innerHTML = `
    <div class="card shadow-sm">
      <h2 class="card-header text-center" style="background-color: ${typeColor}; ">${pokemonDataName}</h2>
      <img src="${pokemonData.sprites.front_default}" class="card-img-top mx-auto d-block p-3" alt="Pokemon Image">
      <div class="card-body" style="background-color: ${typeColor};" >
        <h5 class="card-title text-center" > ${typeNames}</h5>
        <p class="card-text">${hp}</p>
        <p class="card-text">${attack}</p>
        <p class="card-text">${defense}</p>
      </div>
    </div>
  `;
}

function displayError(message) {
  const pokemonInfoElement = document.getElementById('pokemon-card');
  pokemonInfoElement.style.display = 'block'; // Make sure the card is visible
  pokemonInfoElement.innerHTML = `<p class="text-danger text-center">${message}</p>`;
}










