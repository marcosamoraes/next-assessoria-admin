'use client'

import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import OrderStatusEnum from '@/enums/OrderStatusEnum'
import useOrderColumns from '@/hooks/data-table/useOrderColumns'
import { IOrder } from '@/interfaces/IOrder'
import t from '@/translations'
import { useCallback, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import * as $Order from '@/services/Order'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { updateSearchParams } from '@/helpers/useQuery'

export default function Orders() {
  const [orders, setOrders] = useState<IOrder[]>({} as IOrder[])

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const handleQueryChange = useCallback((e: any) => {
    const { name, value } = e.target
    updateSearchParams(name, value, router, pathname, searchParams)
  }, [router, pathname, searchParams])

  const columns = useOrderColumns()

  const orderStatus = Object.values(OrderStatusEnum)

  useEffect(() => {
    $Order.all(searchParams.toString()).then((res: any) => {
      const data: IOrder[] = res.data.data
      setOrders(data)
    })
  }, [searchParams])

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
        Pedidos
        </h1>
        <OptionsBar exportLink="orders/export" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <SearchBar />
          <select
            name="status"
            id="status"
            className="border border-gray-300 rounded-lg py-2 max-w-[180px]"
            onChange={handleQueryChange}
          >
            <option value={0}>Status</option>
            {orderStatus.map((status: any) => (
              <option key={status} value={status}>
                {t(status)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        {orders?.length > 0 ? (
          <DataTable columns={columns} data={orders} className="mt-7 bg-none" pagination responsive />
        ) : (
          <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há pedidos cadastrados</div>
        )}
      </div>
    </>
  )
}
