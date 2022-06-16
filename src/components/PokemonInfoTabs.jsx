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
            Weaknesses
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
                  <p className='mt-0 uppercase text-sm'>{stat.stat.name}</p>
                </div>
              ))
              }
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <p>
                Weaknesses
              </p>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <p>
                Moves
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonInfoTabs;