'use client'

import { getProduct } from '@/api/ProductsApi'
import DangerButton from '@/components/UI/DangerButton/DangerButton'
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

// ProductsCreate.getInitialProps = async (ctx: NextPageContext) => {
//   console.log(ctx)
// }

export default async function ProductsCreate({ params }: any) {
  const [product, setProduct] = useState<IProduct | null>(null)

  const { id } = params

  useEffect(() => {
    const data = getProduct(id)
    setProduct(data)
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-4xl text-gray-500 font-light mb-10">{product ? 'Editar' : 'Novo'} Produto</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/produtos">
              <DangerButton icon={IoMdArrowBack}>Voltar</DangerButton>
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
          <ProductValues product={product} />
        </div>
      </form>
    </>
  )
}
