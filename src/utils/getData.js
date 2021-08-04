const API = 'https://pokeapi.co/api/v2/pokemon';

const getPokemons = async (name) => {
    const apiUrl = name ? `${API}${name}` : API;
    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la petición: ", error)
    }
}

export default getPokemons;