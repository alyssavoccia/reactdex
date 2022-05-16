import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../../context/PokemonContext';
import './pokemonInfo.scss';

function Pokemon() {
  const { pokemon, pokemonSpecies } = useContext(PokemonContext);
  const params = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonSpecies, setCurrentPokemonSpecies] = useState(null);
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


    if (pokemon && pokemonSpecies) {
      pokemon.forEach(pokemon => params.pokemonName === pokemon.name && setCurrentPokemon(pokemon));
      pokemonSpecies.forEach(pokemon => params.pokemonName === pokemon.name && setCurrentPokemonSpecies(pokemon));
    }

    if (currentPokemon && currentPokemonSpecies) {
      setCurrentHeight(getHeight());
      setCurrentWeight(getWeight());
    }
  }, [currentPokemon, currentPokemonSpecies, params, pokemon, pokemonSpecies]);

  if (!currentPokemon) {
    return <h1>Loading</h1>
  }

  console.log(currentPokemon)
  console.log(currentPokemonSpecies)

  return (
    <main>
      <section className="pokemon container">
        <div className="pokemonInfo">
          <div className="leftSide">
            <img className='pokemonInfoImg' src={currentPokemon.sprites.front_default} alt={currentPokemon.name} />
          </div>
          <div className="rightSide">
            <p className="pokemonInfoName">{currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1)}</p>
            <div className="pokeTypes pokemonInfoTypes">
              {currentPokemon.types.map((type, index) => (
                <span key={index} className='pokeType' style={{backgroundColor: `${pokemonTypeColors[type.type.name]}`}}>{type.type.name}</span>
              ))}
            </div>
            <p className="pokemonInfoText">{currentPokemonSpecies.flavor_text_entries[0].flavor_text}</p>
            <div className="pokemonBasicInfo">
              <div className="pokemonCharacteristic">
                <p className="basicInfoLabel">Height</p>
                <p className="basicInfoText">{currentHeight}</p>
              </div>
              <div className="pokemonCharacteristic">
                <p className="basicInfoLabel">Weight</p>
                <p className="basicInfoText">{currentWeight}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Pokemon;