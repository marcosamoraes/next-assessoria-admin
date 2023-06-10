import { IProduct } from '@/interfaces/IProduct'

export default function ProductInfos({ product }: { product: IProduct | null }) {
  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="name" className="text-gray-500 text-sm mb-2">
            Título
          </label>
          <input type="text" name="name" id="name" placeholder="Título" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="code" className="text-gray-500 text-sm mb-2">
            Código
          </label>
          <input type="text" name="code" id="code" placeholder="Código" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="category" className="text-gray-500 text-sm mb-2">
            Categoria
          </label>
          <select name="category" id="category" defaultValue="1" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="clientType" className="text-gray-500 text-sm mb-2">
            Tipo de cliente
          </label>
          <select name="clientType" id="clientType" defaultValue="1" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
            <option value="1">Física</option>
            <option value="0">Jurídica</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="preSale" className="text-gray-500 text-sm mb-2">
            Pré Venda
          </label>
          <select name="preSale" id="preSale" defaultValue="1" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="featured" className="text-gray-500 text-sm mb-2">
            Destaque
          </label>
          <select name="featured" id="featured" defaultValue="1" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
        </div>
      </div>
    </div>
  )
}
