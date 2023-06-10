import { ICategory } from '@/interfaces/ICategory'
import { IFreight } from '@/interfaces/IFreight'
import { IState } from '@/interfaces/IState'

type SettingFreightProps = {
  states: IState[]
  categories: ICategory[]
  freight: IFreight[]
  selectedCategory: number
  setSelectedCategory: (tab: number) => void
}

export default function SettingFreight({ states, categories, freight, selectedCategory, setSelectedCategory }: SettingFreightProps) {

  return (
    <>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow flex flex-wrap lg:flex-nowrap w-full">
          {categories.map((category) => (
            <li key={category.id} className="w-full">
              <a
                href="#"
                className={`inline-block w-full p-4 ${selectedCategory === category.id ? 'bg-gray-100 active' : 'bg-white hover:text-gray-700 hover:bg-gray-50 '} focus:outline-none`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>

        {states.map((state) => (
          <div key={state.id} className="flex flex-col w-full lg:6/12 xl:w-4/12 gap-2 items-center md:px-2 md:-mx-2">
            <div className="w-full pl-2">
              <label htmlFor={`value[${state}][1]`} className="text-gray-500 text-sm">
                {state.name} - {state.uf}
              </label>
            </div>
            <div className="w-full flex flex-row gap-2 flex-wrap">
              <input
                type="text"
                placeholder="1 Item"
                className="border border-gray-300 w-[70px] rounded-lg box px-3 py-2"
                defaultValue={freight ? freight.filter(data => data.state === state.uf && data.category.id === selectedCategory)[0].oneItem : 0}
              />
              <input
                type="text"
                placeholder="2 Itens"
                className="border border-gray-300 w-[70px] rounded-lg box px-3 py-2"
                defaultValue={freight ? freight.filter(data => data.state === state.uf && data.category.id === selectedCategory)[0].twoItems : 0}
              />
              <input
                type="text"
                placeholder="3 Itens"
                className="border border-gray-300 w-[70px] rounded-lg box px-3 py-2"
                defaultValue={freight ? freight.filter(data => data.state === state.uf && data.category.id === selectedCategory)[0].threeItems : 0}
              />
              <input
                type="text"
                placeholder="4 Itens"
                className="border border-gray-300 w-[70px] rounded-lg box px-3 py-2"
                defaultValue={freight ? freight.filter(data => data.state === state.uf && data.category.id === selectedCategory)[0].fourItems : 0}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <button
          className={`rounded-xl h-10 px-3 border-2 border-primary font-bold 
          text-lg text-primary relative overflow-hidden inline-flex items-center 
          justify-evenly duration-300 hover:bg-primary hover:text-white transition-all`}
        >
          <span className="hidden md:block">Salvar</span>
        </button>
      </div>
    </>
  )
}
