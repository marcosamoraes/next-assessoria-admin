'use client'
import { getCoupons } from '@/api/CouponsApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useCouponColumns from '@/hooks/data-table/useCouponsColumns'
import { ICoupon } from '@/interfaces/ICoupon'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

export default async function Coupons() {
  const [coupons, setCoupons] = useState<ICoupon[] | any>([])

  useEffect(() => {
    const data = getCoupons()
    setCoupons(data)
  }, [])

  const columns = useCouponColumns()

  return (
    <>
      <h1 className="w-full text-4xl text-gray-500 font-light mb-7">Cupons de desconto</h1>
      <div className="flex justify-between">
        <div className="flex flex-row gap-3">
          <SearchBar />
          <select name="type" id="type" className="border border-gray-300 rounded-lg py-2">
            <option>Tipo</option>
            <option value="percentage">Porcentagem</option>
            <option value="amount">Valor Fixo</option>
          </select>
        </div>
        <OptionsBar storeLink="/dashboard/cupons/editar" />
      </div>
      <div>
        <DataTable columns={columns} data={coupons} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
