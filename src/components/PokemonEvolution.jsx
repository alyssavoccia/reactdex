import { Link } from 'react-router-dom';

function PokemonEvolution({ currentPokemon, pokemon, evolutionChain }) {
  const pokemonChain = [];

  pokemon.forEach(pokemon => {
    if (evolutionChain.includes(pokemon.species.name)) {
      pokemonChain.push({
        name: pokemon.species.name,
        sprite: pokemon.sprites.front_default
      });
    }
  });

  return (
    <>
      <p className="mb-4 text-2xl text-slate-500 font-bold">Evolution Chain</p>
      <ol className="md:flex md:justify-center text-center md:gap-6">
        {pokemonChain.map(pokemon => (
          <li key={pokemon.name} className={`${currentPokemon.species.name === pokemon.name ? 'text-slate-700' : 'text-slate-400'} hover:text-slate-700`}>
            <Link to={`/pokemon/${pokemon.name}`} className="flex flex-col mt-0.5 ml-4 md:ml-0 pb-5 items-center">
              <h4 className={`font-semibold text-xl mb-1.5`}>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h4>
              <img className='w-40' src={pokemon.sprite} alt={`${pokemon.name}`} />
            </Link>
          </li>
        ))}
      </ol>
    </>
  )
}

export default PokemonEvolution;