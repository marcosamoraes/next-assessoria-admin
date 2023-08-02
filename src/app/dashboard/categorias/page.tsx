'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useCategoryColumns from '@/hooks/data-table/useCategoryColumns'
import { ICategory } from '@/interfaces/ICategory'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as $Category from '@/services/Category'
import { useSearchParams } from 'next/navigation'

export default function Categories() {
  const [categories, setCategories] = useState<ICategory[]>({} as ICategory[])
  const searchParams = useSearchParams()!

  useEffect(() => {
    $Category.all(searchParams.toString()).then((res: any) => {
      const data: ICategory[] = res.data.data
      setCategories(data)
    })
  }, [searchParams])

  const MySwal = withReactContent(Swal)

  const onStatusToggle = async (id: number) => {
    await $Category.toggleStatus(id)
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
        $Category.destroy(id).then((res: any) => {
          const message = res.data.message ?? 'A categoria foi deletada.'
          MySwal.fire(
            'Deletado!',
            message,
            'success'
          )
          setCategories(categories.filter((category: ICategory) => category.id !== id))
        }).catch((err: any) => {
          const message = err.response.data.message ?? 'Ocorreu um erro ao deletar a categoria.'
          MySwal.fire(
            'Erro!',
            message,
            'error'
          )
        })
      }
    })
  }

  const columns = useCategoryColumns(onDelete, onStatusToggle)

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
          Categorias
        </h1>
        <OptionsBar storeLink="/dashboard/categorias/editar" />
      </div>
      <div className="flex justify-between">
        <SearchBar />
      </div>
      <div>
        {categories?.length > 0 ? (
          <DataTable columns={columns} data={categories} className="mt-7 bg-none" pagination responsive />
        ) : (
          <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há categorias cadastradas</div>
        )}
      </div>
    </>
  )
}
