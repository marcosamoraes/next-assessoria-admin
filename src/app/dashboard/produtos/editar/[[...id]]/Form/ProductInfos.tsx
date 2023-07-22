import { IProduct } from '@/interfaces/IProduct'

type ProductInfosProps = {
  product: IProduct
  onChange: (e: any) => void
}
export default function ProductInfos({ product, onChange }: ProductInfosProps) {
  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="title" className="text-gray-500 text-sm mb-2">
            Título
          </label>
          <input type="text" defaultValue={product.title} name="title" id="title" placeholder="Título" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required/>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="code" className="text-gray-500 text-sm mb-2">
            Código
          </label>
          <input type="text" defaultValue={product.code} name="code" id="code" placeholder="Código" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" minLength={10} maxLength={10} onChange={onChange} required/>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="category" className="text-gray-500 text-sm mb-2">
            Categoria
          </label>
          <select name="category" id="category" defaultValue={product.category?.id} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="clientType" className="text-gray-500 text-sm mb-2">
            Tipo de cliente
          </label>
          <select name="clientType" id="clientType" defaultValue={product.client_type} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required>
            <option value="1">Física</option>
            <option value="0">Jurídica</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="preSale" className="text-gray-500 text-sm mb-2">
            Pré Venda
          </label>
          <select name="preSale" id="preSale" defaultValue={product.pre_sale ? 1 : 0} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required>
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="featured" className="text-gray-500 text-sm mb-2">
            Destaque
          </label>
          <select name="featured" id="featured" defaultValue={product.featured ? 1 : 0} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required>
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
        </div>
      </div>
    </div>
  )
}
