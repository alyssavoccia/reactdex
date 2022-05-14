import { useState, useContext, useEffect } from 'react'
import PokemonContext from '../context/PokemonContext';

function Home() {
  const { pokemon } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const pokemonPerPage = 20;
  const [pokemonList, setPokemonList] = useState([]);
  const [next, setNext] = useState(20);

  const pokemonTypeColors = {
    bug: "#A3CB38",
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
      <section className='pokemonContainer'>
        <div className="pokemonCardContainer">
          {pokemonList && pokemonList.map(pokemon => (
            <div className='pokemonCard' key={pokemon.name} style={{background: `radial-gradient(circle at 50% 0%, ${pokemonTypeColors[pokemon.types[0].type.name]} 36%, #FFF 36%)`}}>
              <div className="cardHeader">
                <span className='pokemonId'>#{pokemon.id}</span>
                <img className='pokemonImg' src={pokemon.sprites.front_default} alt={pokemon.name} />
              </div>
              <div className="cardBody">
                <div className="pokeTypes">
                  {pokemon.types.map((type, index) => (
                    <span key={index} className="pokeType" style={{backgroundColor: `${pokemonTypeColors[pokemon.types[index].type.name]}`}}>{type.type.name}</span>
                  ))}
                </div>
                <p className="pokeName">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='btn btnPrimary showMore' onClick={handleShowMorePokemon}>Show More</button>
      </section>
    </main>
  )
}

export default Home;