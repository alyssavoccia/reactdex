import { useState, useEffect } from 'react';

function PokemonEvolution({ currentPokemon, currentPokemonEvolution, pokemonEvolution, pokemon }) {
  const [allEvolutionChains, setAllEvolutionChains] = useState([]);

  useEffect(() => {
    const createEvolutionChain = () => {
      pokemonEvolution.forEach(pokemon => {
        const currentEvolutionChain = [];
        let evolutionData = pokemon.chain;
        console.log(evolutionData.evolves_to.length)
        if (evolutionData.evolves_to.length > 0) {
          do {
            let numberOfEvolutions = evolutionData.evovles_to.length;

            currentEvolutionChain.push(evolutionData.species.name);

            if (numberOfEvolutions > 1) {
              for (let i = 0; i < numberOfEvolutions; i++) {
                currentEvolutionChain.push(evolutionData.evovles_to[i].species.name);
              }
            }

            // evolutionData = evolutionData['evovles_to'][0];
          } while (!!evolutionData && evolutionData.hasOwnProperty('evolves_to'));
        }
      });
    };

    pokemonEvolution && createEvolutionChain();
  }, []);

  console.log(pokemonEvolution)

  return (
    <>
      <p className="mb-4 text-2xl text-slate-500 font-bold">Evolution Chain</p>
      <ol className="border-l md:border-l-0 md:border-t border-gray-300 md:flex md:justify-center md:gap-6">
        <li>
          <div className="flex md:block flex-start items-center pt-2 md:pt-0">
            <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
          </div>
          <div className="mt-0.5 ml-4 md:ml-0 pb-5">
            <h4 className="text-slate-700 font-semibold text-xl mb-1.5">Title of section 1</h4>
            <p className="text-gray-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare. Maecenas placerat facilisis mollis. Duis sagittis ligula in sodales vehicula.</p>
          </div>
        </li>
        <li>
          <div className="flex md:block flex-start items-center pt-2 md:pt-0">
            <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
          </div>
          <div className="mt-0.5 ml-4 md:ml-0 pb-5">
            <h4 className="text-slate-700 font-semibold text-xl mb-1.5">Title of section 2</h4>
            <p className="text-gray-500 mb-3">Libero expedita explicabo eius fugiat quia aspernatur autem laudantium error architecto recusandae natus sapiente sit nam eaque, consectetur porro molestiae ipsam an deleniti.</p>
          </div>
        </li>
        <li>
          <div className="flex md:block flex-start items-center pt-2 md:pt-0">
            <div className="bg-gray-300 w-2 h-2 rounded-full -ml-1 md:ml-0 mr-3 md:mr-0 md:-mt-1"></div>
          </div>
          <div className="mt-0.5 ml-4 md:ml-0 pb-5">
            <h4 className="text-slate-700 font-semibold text-xl mb-1.5">Title of section 3</h4>
            <p className="text-gray-500 mb-3">Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit natus! Eum corporis illum nihil officiis tempore. Excepturi illo natus libero sit doloremque, laborum molestias rerum pariatur quam ipsam necessitatibus incidunt, explicabo.</p>
          </div>
        </li>
      </ol>
    </>
  )
}

export default PokemonEvolution;