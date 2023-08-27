'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useProductColumns from '@/hooks/data-table/useProductColumns'
import { IProduct } from '@/interfaces/IProduct'
import { useCallback, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as $Product from '@/services/Product'
import * as $Category from '@/services/Category'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { ICategory } from '@/interfaces/ICategory'
import { updateSearchParams } from '@/helpers/useQuery'

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>({} as IProduct[])
  const [categories, setCategories] = useState<ICategory[]>({} as ICategory[])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const handleQueryChange = useCallback((e: any) => {
    const { name, value } = e.target
    updateSearchParams(name, value, router, pathname, searchParams)
  }, [router, pathname, searchParams])

  useEffect(() => {
    $Category.all().then((res: any) => {
      const data: ICategory[] = res.data.data
      setCategories(data)
    })
  }, [])

  useEffect(() => {
    $Product.all(searchParams.toString()).then((res: any) => {
      const data: IProduct[] = res.data.data
      setProducts(data)
    })
  }, [searchParams])

  const MySwal = withReactContent(Swal)

  const onStatusToggle = async (id: number) => {
    await $Product.toggleStatus(id)
  }

  const onDelete = (id: number) => {
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
        $Product.destroy(id).then((res: any) => {
          const message = res.data.message ?? 'O produto foi deletado.'
          MySwal.fire(
            'Deletado!',
            message,
            'success'
          )
          setProducts(products.filter((product: IProduct) => product.id !== id))
        }).catch((err: any) => {
          const message = err.response.data.message ?? 'Ocorreu um erro ao deletar o produto.'
          MySwal.fire(
            'Erro!',
            message,
            'error'
          )
        })
      }
    })
  }

  const columns = useProductColumns(onDelete, onStatusToggle)

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
          Produtos
        </h1>
        <OptionsBar storeLink="/dashboard/produtos/editar" importLink="products/import" exportLink="products/export" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <SearchBar />
          <select
            name="category"
            id="category"
            className="border border-gray-300 rounded-lg py-2 max-w-[180px]"
            onChange={handleQueryChange}
          >
            <option value={0}>Categoria</option>
            {categories.length > 0 && categories.map((category: ICategory) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          <select
            name="client_type"
            id="client_type"
            className="border border-gray-300 rounded-lg py-2 max-w-[180px]"
            onChange={handleQueryChange}
          >
            <option value={0}>Tipo de cliente</option>
            <option value="physical">Física</option>
            <option value="juridical">Jurídica</option>
          </select>
          <select
            name="check_availability"
            id="check_availability"
            className="border border-gray-300 rounded-lg py-2 max-w-[180px]"
            onChange={handleQueryChange}
          >
            <option value={0}>Tem estoque</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
      </div>
      <div>
        {products?.length > 0 ? (
          <DataTable columns={columns} data={products} className="mt-7 bg-none" pagination responsive />
        ) : (
          <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há produtos cadastrados</div>
        )}
      </div>
    </>
  )
}
