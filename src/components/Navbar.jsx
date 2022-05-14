import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import pokeball from '../assets/pokeball.png';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <nav className='navbar'>
        <img className='navbarPokeball' src={pokeball} alt="Pokeball" />
        <img className='navbarLogo' src={logo} alt="ReactDex Logo" onClick={() => navigate('/')} />
      </nav>
      <section className="searchPokemon">
        <div className="inputFields">
          <input type="text" placeholder="Search Pokemon" />
          <button className="btn btnPrimary">Generate Random Pokemon</button>
        </div>
      </section>
    </header>
  )
}

export default Navbar;