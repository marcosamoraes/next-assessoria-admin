'use client'

import { getOrders } from '@/api/OrdersApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import OrderStatusEnum from '@/enums/OrderStatusEnum'
import useOrderColumns from '@/hooks/data-table/useOrderColumns'
import { IOrder } from '@/interfaces/IOrder'
import t from '@/translations'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

export default function Orders() {
  const [orders, setOrders] = useState<IOrder[] | any>([])

  const columns = useOrderColumns()

  // get values from enum
  const orderStatus = Object.values(OrderStatusEnum)

  useEffect(() => {
    const orders = getOrders()
    setOrders(orders)
  }, [])

  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-7">Pedidos</h1>
      <div className="flex justify-between">
        <div className="flex flex-row gap-3">
          <SearchBar />
          <select name="status" id="status" className="border border-gray-300 rounded-lg py-2">
            <option>Status</option>
            {orderStatus.map((status: any) => (
              <option key={status} value={status}>
                {t(status)}
              </option>
            ))}
          </select>
        </div>

        <OptionsBar exportLink="orders/export" />
      </div>
      <div>
        <DataTable columns={columns} data={orders} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
