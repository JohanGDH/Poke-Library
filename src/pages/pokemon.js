import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Pokemon = async () => {
    const name = getHash();
    const pokemon = await getData(name);
    
    if(pokemon) {
        const view = `
        <div class="pokemon-inner">
            <article class="pokemon-card">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h2>${pokemon.name.toUpperCase()}</h2>
                
                ${pokemon.stats.map(stat => `
                    <h3>${stat.stat.name.toUpperCase()}: ${stat.base_stat}</h3></li>
                `).join('')}
                
                <a href="https://johangdh.github.io/Poke-Library">Atrás</a>
            </article>
        </div>
    `;
        return view;
    } else {
        location.assign('#/404')
    }    
}

export default Pokemon;
