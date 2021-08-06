import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Pokemon = async () => {
    const name = getHash();
    const pokemon = await getData(name);

    const view = `
        <div class="pokemon-inner">
            <article class="pokemon-card">
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
                <ul>
                ${pokemon.stats.map(stat => `
                    <li>${stat.stat.name}-${stat.base_stat} </li>
                `).join('')}
                </ul>
                <a href="../">Atrás</a>
            </article>
        </div>
    `;

    return view;
}

export default Pokemon;
