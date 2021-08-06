import getData from "./getData";


const getPokemons = async  (pokemons) => {
    let pokemonsName = pokemons.results.map(pokemon => pokemon.name);
    let pokemonGroup =  Promise.all(pokemonsName.map(async (pokemon) => await getData(pokemon)));
    

    return pokemonGroup;
}

export default getPokemons;