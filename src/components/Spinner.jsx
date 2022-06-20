import pokeball from '../assets/redPokeball.png';

function Spinner() {
  return (
  <div className="flex min-h-screen justify-center items-center">
    <div className="spinner-border w-20 h-20 animate-spin inline-block border-4 rounded-full" role="status">
      <img src={pokeball} alt='Pokeball loading spinner' />
    </div>
  </div>
  )
}

export default Spinner;