'use client'

import PrimaryButton from '@/components/UI/PrimaryButton/PrimaryButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import BackButton from '@/components/UI/BackButton/BackButton'
import { IOrder } from '@/interfaces/IOrder'
import OrderInfos from './Form/OrderInfos'
import OrderPaymentInfos from './Form/OrderPaymentInfos'
import OrderStatus from './Form/OrderStatus'
import OrderProducts from './Form/OrderProducts'
import OrderHistory from './Form/OrderHistory'
import * as $Order from '@/services/Order'
import OrderAddress from './Form/OrderAddress'
import OrderStatusEnum from '@/enums/OrderStatusEnum'
import OrderActions from './Form/OrderActions'

export default function OrdersShow({ params }: any) {
  const [order, setOrder] = useState<IOrder>({} as IOrder)

  const { id } = params

  useEffect(() => {
    if (id) {
      $Order.find(id).then((res: any) => {
        const data: IOrder = res.data.order
        setOrder(data)
      })
    }
  }, [id])

  return (
    <>
      <form className="flex flex-wrap flex-row">
        <div className="w-full px-2 -md-2 flex flex-wrap justify-between">
          <h1 className="text-2xl lg:text-4xl text-gray-500 font-light mb-10">Pedido {order?.id ?? ''}</h1>
          <div className="flex justify-end px-2 -md-2 gap-4">
            <Link href="/dashboard/pedidos">
              <BackButton icon={IoMdArrowBack}>Voltar</BackButton>
            </Link>
            <OrderActions order={order} />
          </div>
        </div>

        <div className="w-full px-2 -md-2">
          {(order.status === OrderStatusEnum.CANCELED && order.canceled_reason) && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3" role="alert">
              <strong className="font-bold">Motivo do cancelamento: </strong>
              <span className="block sm:inline">{order.canceled_reason}</span>
            </div>
          )}
          <OrderStatus order={order} />
        </div>

        <div className="w-full xl:w-7/12 px-2 -md-2">
          <OrderInfos order={order} />
          <OrderAddress order={order} />
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
