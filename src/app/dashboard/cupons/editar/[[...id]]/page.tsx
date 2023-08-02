'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { ICoupon } from '@/interfaces/ICoupon'
import * as $Coupon from '@/services/Coupon'
import * as $Category from '@/services/Category'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { ICategory } from '@/interfaces/ICategory'
import Mask from '@/helpers/Mask'
import moment from 'moment'

export default function CouponsCreate({ params }: any) {
  const [coupon, setCoupon] = useState<ICoupon>({
    name: '',
    category_id: 1,
    type: 'percent',
    value: 0.00,
    quantity: 0,
  } as ICoupon)

  const [categories, setCategories] = useState<ICategory[]>({} as ICategory[])

  const { id } = params

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    $Category.all().then((res: any) => {
      const data: ICategory[] = res.data.data
      setCategories(data)
    })

    if (id) {
      $Coupon.find(id).then((res: any) => {
        const data: ICoupon = res.data.coupon
        setCoupon(data)
      })
    }
  }, [id])

  const handleInputChange = (e: any) => {
    const name = e.target.name
    let value = e.target.value

    if (name === 'value' || name === 'min_value') {
      value = Mask.money(value)
    }

    setCoupon(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (id) {
      $Coupon.update(id, coupon).then((res: any) => {
        const message = res.response?.data?.message ?? 'Cupom atualizado com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o cupom'
        MySwal.fire(
          'Erro',
          message,
          'error'
        )
      })
    }
    else {
      $Coupon.store(coupon).then((res: any) => {
        const message = res.response?.data?.message ?? 'Cupom criado com sucesso'
        MySwal.fire(
          'Sucesso',
          message,
          'success'
        )
      }).catch((err: any) => {
        const message = err.response?.data?.message ?? 'Ocorreu um erro ao atualizar o cupom'
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
      <form className="flex flex-wrap flex-row" onSubmit={handleSubmit}>
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">{coupon ? 'Editar' : 'Novo'} Cupom</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/cupons">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full px-2">
          <div className="mb-4">
            <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
            <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="name" className="text-gray-500 text-sm mb-2">
                  Nome
                </label>
                <input type="text" defaultValue={coupon.name} name="name" id="name" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} required/>
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="code" className="text-gray-500 text-sm mb-2">
                  Código
                </label>
                <input type="text" defaultValue={coupon.code} name="code" id="code" placeholder="Código" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} required/>
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="type" className="text-gray-500 text-sm mb-2">
                  Tipo
                </label>
                <select value={coupon.type} name="type" id="type" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} required>
                  <option value="percent">Porcentagem</option>
                  <option value="fixed">Valor</option>
                  <option value="freeFreight">Frete Fixo</option>
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="category_id" className="text-gray-500 text-sm mb-2">
                  Categoria
                </label>
                <select name="category_id" id="category_id" value={coupon.category_id} className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange}>
                  <option value={0}>Selecione...</option>
                  {categories?.length > 0 && categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="value" className="text-gray-500 text-sm mb-2">
                  Valor
                </label>
                <input type="text" value={coupon.value ? Mask.money(String(coupon.value)) : ''} name="value" id="value" placeholder="Valor" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} required/>
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="min_value" className="text-gray-500 text-sm mb-2">
                  Valor Mínimo
                </label>
                <input type="text" value={coupon.min_value ? Mask.money(String(coupon.min_value)) : ''} name="min_value" id="min_value" placeholder="Valor Mínimo" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="quantity" className="text-gray-500 text-sm mb-2">
                  Quantidade
                </label>
                <input type="text" value={coupon.quantity} name="quantity" id="quantity" placeholder="Quantidade" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} />
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="expire_at" className="text-gray-500 text-sm mb-2">
                  Expira em
                </label>
                <input type="datetime-local" value={moment(coupon.expire_at).format('YYYY-MM-DDTHH:mm')} name="expire_at" id="expire_at" placeholder="Expira em" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" onChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
