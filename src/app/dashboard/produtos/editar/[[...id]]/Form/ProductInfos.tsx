import { ICategory } from '@/interfaces/ICategory'
import { IProduct } from '@/interfaces/IProduct'

type ProductInfosProps = {
  product: IProduct
  categories: ICategory[]
  onChange: (e: any) => void
}
export default function ProductInfos({ product, categories, onChange }: ProductInfosProps) {

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
          <input type="text" defaultValue={product.code} name="code" id="code" placeholder="Código" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" maxLength={10} onChange={onChange} required/>
        </div>
        <div className="flex flex-col w-full md:w-4/12 md:px-2 md:-mx-2">
          <label htmlFor="category_id" className="text-gray-500 text-sm mb-2">
            Categoria
          </label>
          <select name="category_id" id="category_id" value={product.category?.id} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required>
            {categories?.length > 0 && categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="stock" className="text-gray-500 text-sm mb-2">
            Estoque
          </label>
          <input type="number" value={product.stock} name="stock" id="stock" placeholder="Estoque" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required/>
        </div>
        <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="client_type" className="text-gray-500 text-sm mb-2">
            Tipo de cliente
          </label>
          <select name="client_type" id="client_type" value={product.client_type} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required>
            <option value="physical">Física</option>
            <option value="juridical">Jurídica</option>
            <option value="public_security">Segurança Pública</option>
            <option value="private_security">Segurança Privada</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="pre_sale" className="text-gray-500 text-sm mb-2">
            Pré Venda
          </label>
          <select name="pre_sale" id="pre_sale" value={product.pre_sale ? 1 : 0} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required>
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
        </div>
        <div className="flex flex-col w-full md:w-3/12 md:px-2 md:-mx-2">
          <label htmlFor="featured" className="text-gray-500 text-sm mb-2">
            Destaque
          </label>
          <select name="featured" id="featured" value={product.featured ? 1 : 0} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={onChange} required>
            <option value="1">Sim</option>
            <option value="0">Não</option>
          </select>
        </div>
      </div>
    </div>
  )
}
