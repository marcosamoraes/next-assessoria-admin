'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'

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
    </>
  )
}
