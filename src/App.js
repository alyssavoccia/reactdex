import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonContext from './context/PokemonContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import PokemonInfo from './pages/PokemonInfo';
import Locations from './pages/Locations';
import Berries from './pages/Berries';
import Moves from './pages/Moves';
import Abilities from './pages/Abilities';
import Items from './pages/Items';
import PokemonType from './pages/PokemonType';
import MoveInfo from './pages/MoveInfo';

function App() {
  const { dispatch } = useContext(PokemonContext);

  useEffect(() => {
    const pokemonList = [];
    const pokemonSpeciesList = [];
    const pokemonEvolutionList = [];

    const getAllPokemon = () => {
      for (let i = 1; i <= 151; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.ok && response.json())
        .then(data => {
          pokemonList.push(data);
          if (pokemonList.length === 151) {
            dispatch({ type: 'ADD_POKEMON', payload: pokemonList });
          }
        })
        .catch(error => console.log(error));
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
        .then(response => response.ok && response.json())
        .then(data => {
          pokemonSpeciesList.push(data);
          if (pokemonSpeciesList.length === 151) {
            dispatch({ type: 'ADD_POKEMON_SPECIES', payload: pokemonSpeciesList });
          }
        });
        fetch(`https://pokeapi.co/api/v2/evolution-chain/${i}/`)
        .then(response => response.ok && response.json())
        .then(data => {
          const evolutionChain = [];
          let evolutionData = data.chain;

          do {
            const numberOfEvolutions = evolutionData['evolves_to'].length;

            evolutionChain.push(evolutionData.species.name);

            if (numberOfEvolutions > 1) {
              for (let i = 1; i < numberOfEvolutions; i++) {
                evolutionChain.push(evolutionData.evolves_to[i].species.name);
              }
            }

            evolutionData = evolutionData['evolves_to'][0];
          } while (!!evolutionData && evolutionData.hasOwnProperty('evolves_to'));

          pokemonEvolutionList.push(evolutionChain);

          dispatch({ type: 'ADD_POKEMON_EVOLUTION', payload: pokemonEvolutionList});
        });
      }
    };

    const getMoves = () => {
      const moveList = [];
      for (let i = 1; i <= 165; i++) {
        fetch(`https://pokeapi.co/api/v2/move/${i}`)
        .then(response => response.ok && response.json())
        .then(data => {
          moveList.push(data);
          if (moveList.length === 165) {
            dispatch({ type: 'ADD_POKEMON_MOVES', payload: moveList });
          }
        })
        .catch(error => console.log(error));
      }
    };

    getAllPokemon();
    getMoves();
  }, [dispatch]);

  return (
    <div className="h-full text-gray-700">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon' element={<Pokemon />} />
        <Route path='/pokemon/:pokemonName' element={<PokemonInfo />} />
        <Route path='/pokemon/pokemon-type/:pokemonType' element={<PokemonType />} />
        <Route path='/locations' element={<Locations />} />
        <Route path='/berries' element={<Berries />} />
        <Route path='/moves' element={<Moves />} />
        <Route path='/moves/:pokemonName' element={<MoveInfo />} />
        <Route path='/abilities' element={<Abilities />} />
        <Route path='/items' element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;