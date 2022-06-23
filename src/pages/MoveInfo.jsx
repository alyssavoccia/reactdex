import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonContext from '../context/PokemonContext';
import Spinner from '../components/Spinner';
import PokemonCard from '../components/PokemonCard';

function MoveInfo() {
  const { moves, pokemon } = useContext(PokemonContext);
  const [currentMove, setCurrentMove] = useState(null);
  const params = useParams();

  useEffect(() => {
    if (moves) {
      moves.forEach(move => params.moveName === move.name && setCurrentMove(move));
    }

  }, [moves, params.moveName]);

  const moveCapitalName = (moveName) => {
    if (moveName.includes('-')) {
      return moveName.split('-').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
    } else {
      return moveName[0].toUpperCase() + moveName.slice(1);
    }
  };

  const moveTypeColors = {
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

  if (!currentMove) {
    return <Spinner />
  }

  return (
    <main className='max-w-[95%] mx-auto mb-8'>
      <section className="container my-8 mx-auto max-w-3xl">
        <div className="p-8 bg-white rounded-md shadow-md max-w-[630px] mx-auto">
          {console.log(currentMove)}
          <div className='flex items-center'>
            <h1 className='text-slate-600 text-2xl font-bold'>{moveCapitalName(currentMove.name)}</h1>
            <span className='ml-4 text-white text-xs px-2 py-1 rounded-full uppercase font-light tracking-wide text-center' style={{backgroundColor: `${moveTypeColors[currentMove.type.name]}`}}>Normal</span>
          </div>
          <p className='mt-2 font-light'>{currentMove.flavor_text_entries[2].flavor_text.replace(/\n/g, ' ')}</p>
          <div className='mt-8 flex flex-wrap gap-8'>
            <div className='text-center'>
              <p>Accuracy</p>
              <p>{currentMove.accuracy}</p>
            </div>
            <div className='text-center'>
              <p>Damage Class</p>
              <p>{currentMove.damage_class.name[0].toUpperCase() + currentMove.damage_class.name.slice(1)}</p>
            </div>
            <div className='text-center'>
              <p>Generation</p>
              <p>{currentMove.generation.name[0].toUpperCase() + currentMove.generation.name.slice(1).replace('-', ' ')}</p>
            </div>
          </div>
        </div>
        <p className='text-center mt-8 bg-slate-600 text-white max-w-[630px] rounded-md shadow-md mx-auto py-4'>Learned By</p>
        <div className='flex flex-wrap gap-8 mt-4 justify-center'>
          {currentMove.learned_by_pokemon.map(movePokemon => (
            pokemon.map(pokemon => (
              movePokemon.name === pokemon.name && <PokemonCard pokemon={pokemon} key={pokemon.name} />
            ))
          ))}
        </div>
      </section>
    </main>
  )
}

export default MoveInfo;