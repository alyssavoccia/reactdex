import { useState } from "react";

function PokemonInfoTabs({ currentPokemon }) {
  const [openTab, setOpenTab] = useState(1);
  
  return (
    <>
      <ul className="flex mb-0 mx-2 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
        <li className="-mb-px mr-2 text-slate-500 last:mr-0 flex-auto text-center">
          <a className={
            "text-sm font-bold uppercase px-5 py-3 block leading-normal rounded-md hover:text-white hover:bg-slate-500 transition duration-200 ease-in-out " +
            (openTab === 1 && "bg-slate-500 text-white")
            }
            onClick={e => {
              e.preventDefault();
              setOpenTab(1);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            Stats
          </a>
        </li>
        <li className="-mb-px mr-2 text-slate-500 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-sm font-bold uppercase px-5 py-3 block leading-normal rounded-md hover:text-white hover:bg-slate-500 transition duration-200 ease-in-out " +
              (openTab === 2 && "bg-slate-500 text-white")
            }
            onClick={e => {
              e.preventDefault();
              setOpenTab(2);
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
          >
            Abilities
          </a>
        </li>
        <li className="-mb-px mr-2 text-slate-500 last:mr-0 flex-auto text-center">
          <a
            className={
              "text-sm font-bold uppercase px-5 py-3 block leading-normal rounded-md hover:text-white hover:bg-slate-500 transition duration-200 ease-in-out " +
              (openTab === 3 && "bg-slate-500 text-white")
            }
            onClick={e => {
              e.preventDefault();
              setOpenTab(3);
            }}
            data-toggle="tab"
            href="#link3"
            role="tablist"
          >
            Moves
          </a>
        </li>
      </ul>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded">
        <div className="px-4 py-5 flex-auto">
          <div className="tab-content tab-space">
            <div className={`${openTab === 1 ? "block" : "hidden"}`} id="link1">
              {currentPokemon.stats.map(stat => (
                <div className='mb-4' key={stat.stat.name}>
                  <div key={stat.stat.name} className="w-full bg-gray-200 rounded-full">
                    <div className="bg-slate-600 text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full" style={{width: `${stat.base_stat.toString()}%`}}> {stat.base_stat.toString()}</div>
                  </div> 
                  <p className='mt-0 uppercase text-sm'>{stat.stat.name.indexOf('-') >= 0 ? stat.stat.name.split('-').join(' ') : stat.stat.name}</p>
                </div>
              ))
              }
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <ul>
                {currentPokemon.abilities.map(ability => (
                  <li className="mt-2 uppercase">{ability.ability.name}</li>
                ))
                }
              </ul>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
            <ul class="flex flex-wrap gap-4">
              {currentPokemon.moves.map(move => (
                <li key={move.move.name} className='uppercase text-sm border-b border-slate-400'>{move.move.name.indexOf('-') >= 0 ? move.move.name.split('-').join(' ') : move.move.name}</li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonInfoTabs;