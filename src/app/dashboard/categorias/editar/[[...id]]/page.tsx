'use client'

import { getProduct } from '@/api/ProductsApi'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { ICategory } from '@/interfaces/ICategory'
import BackButton from '@/components/UI/BackButton/BackButton'

export default async function CategoriesCreate({ params }: any) {
  const [category, setCategory] = useState<ICategory | null>(null)

  const { id } = params

  useEffect(() => {
    const data = getProduct(id)
    setCategory(data)
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
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
                <input type="text" name="name" id="name" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
