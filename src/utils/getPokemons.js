import getData from "./getData";

const getPokemons = async  (ArrayID) => {

    let pokemonGroup =  Promise.all(ArrayID.map(async (id) => await getData(id)));
    
    return pokemonGroup;
}

export default getPokemons;