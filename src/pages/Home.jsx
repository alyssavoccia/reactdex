import { useState, useContext, useEffect } from 'react'
import PokemonContext from '../context/PokemonContext';

function Home() {
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
    return <h1>Loading</h1>
  }

  console.log(pokemon[0])


  return (
    <main>
      <section className="searchPokemon">
        <div className="inputFields">
          <input type="text" placeholder="Search Pokemon" />
          <button className="btn btnPrimary">Generate Random Pokemon</button>
        </div>
      </section>
      <section>
        <div className="pokemonListContainer">
          {pokemonList && pokemonList.map(pokemon => (
            <div className="pokemonCard" key={pokemon.id}>
              <div className="cardHeader">
                <span>#{pokemon.id}</span>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <div className="cardBody">
                <div className="pokeTypes">
                  {pokemon.types.map(type => (
                    <span className="pokeType">{type.type.name}</span>
                  ))}
                </div>
                <p className="pokeName">{pokemon.name}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='btn btnPrimary' onClick={handleShowMorePokemon}>Show More</button>
      </section>
    </main>
  )
}

export default Home;