'use client'
import { getCoupons } from '@/api/CouponsApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useCouponColumns from '@/hooks/data-table/useCouponColumns'
import { ICoupon } from '@/interfaces/ICoupon'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default async function Coupons() {
  const [coupons, setCoupons] = useState<ICoupon[] | any>([])

  useEffect(() => {
    const data = getCoupons()
    setCoupons(data)
  }, [])

  const MySwal = withReactContent(Swal)

  const onDelete = () => {
    MySwal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deletado!',
          'O cupom foi deletado.',
          'success'
        )
      }
    })
  }

  const columns = useCouponColumns(onDelete)

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
          Cupons de desconto
        </h1>
        <OptionsBar storeLink="/dashboard/cupons/editar" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <SearchBar />
          <select name="type" id="type" className="border border-gray-300 rounded-lg py-2 max-w-[180px]">
            <option>Tipo</option>
            <option value="percentage">Porcentagem</option>
            <option value="amount">Valor Fixo</option>
          </select>
        </div>
      </div>
      <div>
        <DataTable columns={columns} data={coupons} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
