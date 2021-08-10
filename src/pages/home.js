import randomsID from '../utils/randomIDs';
import getPokemons from '../utils/getPokemons'


const Home = async () => {

    const Ids = await randomsID(1,500,24)
    let pokemons = await getPokemons(Ids);

     const view = `
     <article class="pokemons">        
        ${pokemons.map(pokemon => `
            <div class ="pokemon-item">
                <a href="#/${pokemon.name}">                
                <img src="${pokemon.sprites.front_default}">
                <h2>${pokemon.name.toUpperCase()}</h2>
                </a>
            </div>
        `).join('')}        
     </article>
     `

    return view;
}

export default Home;