import { IState } from '@/interfaces/IState'
import { ITax } from '@/interfaces/ITax'

type SettingTaxProps = {
  taxes: ITax[]
  states: IState[]
}
export default function SettingTax({ taxes, states }: SettingTaxProps) {
  return (
    <>
      <div>
        <div className="bg-white px-5 py-7 rounded-xl flex flex-wrap">
          {states.map((state) => (
            <div key={state.id} className="flex flex-col w-full lg:w-6/12 xl:w-3/12 gap-2 items-center">
              <div className="w-full pl-2">
                <label htmlFor={`value[${state}][1]`} className="text-gray-500 text-sm">
                  {state.name} - {state.uf}
                </label>
              </div>
              <div className="w-full flex flex-row gap-2">
                <div className="md:px-2 w-full md:w-6/12">
                  <input
                    type="text"
                    placeholder="Impostos"
                    className="border border-gray-300 w-full rounded-lg box px-3 py-2"
                    defaultValue={taxes.filter(tax => tax.state === state.uf)[0].tax}
                  />
                </div>
                <div className="md:px-2 w-full md:w-6/12">
                  <input
                    type="text"
                    placeholder="Valor (%)"
                    className="border border-gray-300 w-full rounded-lg box px-3 py-2"
                    defaultValue={taxes.filter(tax => tax.state === state.uf)[0].value}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
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
