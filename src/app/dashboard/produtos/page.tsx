'use client'
import { getProducts } from '@/api/ProductsApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useProductColumns from '@/hooks/data-table/useProductColumns'
import { IProduct } from '@/interfaces/IProduct'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default async function Products() {
  const [products, setProducts] = useState<IProduct[] | any>([])

  useEffect(() => {
    const data = getProducts()
    setProducts(data)
  }, [])

  const MySwal = withReactContent(Swal)

  const onDelete = () => {
    MySwal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletado!',
          'O produto foi deletado.',
          'success'
        )
      }
    })
  }

  const columns = useProductColumns(onDelete)

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
          Produtos
        </h1>
        <OptionsBar storeLink="/dashboard/produtos/editar" exportLink="products/export" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <SearchBar />
          <select name="category" id="category" className="border border-gray-300 rounded-lg py-2 max-w-[180px]">
            <option>Categoria</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
          </select>
          <select name="clientType" id="clientType" className="border border-gray-300 rounded-lg py-2 max-w-[180px]">
            <option>Tipo de cliente</option>
            <option value="1">Física</option>
            <option value="2">Jurídica</option>
            <option value="3">Categoria 3</option>
          </select>
        </div>
      </div>
      <div>
        <DataTable columns={columns} data={products} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
