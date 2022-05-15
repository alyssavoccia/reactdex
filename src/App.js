import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonContext from './context/PokemonContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Locations from './pages/Locations';
import Berries from './pages/Berries';
import Pokemon from './pages/Pokemon';

function App() {
  const { dispatch } = useContext(PokemonContext);

  useEffect(() => {
    const pokemonList = [];
    const getAllPokemon = () => {
      for (let i = 1; i <= 151; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
          pokemonList.push(data);
          if (pokemonList.length <= 150) {
            dispatch({ type: 'ADD_POKEMON', payload: pokemonList });
          }
        });
      }
    }
    getAllPokemon();
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Pokedex />} />
        <Route path='/pokemon/:pokemonName' element={<Pokemon />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/berries' element={<Berries />} />
      </Routes>
    </div>
  );
}

export default App;