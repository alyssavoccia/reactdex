import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';

function Pokemon() {
  const { pokemon } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const pokemonPerPage = 20;
  const [pokemonList, setPokemonList] = useState([]);
  const [next, setNext] = useState(20);

  const pokemonTypeColors = {
    bug: "#A3CB38",
    dark: "#705848",
    dragon: "#8e44ad",
    electric: "#f1c40f",
    fairy: "#fd79a8",
    fighting: "#d63031",
    fire: "#e67e22",
    flying: "#a29bfe",
    grass: "#16a085",
    ground: "#fdcb6e",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95a5a6",
    poison: "#6c5ce7",
    psychic: "#e84393",
    rock: "#EAB543",
    steel: "#a5b1c2",
    water: "#3498db"
  };

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
    // UPDATE THIS
    return <h1>Loading</h1>
  }

  return (
    <main>
      <section className='flex flex-col container mt-8 mx-auto'>
        <div className="flex flex-wrap gap-8 justify-center max-w-[1300px] mx-auto">
          {pokemonList && pokemonList.map(pokemon => (
            <Link className='relative overflow-hidden shadow-lg' to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
              <div className='flex flex-col rounded-md w-[300px]' style={{background: `radial-gradient(circle at 50% 0%, ${pokemonTypeColors[pokemon.types[0].type.name]} 36%, #FFF 36%)`}}>
                <div>
                  <span className='flex items-center bg-gray-800 text-white font-light justify-center text-sm absolute top-2 left-2 h-8 w-8 rounded-full'>#{pokemon.id}</span>
                  <img className='mx-auto w-44' src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div>
                  <div className="flex gap-2 justify-center">
                    {pokemon.types.map((type, index) => (
                      <span key={index} className="rounded-xl text-white text-xs py-1 px-2 uppercase" style={{backgroundColor: `${pokemonTypeColors[pokemon.types[index].type.name]}`}}>{type.type.name}</span>
                    ))}
                  </div>
                  <p className="text-lg text-center mt-4">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out bg-slate-500 rounded-md"></div>
            </Link>
          ))}
        </div>
        <button className='bg-red-500 text-white border-b-4 border-red-600 hover:bg-red-600 hover:border-red-700 py-2 px-3 rounded-sm self-center mt-8' onClick={handleShowMorePokemon}>Show More</button>
      </section>
    </main>
  )
}

export default Pokemon;