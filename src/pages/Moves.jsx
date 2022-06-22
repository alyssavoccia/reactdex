import { useState, useContext, useEffect } from 'react';
import PokemonContext from '../context/PokemonContext';
import Spinner from '../components/Spinner';
import MoveCard from '../components/MoveCard';

function Moves() {
  const { moves } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const movesPerPage = 20;
  const [next, setNext] = useState(20);
  const [movesList, setMovesList] = useState([]);

  const loopWithSlice = () => {
    const toShow = moves.slice(
      movesList.length,
      movesList.length + movesPerPage
    );
    setMovesList([...movesList, ...toShow]);
  };

  useEffect(() => {
    if (moves.length > 0) {
      // Sort pokemon so they are in order by id #
      moves.sort((a, b) => a.id - b.id);
      // Set first 20 pokemon to be shown
      setMovesList(moves.slice(0, movesPerPage));
      setLoading(false);
    }
  }, [moves]);

  const handleShowMoreMoves = () => {
    let loadedMore = next + movesPerPage;
    loopWithSlice(next, loadedMore);
    setNext(next + movesPerPage);
  };

  if (loading) {
    return <Spinner />
  }

  return (
    <main className='mb-8'>
      <section className='flex flex-col container  max-w-[1300px] mt-8 mx-auto'>
        <input className='text-sm w-72 py-2 p-4 mb-8 rounded-sm focus:outline-none self-center' type="text" placeholder="Search Moves" />
        <div className="flex flex-wrap gap-8 justify-center mx-auto">
          {movesList.map(move => (
            <MoveCard key={move.name} move={move} />
          ))}
        </div>
        <button className='bg-red-500 text-white border-b-4 border-red-600 hover:bg-red-600 hover:border-red-700 py-2 px-3 rounded-sm self-center mt-8' onClick={handleShowMoreMoves}>Show More</button>
      </section>
    </main>
  )
}

export default Moves;