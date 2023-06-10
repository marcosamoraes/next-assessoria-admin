'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IOrder } from '@/interfaces/IOrder'
import { getOrder } from '@/api/OrdersApi'
import OrderInfos from './Form/OrderInfos'
import OrderPaymentInfos from './Form/OrderPaymentInfos'
import OrderStatus from './Form/OrderStatus'
import OrderProducts from './Form/OrderProducts'
import OrderHistory from './Form/OrderHistory'

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
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">Pedido {order?.id ?? ''}</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/pedidos">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <PrimaryButton text="Salvar" />
          </div>
        </div>

        <div className="w-full px-2 -md-2">
          <OrderStatus order={order} />
        </div>

        <div className="w-full xl:w-7/12 px-2 -md-2">
          <OrderInfos order={order} />
          <OrderHistory order={order} />
        </div>

        <div className="w-full xl:w-5/12 px-2 -md-2">
          <OrderProducts order={order} />
          <OrderPaymentInfos order={order} />
        </div>
      </form>
    </>
  )
}
