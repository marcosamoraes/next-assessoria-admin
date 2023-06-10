'use client'

import { getProduct } from '@/api/ProductsApi'
import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import { IProduct } from '@/interfaces/IProduct'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import ProductDescription from './Form/ProductDescription'
import ProductImage from './Form/ProductImage'
import ProductImages from './Form/ProductImages'
import ProductInfos from './Form/ProductInfos'
import ProductValues from './Form/ProductValues'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IState } from '@/interfaces/IState'
import { getStates } from '@/api/StatesApi'

export default async function ProductsCreate({ params }: any) {
  const [product, setProduct] = useState<IProduct | null>(null)
  const [states, setStates] = useState<IState | any>([])

  const { id } = params

  useEffect(() => {
    const productData = getProduct(id)
    setProduct(productData)
    const statesData = getStates()
    setStates(statesData)
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{product ? 'Editar' : 'Novo'} Produto</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/produtos">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full md:w-8/12 px-2 -md-2">
          <ProductInfos product={product} />
          <ProductDescription product={product} />
        </div>

        <div className="w-full md:w-4/12 px-2 -md-2">
          <ProductImage product={product} />
          <ProductImages product={product} />
        </div>

        <div className="w-full px-2 -md-2">
          <ProductValues product={product} states={states} />
        </div>
      </form>
    </>
  )
}
