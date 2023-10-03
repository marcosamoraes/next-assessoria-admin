import { IUser } from '@/interfaces/IUser'

type ClientAddressProps = {
  user: IUser
  onChange: (e: any) => void
  handleZipcodeChanges: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function ClientAddress({ user, onChange, handleZipcodeChanges }: ClientAddressProps) {

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Endereço</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="address.zipcode" className="text-gray-500 text-sm mb-2">
            CEP
          </label>
          <input type="text" name="address.zipcode" id="address.zipcode" placeholder="CEP" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.address?.zipcode ?? ''} onChange={handleZipcodeChanges} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-8/12 md:px-2 md:-mx-2">
          <label htmlFor="address.street" className="text-gray-500 text-sm mb-2">
            Rua
          </label>
          <input type="text" name="address.street" id="address.street" placeholder="Rua" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.address?.street ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="address.number" className="text-gray-500 text-sm mb-2">
            Número
          </label>
          <input type="text" name="address.number" id="address.number" placeholder="Número" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.address?.number ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="address.complement" className="text-gray-500 text-sm mb-2">
            Complemento
          </label>
          <input type="text" name="address.complement" id="address.complement" placeholder="Complemento" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.address?.complement ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="address.neighborhood" className="text-gray-500 text-sm mb-2">
            Bairro
          </label>
          <input type="text" name="address.neighborhood" id="address.neighborhood" placeholder="Bairro" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.address?.neighborhood ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="address.city" className="text-gray-500 text-sm mb-2">
            Cidade
          </label>
          <input type="text" name="address.city" id="address.city" placeholder="Cidade" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.address?.city ?? ''} onChange={onChange} />
        </div>
        <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="address.state" className="text-gray-500 text-sm mb-2">
              Estado
          </label>
          <input type="text" name="address.state" id="address.state" placeholder="Estado" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" value={user.address?.state ?? ''} onChange={onChange} />
        </div>
      </div>
    </div>
  )
}
