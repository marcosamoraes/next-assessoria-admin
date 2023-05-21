'use client'
import { getProducts } from '@/api/ProductsApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useProductColumns from '@/hooks/data-table/useProductsColumns'
import { IProduct } from '@/interfaces/IProduct'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

export default async function Products() {
  const [products, setProducts] = useState<IProduct[] | any>([])

  useEffect(() => {
    const data = getProducts()
    setProducts(data)
  }, [])

  const columns = useProductColumns()

  const onSubmit = () => {}
  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-7">Produtos</h1>
      <div className="flex justify-between">
        <SearchBar onSubmit={onSubmit} />
        <OptionsBar storeLink="/dashboard/produtos/editar" exportLink="products/export" />
      </div>
      <div>
        <DataTable columns={columns} data={products} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
