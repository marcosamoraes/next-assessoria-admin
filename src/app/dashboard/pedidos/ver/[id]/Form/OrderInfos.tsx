import { IOrder } from '@/interfaces/IOrder'

export default function OrderInfos({ order }: { order: IOrder | null }) {
  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
      <div className="bg-white px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="firstname" className="text-gray-500 text-sm mb-2">
            Nome
          </label>
          <input type="text" name="firstname" id="firstname" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="lastname" className="text-gray-500 text-sm mb-2">
            Sobrenome
          </label>
          <input type="text" name="lastname" id="lastname" placeholder="Sobrenome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="document" className="text-gray-500 text-sm mb-2">
            Documento (CPF/CNPJ)
          </label>
          <input type="text" name="document" id="document" placeholder="Documento (CPF/CNPJ)" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="whatsapp" className="text-gray-500 text-sm mb-2">
            Whatsapp
          </label>
          <input type="text" name="whatsapp" id="whatsapp" placeholder="Whatsapp" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
      </div>
    </div>
  )
}
