'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { ICoupon } from '@/interfaces/ICoupon'
import { getCoupon } from '@/api/CouponsApi'

export default async function CouponsCreate({ params }: any) {
  const [coupon, setCoupon] = useState<ICoupon | null>(null)

  const { id } = params

  useEffect(() => {
    const data = getCoupon(id)
    setCoupon(data)
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
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
                <input type="text" name="name" id="name" placeholder="Nome" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="code" className="text-gray-500 text-sm mb-2">
                  Código
                </label>
                <input type="text" name="code" id="code" placeholder="Código" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="type" className="text-gray-500 text-sm mb-2">
                  Tipo
                </label>
                <select name="type" id="type" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
                  <option value="percentage">Porcentagem</option>
                  <option value="amount">Valor</option>
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="category" className="text-gray-500 text-sm mb-2">
                  Categoria
                </label>
                <select name="category" id="category" className="border border-gray-300 rounded-lg px-3 py-2 mb-5">
                  <option value="1">Categoria 1</option>
                  <option value="2">Categoria 2</option>
                  <option value="3">Categoria 3</option>
                </select>
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="value" className="text-gray-500 text-sm mb-2">
                  Valor
                </label>
                <input type="text" name="value" id="value" placeholder="Valor" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="minValue" className="text-gray-500 text-sm mb-2">
                  Valor Mínimo
                </label>
                <input type="text" name="minValue" id="minValue" placeholder="Valor Mínimo" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="quantity" className="text-gray-500 text-sm mb-2">
                  Quantidade
                </label>
                <input type="text" name="quantity" id="quantity" placeholder="Quantidade" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
              <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
                <label htmlFor="expire_at" className="text-gray-500 text-sm mb-2">
                  Expira em
                </label>
                <input type="text" name="expire_at" id="expire_at" placeholder="Expira em" className="border border-gray-300 rounded-lg px-3 py-2 mb-5" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
