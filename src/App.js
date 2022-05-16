import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonContext from './context/PokemonContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pokedex from './pages/Pokemon';
import Pokemon from './pages/PokemonInfo';
import Locations from './pages/Locations';
import Berries from './pages/Berries';
import Moves from './pages/Moves';
import Abilities from './pages/Abilities';
import Items from './pages/Items';

function App() {
  const { dispatch } = useContext(PokemonContext);

  useEffect(() => {
    const pokemonList = [];
    const pokemonSpeciesList = [];
    const getAllPokemon = () => {
      for (let i = 1; i <= 151; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
          pokemonList.push(data);
          if (pokemonList.length <= 151) {
            dispatch({ type: 'ADD_POKEMON', payload: pokemonList });
          }
        });
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
        .then(response => response.json())
        .then(data => {
          pokemonSpeciesList.push(data);
          if (pokemonSpeciesList.length <= 151) {
            dispatch({ type: 'ADD_POKEMON_SPECIES', payload: pokemonSpeciesList });
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
        <Route path='/moves' element={<Moves />} />
        <Route path='/abilities' element={<Abilities />} />
        <Route path='/items' element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;