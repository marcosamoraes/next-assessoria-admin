'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { ICategory } from '@/interfaces/ICategory'
import BackButton from '@/components/UI/BackButton/BackButton'
import * as $Category from '@/services/Category'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

export default function CategoriesCreate({ params }: any) {
  const [category, setCategory] = useState<ICategory>({
    name: '',
  } as ICategory)

  const { id } = params

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    if (id) {
      $Category.find(id).then((res: any) => {
        const data: ICategory = res.data.category
        setCategory(data)
      })
    }
  }, [id])

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setCategory({ ...category, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (id) {
      $Category.update(id, category).then((res: any) => {
        const message = res.response?.data?.message ?? 'Categoria atualizada com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar a categoria'
        MySwal.fire(
          'Erro',
          message,
          'error'
        )
      })
    }
    else {
      $Category.store(category).then((res: any) => {
        const message = res.response?.data?.message ?? 'Categoria criada com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar a categoria'
        MySwal.fire(
          'Erro',
          message,
          'error'
        )
      })
    }
  }

  return (
    <>
      <form className="flex flex-wrap flex-row" method="POST" onSubmit={handleSubmit}>
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{category ? 'Editar' : 'Nova'} Categoria</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/categorias">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full px-2">
          <div className="mb-4">
            <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
            <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="text-gray-500 text-sm mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome"
                  defaultValue={category.name}
                  className="border border-gray-300 rounded-lg px-3 py-2 mb-5"
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
