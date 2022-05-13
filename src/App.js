import { useEffect, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonContext from './context/PokemonContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const { dispatch } = useContext(PokemonContext);

  useEffect(() => {
    // Get all pokemon and save to state
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
      </Routes>
    </div>
  );
}

export default App;