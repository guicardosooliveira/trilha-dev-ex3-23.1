// Conceitos necessarios para entender o codigo:
// O que é uma Promise?
// O que é uma API?
// O que é o fetch?

async function getPokemons() {
  return new Promise((resolve, reject) => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) => resolve(data.results))
      .catch((error) => reject(error))
  })
}

async function getPokemonTypes(pokemon_name) {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      .then((response) => response.json())
      .then((data) => resolve(data.types.map((type) => type.type.name)))
      .catch((error) => reject(error))
  })
}

export { getPokemons, getPokemonTypes }
