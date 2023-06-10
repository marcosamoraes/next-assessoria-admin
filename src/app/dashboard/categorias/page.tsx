'use client'
import { getCategories } from '@/api/CategoriesApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useCategoryColumns from '@/hooks/data-table/useCategoryColumns'
import { ICategory } from '@/interfaces/ICategory'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default async function Categories() {
  const [categories, setCategories] = useState<ICategory[] | any>([])

  useEffect(() => {
    const data = getCategories()
    setCategories(data)
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
          'A categoria foi deletada.',
          'success'
        )
      }
    })
  }

  const columns = useCategoryColumns(onDelete)

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
        <DataTable columns={columns} data={categories} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
