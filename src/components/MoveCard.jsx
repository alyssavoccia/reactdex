function MoveCard({ move }) {
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

  const moveCapitalName = () => {
    if (move.name.includes('-')) {
      return move.name.split('-').map((word) => word[0].toUpperCase() + word.substring(1)).join(' ');
    } else {
      return move.name[0].toUpperCase() + move.name.slice(1);
    }
  };

  return (
    <div className="flex flex-col bg-white items-center px-4 py-4 rounded-md w-52 shadow-md hover:shadow-lg cursor-pointer">
      <span className={`text-white text-xs px-2 rounded-full uppercase font-light tracking-wide text-center self-end`} style={{backgroundColor: `${moveTypeColors[move.type.name]}`}}>{move.type.name}</span>
      <p className="mt-4 font-bold text-slate-500">{moveCapitalName()}</p>
      <p><span className="font-semibold">Power: </span>{move.power ? move.power : 'N/A'}</p>
      <p><span className="font-semibold">Power Points: </span>{move.pp ? move.pp : 'N/A'}</p>
    </div>
  )
}

export default MoveCard;