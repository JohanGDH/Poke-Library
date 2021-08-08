import getData from '../utils/getData';
import getPokemons from '../utils/getPokemons'


const Home = async () => {
    
    const data = await getData();    
    let pokemons = await getPokemons(data);
    
     const view = `
     <article>
        <div>
           
            ${pokemons.map(pokemon => `
                <a href="#/${pokemon.name}">
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.sprites.front_default}">
                </a>
            `).join('')}
            
        </div>
     </article>
     `
    
    return view;    
}

export default Home;