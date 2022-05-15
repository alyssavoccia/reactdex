import { Link } from 'react-router-dom';
import pokeball from '../assets/pokeball.png';
import mapIcon from '../assets/mapIcon.png';
import berryIcon from '../assets/berryIcon.png';
import movesIcon from '../assets/movesIcon.png';
import abilitiesIcon from '../assets/abilitiesIcon.png';
import itemsIcon from '../assets/itemsIcon.png';

function Home() {
  return (
    <main>
      <section className="home">
        <div className="container">
          <div className="optionsContainer">
            <Link className="option optionPokemon" to='/pokemon'>
              <p className="optionTitle">Pokemon</p>
              <img className='optionImg' src={pokeball} alt='Pokeball' />
            </Link>
            <Link className="option optionLocations" to='/locations'>
              <p className="optionTitle">Locations</p>
              <img className='optionImg' src={mapIcon} alt='Pokemon map icon' />
            </Link>
            <Link className="option optionBerries" to='/berries'>
              <p className="optionTitle">Berries</p>
              <img className='optionImg' src={berryIcon} alt='Berry icon' />
            </Link>
            <Link className="option optionMoves" to='/berries'>
              <p className="optionTitle">Moves</p>
              <img className='optionImg' src={movesIcon} alt='Berry icon' />
            </Link>
            <Link className="option optionAbilities" to='/berries'>
              <p className="optionTitle">Abilities</p>
              <img className='optionImg' src={abilitiesIcon} alt='Berry icon' />
            </Link>
            <Link className="option optionItems" to='/berries'>
              <p className="optionTitle">Items</p>
              <img className='optionImg' src={itemsIcon} alt='Berry icon' />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;