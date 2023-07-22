'use client'

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
import * as $State from '@/services/State'
import * as $Product from '@/services/Product'
import ClientTypeEnum from '@/enums/ClientTypeEnum'

export default function ProductsCreate({ params }: any) {
  const [product, setProduct] = useState<IProduct>({
    slug: '',
    title: '',
    code: '',
    stock: 0,
    client_type: ClientTypeEnum.PHYSICAL_PERSON,
    pre_sale: false,
    featured: false,
    image: '',
    description: '',
    active: true,
  } as IProduct)

  const [states, setStates] = useState<IState[]>({} as IState[])

  const { id } = params

  useEffect(() => {
    $State.all().then((res: any) => {
      const data: IState[] = res.data.data
      setStates(data)
    })

    if (id) {
      $Product.find(id).then((res: any) => {
        const data: IProduct = res.data
        setProduct(data)
      })
    }
  }, [id])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(product)
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  return (
    <>
      <form className="flex flex-wrap flex-row" onSubmit={handleSubmit}>
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
          <ProductInfos product={product} onChange={handleInputChange} />
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
