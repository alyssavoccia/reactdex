import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';
import Spinner from '../components/Spinner';
import PokemonCard from '../components/PokemonCard';

function PokemonType() {
  const { pokemon } = useContext(PokemonContext);
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const pokemonPerPage = 20;
  const [pokemonList, setPokemonList] = useState([]);
  const [next, setNext] = useState(20);
  const pokemonTypeList = [];

  const loopWithSlice = () => {
    const toShow = pokemonTypeList.slice(
      pokemonList.length,
      pokemonList.length + pokemonPerPage
    );
    setPokemonList([...pokemonList, ...toShow]);
  };

  useEffect(() => {
    if (pokemon.length > 0) {
      // Sort pokemon so they are in order by id #
      pokemon.sort((a, b) => a.id - b.id);
      // Filter pokemon to selected type
      pokemon.forEach(pokemon => {
        pokemon.types.forEach(type => {
          type.type.name === params.pokemonType && pokemonTypeList.push(pokemon);
        });
      });
      // Set first 20 pokemon to be shown
      setPokemonList(pokemonTypeList.slice(0, pokemonPerPage));
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <PokemonCard key={pokemon.species.name + 1} pokemon={pokemon} />
        ))}
      </div>
      <button disabled={next >= pokemonTypeList ? true : false} className={`${next >= pokemonTypeList ? 'bg-gray-400 border-gray-600' : 'bg-red-500 border-red-600 hover:bg-red-600 hover:border-red-700'} text-white border-b-4 py-2 px-3 rounded-sm self-center mt-8`} onClick={handleShowMorePokemon}>Show More</button>
    </section>
  </main>
  )
}

export default PokemonType;