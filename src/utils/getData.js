const API = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async (pokemon) => {

    let apiUrl = pokemon ? `${API}${pokemon}` : API;

    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la petición: ", error)
    }
}

export default getData;