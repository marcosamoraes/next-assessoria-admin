import { IOrder } from '@/interfaces/IOrder'
import { LiaMapSolid } from 'react-icons/lia'

export default function OrderAddress({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Endereço</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">

        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            CEP
          </label>
          <p>{order?.zipcode}</p>
        </div>

        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Rua
          </label>
          <p>{order?.street}</p>
        </div>

        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Número
          </label>
          <p>{order?.number}</p>
        </div>

        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Complemento
          </label>
          <p>{order?.complement}</p>
        </div>

        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Bairro
          </label>
          <p>{order?.neighborhood}</p>
        </div>

        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Cidade
          </label>
          <p>{order?.city}/{order?.state}</p>
        </div>

        <a target="_blank" href={`https://www.google.com.br/maps/place/${order?.full_address}`} rel="noreferrer">
          <button
            className={`rounded-xl h-8 mt-3 px-2 border-2 border-primary font-bold text-primary relative overflow-hidden inline-flex items-center 
            justify-evenly duration-300 hover:bg-primary hover:text-white transition-all`}
            type="button"
          >
            <LiaMapSolid className="lg:mr-2" />
            <span className="lg:block">Ver no Google Maps</span>
          </button>
        </a>
      </div>
    </div>
  )
}
