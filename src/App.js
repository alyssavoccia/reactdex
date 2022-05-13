import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonContext from './context/PokemonContext';
import Home from './pages/Home';

function App() {
  const { dispatch } = useContext(PokemonContext);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'ADD_POKEMON', payload: data });
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;