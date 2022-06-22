const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return {
        ...state,
        pokemon: action.payload
      }
    case 'ADD_POKEMON_SPECIES':
      return {
        ...state,
        pokemonSpecies: action.payload
      }
    case 'ADD_POKEMON_EVOLUTION':
      return {
        ...state,
        pokemonEvolution: action.payload
      }
    case 'ADD_POKEMON_MOVES':
      return {
        ...state,
        moves: action.payload
      }
    default:
      return state;
  }
};

export default pokemonReducer;