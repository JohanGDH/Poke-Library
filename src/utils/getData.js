const API = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async (name) => {

    let apiUrl = name ? `${API}${name}` : API;
    if(name >= 12) {
        apiUrl = name
    }

    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la petición: ", error)
    }
}


export default getData;




