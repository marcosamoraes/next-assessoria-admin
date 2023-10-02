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
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { ICategory } from '@/interfaces/ICategory'
import * as $Category from '@/services/Category'

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
    category_id: 1,
  } as IProduct)

  const [states, setStates] = useState<IState[]>({} as IState[])
  const [categories, setCategories] = useState<ICategory[]>({} as ICategory[])

  const MySwal = withReactContent(Swal)

  const { id } = params

  useEffect(() => {
    $State.all().then((res: any) => {
      const data: IState[] = res.data.data
      setStates(data)
    })

    $Category.all().then((res: any) => {
      const data: ICategory[] = res.data.data
      setCategories(data)
    })

    if (id) {
      $Product.find(id).then((res: any) => {
        const data: IProduct = res.data.product

        const prices = data.prices?.reduce((acc: any, price: any) => {
          acc[price.state_id] = price
          return acc
        }, {})

        setProduct({
          ...data,
          prices: {
            ...prices,
          }
        } as IProduct)
      })
    }
  }, [id])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (product.client_type === ClientTypeEnum.PHYSICAL_PERSON && (!product.prices || Object.keys(product.prices as {}).length < 27)) {
      return MySwal.fire(
        'Erro',
        'Insira os valores do produto para todos os estados',
        'error'
      )
    }

    if (id) {
      $Product.update(id, product).then((res: any) => {
        const message = res.response?.data?.message ?? 'Produto atualizado com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o produto'
        MySwal.fire(
          'Erro',
          message,
          'error'
        )
      })
    } else {
      $Product.store(product).then((res: any) => {
        const message = res.response?.data?.message ?? 'Produto criado com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o produto'
        MySwal.fire(
          'Erro',
          message,
          'error'
        )
      })
    }
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleImageChange = (url: string) => {
    setProduct({ ...product, image: url })
  }

  const clearImages = () => {
    setProduct(prev => ({ ...prev, images: [] } as IProduct))
  }

  const handleImagesChange = (url: string) => {
    setProduct(prev => ({ ...prev, images: [...prev.images ?? [], {image: url}] } as IProduct))
  }

  const handleValuesChange = (name: string, value: any, state: number) => {

    let values = {
      value_transfer: 0,
      value_card: 0,
      value_card_installment: 0
    }

    if (product.prices && product.prices[state]) {
      values = {
        ...product.prices[state],
        [name]: value
      }
    }

    setProduct({
      ...product,
      prices: {
        ...product.prices,
        [state]: {
          ...values,
          [name]: value
        }
      }
    } as IProduct)
  }

  return (
    <>
      <form className="flex flex-wrap flex-row" onSubmit={handleSubmit}>
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{product.id ? 'Editar' : 'Novo'} Produto {id ?? ''}</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/produtos">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full md:w-8/12 px-2 -md-2">
          <ProductInfos product={product} categories={categories} onChange={handleInputChange} />
          <ProductDescription product={product} onChange={handleInputChange} />
        </div>

        <div className="w-full md:w-4/12 px-2 -md-2">
          <ProductImage product={product} onChange={handleImageChange} />
          <ProductImages product={product} onChange={handleImagesChange} clearImages={clearImages} />
        </div>

        {product.client_type === ClientTypeEnum.PHYSICAL_PERSON && (
          <div className="w-full px-2 -md-2">
            <ProductValues product={product} states={states} onChange={handleValuesChange} />
          </div>
        )}
      </form>
    </>
  )
}