import { createContext, useReducer } from "react";
import pokemonReducer from './pokemonReducer';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const initialState = {
    pokemon: [],
    pokemonSpecies: [],
    pokemonEvolution: []
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  return (
    <PokemonContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
};

export default PokemonContext;