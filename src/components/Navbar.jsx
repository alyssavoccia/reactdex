import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import pokeball from '../assets/pokeball.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className='navbar'>
      <img className='navbarPokeball' src={pokeball} alt="Pokeball" />
      <img className='navbarLogo' src={logo} alt="ReactDex Logo" onClick={() => navigate('/')} />
    </nav>
  )
}

export default Navbar;