import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PokemonEvolution from '../components/PokemonEvolution';
import PokemonInfoTabs from '../components/PokemonInfoTabs';
import PokemonContext from '../context/PokemonContext';

function PokemonInfo() {
  const { pokemon, pokemonSpecies, pokemonEvolution } = useContext(PokemonContext);
  const params = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonSpecies, setCurrentPokemonSpecies] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');

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

  useEffect(() => {
    const getHeight = () => {
      const inches = currentPokemon.height * 3.937;
      const feet = Math.floor(inches / 12);
      const inchesLeft = Math.ceil(inches % 12);
      return `${feet}' ${inchesLeft}"`;
    };

    const getWeight = () => {
      const pounds = (currentPokemon.weight / 4.536).toFixed(1);
      return `${pounds} lbs`
    };


    if (pokemon && pokemonSpecies && pokemonEvolution) {
      pokemon.forEach(pokemon => params.pokemonName === pokemon.name && setCurrentPokemon(pokemon));

      pokemonSpecies.forEach(pokemon => params.pokemonName === pokemon.name && setCurrentPokemonSpecies(pokemon));

      pokemonEvolution.forEach(pokemonGroup => {
        pokemonGroup.forEach(pokemon => {
          if (params.pokemonName === pokemon) {
            setEvolutionChain(pokemonGroup);
          }
        });
      });
    }

    if (currentPokemon && currentPokemonSpecies && pokemonEvolution) {
      setCurrentHeight(getHeight());
      setCurrentWeight(getWeight());
    }
  }, [currentPokemon, currentPokemonSpecies, params, pokemon, pokemonSpecies, pokemonEvolution]);

  if (!currentPokemon) {
    // UPDATE THIS
    return <h1>Loading</h1>
  }

  return (
    <main className='w-[95%] mx-auto mb-8'>
      <section className="container my-8 mx-auto max-w-3xl">
        <Link className='bg-red-500 text-white border-b-4 border-red-600 hover:bg-red-600 hover:border-red-700 py-2 px-3 rounded-sm self-center' to='/pokemon'>{'\u2190'} Back to All Pokemon</Link>
        <div className="flex flex-wrap gap-8 justify-center mt-8">
          <div className="bg-slate-300 rounded-md leftSide shadow-md">
            <img className='w-[250px]' src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
          </div>
          <div className="flex flex-col flex-1 py-4 px-4 bg-white rounded-md max-w-[500px] shadow-md">
            <p className="font-bold text-2xl">{currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1)}</p>
            <div className="flex gap-2 mt-2">
              {currentPokemon.types.map((type, index) => (
                <span key={index} className='rounded-xl text-white text-xs py-1 px-2 uppercase' style={{backgroundColor: `${pokemonTypeColors[type.type.name]}`}}>{type.type.name}</span>
              ))}
            </div>
            <p className="mt-5">{currentPokemonSpecies.flavor_text_entries[0].flavor_text}</p>
            <div className="flex gap-4 mt-4 text-center">
              <div className="flex flex-col">
                <p className="font-light">Height</p>
                <p className="font-bold">{currentHeight}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-light">Weight</p>
                <p className="font-bold">{currentWeight}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md mt-8'>
          <PokemonInfoTabs currentPokemon={currentPokemon} currentPokemonSpecies={currentPokemonSpecies} />
        </div>
        <div className='bg-white shadow-md rounded-md mt-8 p-4'>
          <PokemonEvolution currentPokemon={currentPokemon}  pokemonEvolution={pokemonEvolution} pokemon={pokemon} evolutionChain={evolutionChain} />
        </div>
      </section>
    </main>
  )
}

export default PokemonInfo;