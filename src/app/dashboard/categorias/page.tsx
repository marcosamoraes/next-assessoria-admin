'use client'
import { getCategories } from '@/api/CategoriesApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useCategoryColumns from '@/hooks/data-table/useCategoryColumns'
import { ICategory } from '@/interfaces/ICategory'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

export default async function Categories() {
  const [categories, setCategories] = useState<ICategory[] | any>([])

  useEffect(() => {
    const data = getCategories()
    setCategories(data)
  }, [])

  const columns = useCategoryColumns()

  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-7">Categorias</h1>
      <div className="flex justify-between">
        <SearchBar />
        <OptionsBar storeLink="/dashboard/categorias/editar" />
      </div>
      <div>
        <DataTable columns={columns} data={categories} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
