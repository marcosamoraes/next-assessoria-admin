'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IOrder } from '@/interfaces/IOrder'
import { getOrder } from '@/api/OrdersApi'
import OrderInfos from './Form/OrderInfos'

export default async function OrdersShow({ params }: any) {
  const [order, setOrder] = useState<IOrder | null>(null)

  const { id } = params

  useEffect(() => {
    const data = getOrder(id)
    setOrder(data)
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex justify-between">
          <h1 className="text-4xl text-gray-500 font-light mb-10">Pedido {order?.id ?? ''}</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/pedidos">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full md:w-9/12 px-2 -md-2">
          <OrderInfos order={order} />
        </div>

        <div className="w-full md:w-3/12 px-2 -md-2">
        </div>
      </form>
    </>
  )
}
