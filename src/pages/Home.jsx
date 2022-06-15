import { Link } from 'react-router-dom';
import pokemonIcon from '../assets/pokemonIcon.png';
import mapIcon from '../assets/mapIcon.png';
import berryIcon from '../assets/berryIcon.png';
import movesIcon from '../assets/movesIcon.png';
import abilitiesIcon from '../assets/abilitiesIcon.png';
import itemsIcon from '../assets/itemsIcon.png';

function Home() {
  return (
    <main>
      <section className="mt-14">
        <div className="sm:container mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link className="flex items-center rounded-sm shadow-md py-2 px-4 relative overflow-hidden h-16 w-64 transition duration-200 ease-in-out hover:opacity-90 bg-gradient-to-r from-red-600 to-red-500" to='/pokemon'>
              <p className="text-white font-bold text-md">Pokemon</p>
              <img className='absolute right-[-1.5rem] opacity-60 h-24 w-24' src={pokemonIcon} alt='Pokeball' />
            </Link>
            <Link className="flex items-center rounded-sm shadow-md py-2 px-4 relative overflow-hidden h-16 w-64 transition duration-200 ease-in-out hover:opacity-90 bg-gradient-to-r from-emerald-600 to-emerald-500" to='/locations'>
              <p className="text-white font-bold text-md">Locations</p>
              <img className='absolute right-[-1.5rem] opacity-60 h-24 w-24' src={mapIcon} alt='Pokemon map icon' />
            </Link>
            <Link className="flex items-center rounded-sm shadow-md py-2 px-4 relative overflow-hidden h-16 w-64 transition duration-200 ease-in-out hover:opacity-90 bg-gradient-to-r from-violet-600 to-violet-500" to='/berries'>
              <p className="text-white font-bold text-md">Berries</p>
              <img className='absolute right-[-1.5rem] opacity-60 h-24 w-24' src={berryIcon} alt='Berry icon' />
            </Link>
            <Link className="flex items-center rounded-sm shadow-md py-2 px-4 relative overflow-hidden h-16 w-64 transition duration-200 ease-in-out hover:opacity-90 bg-gradient-to-r from-orange-600 to-orange-500" to='/moves'>
              <p className="text-white font-bold text-md">Moves</p>
              <img className='absolute right-[-1.5rem] opacity-60 h-24 w-24' src={movesIcon} alt='Berry icon' />
            </Link>
            <Link className="flex items-center rounded-sm shadow-md py-2 px-4 relative overflow-hidden h-16 w-64 transition duration-200 ease-in-out hover:opacity-90 bg-gradient-to-r from-yellow-600 to-yellow-500" to='/abilities'>
              <p className="text-white font-bold text-md">Abilities</p>
              <img className='absolute right-[-1.5rem] opacity-60 h-24 w-24' src={abilitiesIcon} alt='Berry icon' />
            </Link>
            <Link className="flex items-center rounded-sm shadow-md py-2 px-4 relative overflow-hidden h-16 w-64 transition duration-200 ease-in-out hover:opacity-90 bg-gradient-to-r from-blue-600 to-blue-500" to='/items'>
              <p className="text-white font-bold text-md">Items</p>
              <img className='absolute right-[-1.5rem] opacity-60 h-24 w-24' src={itemsIcon} alt='Berry icon' />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;