import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';

function Pokemon() {
  const { pokemon } = useContext(PokemonContext);
  const params = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    if (pokemon) {
      pokemon.forEach(pokemon => (
        params.pokemonName === pokemon.name && setCurrentPokemon(pokemon)
      ));
    }
  }, [params, pokemon]);

  if (!currentPokemon) {
    return <h1>Loading</h1>
  }

  console.log(currentPokemon)

  return (
    <main>
      <section className="pokemon">
        <div className="pokemonGeneralInfo">
          <div className="leftSide">
          <img className='pokemonImg' src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
          </div>
          <div className="rightSide">

          </div>
        </div>
      </section>
    </main>
  )
}

export default Pokemon;