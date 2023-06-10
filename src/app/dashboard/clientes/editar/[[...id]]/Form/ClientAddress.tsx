import { IUser } from '@/interfaces/IUser'

export default function ClientAddress({ user }: { user: IUser | null }) {
  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Endereço</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="zipcode" className="text-gray-500 text-sm mb-2">
            CEP
          </label>
          <input type="text" name="zipcode" id="zipcode" placeholder="CEP" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-8/12 md:px-2 md:-mx-2">
          <label htmlFor="street" className="text-gray-500 text-sm mb-2">
            Rua
          </label>
          <input type="text" name="street" id="street" placeholder="Rua" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="number" className="text-gray-500 text-sm mb-2">
            Número
          </label>
          <input type="text" name="number" id="number" placeholder="Número" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="complement" className="text-gray-500 text-sm mb-2">
            Complemento
          </label>
          <input type="text" name="complement" id="complement" placeholder="Complemento" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="neighborhood" className="text-gray-500 text-sm mb-2">
            Bairro
          </label>
          <input type="text" name="neighborhood" id="neighborhood" placeholder="Bairro" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="city" className="text-gray-500 text-sm mb-2">
            Cidade
          </label>
          <input type="text" name="city" id="city" placeholder="Cidade" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="state" className="text-gray-500 text-sm mb-2">
              Estado
          </label>
          <input type="text" name="state" id="state" placeholder="Estado" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
      </div>
    </div>
  )
}
