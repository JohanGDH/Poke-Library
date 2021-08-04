import getPokemons from '../utils/getData';

const Home = async () => {
    const pokemons = await getPokemons();
    const view = `
    <div class="pokemons">
        ${pokemons.results.map(pokemon => `
            <article class="pokemon-item">
                <h2>${pokemon.name}</h2>
            </article>        
        
        `).join('')}

    </div>`
    return view;
}

export default Home;