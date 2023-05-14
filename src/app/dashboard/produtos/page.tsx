'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import Image from 'next/image'

export default function Products() {
  const data = [
    {
      image: '/product1.jpg',
      name: 'Carregador .40 22 Tiros',
      clientType: 'Física',
      category: 'Carregadores',
      code: 'Carregador4022tiros',
      preSale: true,
      status: true,
    },
    {
      image: '/product2.jpg',
      name: 'Carregador .40 22 Tiros',
      clientType: 'Física',
      category: 'Carregadores',
      code: 'Carregador4022tiros',
      preSale: true,
      status: true,
    },
    {
      image: '/product3.jpg',
      name: 'Carregador .40 22 Tiros',
      clientType: 'Física',
      category: 'Carregadores',
      code: 'Carregador4022tiros',
      preSale: true,
      status: true,
    },
  ]

  const onSubmit = () => {}
  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-7">Produtos</h1>
      <div className="flex justify-between">
        <SearchBar onSubmit={onSubmit} />
        <OptionsBar storeLink="/dashboard/produtos/cadastrar" exportLink="products/export" />
      </div>
      <div>
        <table className="w-full mt-7">
          <thead>
            <tr className="text-left text-gray-500 font-light">
              <th className="py-2">Imagem</th>
              <th className="py-2">Nome</th>
              <th className="py-2">Tipo de Cliente</th>
              <th className="py-2">Categoria</th>
              <th className="py-2">Pré-venda</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-2">
                  <Image src={product.image} alt={product.name} width={100} height={100} className="w-20 h-20 rounded-md" />
                </td>
                <td className="py-2">
                  {product.name}
                  <br />
                  <small>{product.code}</small>
                </td>
                <td className="py-2">{product.clientType}</td>
                <td className="py-2">{product.category}</td>
                <td className="py-2">{product.preSale ? 'Sim' : 'Não'}</td>
                <td className={`py-2 ${product.status ? 'text-success' : 'text-danger'}`}>{product.status ? 'Ativo' : 'Inativo'}</td>
                <td className="py-2">
                  <div className="flex items-center justify-center gap-2">
                    <button className="bg-warning px-3 py-1 rounded-xl hover:bg-warning/70 text-black inline-flex items-center">
                      Editar
                    </button>
                    <button className="bg-danger px-3 py-1 rounded-xl hover:bg-danger/70 text-white inline-flex items-center">
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
