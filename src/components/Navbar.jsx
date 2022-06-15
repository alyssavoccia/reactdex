import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import pokeball from '../assets/pokeball.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <nav className='flex flex-wrap space-y-2 items-center justify-around py-4 overflow-hidden'>
        <img className='cursor-pointer' src={logo} alt="ReactDex Logo" onClick={() => navigate('/')} />
        <div className="flex px-2 gap-2 z-20">
          <input className='text-sm w-60 py-2 p-4 rounded-sm' type="text" placeholder="Search Pokemon" />
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 transition duration-150 ease-in-out text-sm">
            Generate Random Pokemon
          </button>
        </div>
      </nav>
      <img className='absolute top-[-.7rem] right-0 w-16 z-0' src={pokeball} alt="Pokeball" />
    </header>
  )
}

export default Navbar;