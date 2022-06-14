import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import pokeball from '../assets/pokeball.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <nav className='flex flex-wrap space-y-2 items-center justify-around py-4'>
        <img className='cursor-pointer' src={logo} alt="ReactDex Logo" onClick={() => navigate('/')} />
        <div className="flex gap-2">
          <input type="text" placeholder="Search Pokemon" />
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 transition duration-150 ease-in-out">
            Generate Random Pokemon
          </button>
        </div>
      </nav>
      <img className='absolute top-[-.5rem] right-[-.5rem] w-14 z-[-1]' src={pokeball} alt="Pokeball" />
    </header>
  )
}

export default Navbar;