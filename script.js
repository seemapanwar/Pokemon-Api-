const poke_container = document.getElementById('poke_container');
const pokemons_number = 50;
const colors = {
	fire: '#DEFDE0',
	grass: '#FDDFDF',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#f8d5a3',
	bug: '#98d7a5',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const pokemon = await fetch(url).then((res)=>res.json());
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const weight= pokemon.weight;
    const moves = pokemon.moves.move;
		
    const color = colors[type];
	
	pokemonEl.style.backgroundColor = color;

	const pokeInnerHTML = `
       
        <div class="info">
            <span class="number">${pokemon.id
							.toString()
							.padStart(3, '0')}</span>
            <h3 class="name">${name}</h3>
            <h6 class="number">Weight:${weight}</h6>
            <h6 class="number">Moves:${moves}</h6>
        </div>
    `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

fetchPokemons();










