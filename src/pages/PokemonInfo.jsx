import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';

function PokemonInfo() {
  const { pokemon, pokemonSpecies } = useContext(PokemonContext);
  const params = useParams();
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [currentPokemonSpecies, setCurrentPokemonSpecies] = useState(null);
  const [currentHeight, setCurrentHeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [openTab, setOpenTab] = useState(1);

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
      <section className="container mt-8 mx-auto max-w-3xl">
        <div className="flex flex-wrap gap-8 justify-center">
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
          <ul className="flex mb-0 mx-2 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
            <li className="-mb-px mr-2 text-slate-500 last:mr-0 flex-auto text-center">
              <a className={
                  "text-sm font-bold uppercase px-5 py-3 block leading-normal rounded-md hover:text-white hover:bg-slate-500 transition duration-200 ease-in-out " +
                  (openTab === 1 && "bg-slate-500 text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Stats
              </a>
            </li>
            <li className="-mb-px mr-2 text-slate-500 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-3 block leading-normal rounded-md hover:text-white hover:bg-slate-500 transition duration-200 ease-in-out " +
                  (openTab === 2 && "bg-slate-500 text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Weaknesses
              </a>
            </li>
            <li className="-mb-px mr-2 text-slate-500 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-sm font-bold uppercase px-5 py-3 block leading-normal rounded-md hover:text-white hover:bg-slate-500 transition duration-200 ease-in-out " +
                  (openTab === 3 && "bg-slate-500 text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Moves
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={`${openTab === 1 ? "block" : "hidden"}`} id="link1">
                  {currentPokemon.stats.map(stat => (
                    <div className='mb-4'>
                      <div key={stat.stat.name} class="w-full bg-gray-200 rounded-full">
                        <div className="bg-slate-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full" style={{width: `${stat.base_stat.toString()}%`}}> {stat.base_stat.toString()}%</div>
                      </div> 
                      <p className='mt-0 uppercase text-sm'>{stat.stat.name}</p>
                    </div>
                  ))
                  }
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Weaknesses
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Moves
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PokemonInfo;