'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'

export default function Products() {
  const onSubmit = () => {}
  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-10">Produtos</h1>
      <div className="flex justify-between">
        <SearchBar onSubmit={onSubmit} />
        <OptionsBar storeLink="/dashboard/produtos/cadastrar" exportLink="products/export" />
      </div>
    </>
  )
}
