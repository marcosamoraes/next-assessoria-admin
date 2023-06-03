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

  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-7">Produtos</h1>
      <div className="flex justify-between">
        <div className="flex flex-row gap-3">
          <SearchBar />
          <select name="category" id="category" className="border border-gray-300 rounded-lg py-2">
            <option>Categoria</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
          </select>
          <select name="clientType" id="clientType" className="border border-gray-300 rounded-lg py-2">
            <option>Tipo de cliente</option>
            <option value="1">Física</option>
            <option value="2">Jurídica</option>
            <option value="3">Categoria 3</option>
          </select>
        </div>

        <OptionsBar storeLink="/dashboard/produtos/editar" exportLink="products/export" />
      </div>
      <div>
        <DataTable columns={columns} data={products} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
