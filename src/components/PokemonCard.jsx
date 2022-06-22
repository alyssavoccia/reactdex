import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
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

  return (
    <Link className='relative overflow-hidden shadow-md hover:shadow-lg' to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
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
          <p className="text-lg text-center my-4">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard;