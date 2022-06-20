import { useState, useContext, useEffect } from 'react';
import PokemonContext from '../context/PokemonContext';
import Spinner from '../components/Spinner';
import PokemonCard from '../components/PokemonCard';

function Pokemon() {
  const { pokemon } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const pokemonPerPage = 20;
  const [pokemonList, setPokemonList] = useState([]);
  const [next, setNext] = useState(20);

  const loopWithSlice = () => {
    const toShow = pokemon.slice(
      pokemonList.length,
      pokemonList.length + pokemonPerPage
    );
    setPokemonList([...pokemonList, ...toShow]);
  };

  useEffect(() => {
    if (pokemon.length > 0) {
      // Sort pokemon so they are in order by id #
      pokemon.sort((a, b) => a.id - b.id);
      // Set first 20 pokemon to be shown
      setPokemonList(pokemon.slice(0, pokemonPerPage));
      setLoading(false);
    }
  }, [pokemon]);

  const handleShowMorePokemon = () => {
    let loadedMore = next + pokemonPerPage;
    loopWithSlice(next, loadedMore);
    setNext(next + pokemonPerPage);
  };

  if (loading) {
    return <Spinner />
  }

  return (
    <main className='mb-8'>
      <section className='flex flex-col container mt-8 mx-auto'>
        <div className="flex flex-wrap gap-8 justify-center max-w-[1300px] mx-auto">
          {pokemonList && pokemonList.map(pokemon => (
            <PokemonCard key={pokemon.species.name} pokemon={pokemon} />
          ))}
        </div>
        <button className='bg-red-500 text-white border-b-4 border-red-600 hover:bg-red-600 hover:border-red-700 py-2 px-3 rounded-sm self-center mt-8' onClick={handleShowMorePokemon}>Show More</button>
      </section>
    </main>
  )
}

export default Pokemon;