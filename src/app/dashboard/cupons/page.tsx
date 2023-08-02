'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import { updateSearchParams } from '@/helpers/useQuery'
import useCouponColumns from '@/hooks/data-table/useCouponColumns'
import { ICoupon } from '@/interfaces/ICoupon'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as $Coupon from '@/services/Coupon'

export default function Coupons() {
  const [coupons, setCoupons] = useState<ICoupon[] | any>([])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const handleQueryChange = useCallback((e: any) => {
    const { name, value } = e.target
    updateSearchParams(name, value, router, pathname, searchParams)
  }, [router, pathname, searchParams])

  useEffect(() => {
    $Coupon.all(searchParams.toString()).then((res: any) => {
      const data: ICoupon[] = res.data.data
      setCoupons(data)
    })
  }, [searchParams])

  const MySwal = withReactContent(Swal)

  const onDelete = (id: number) => {
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
        $Coupon.destroy(id).then((res: any) => {
          const message = res.data.message ?? 'O cupom foi deletado.'
          MySwal.fire(
            'Deletado!',
            message,
            'success'
          )
          setCoupons(coupons.filter((category: ICoupon) => category.id !== id))
        }).catch((err: any) => {
          const message = err.response.data.message ?? 'Ocorreu um erro ao deletar o cupom.'
          MySwal.fire(
            'Erro!',
            message,
            'error'
          )
        })
      }
    })
  }

  const onStatusToggle = async (id: number) => {
    await $Coupon.toggleStatus(id)
  }

  const columns = useCouponColumns(onDelete, onStatusToggle)

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
          <select
            name="type"
            id="type"
            className="border border-gray-300 rounded-lg py-2 max-w-[180px]"
            onChange={handleQueryChange}
          >
            <option value={0}>Tipo</option>
            <option value="percentage">Porcentagem</option>
            <option value="amount">Valor Fixo</option>
          </select>
        </div>
      </div>
      <div>
        {coupons?.length > 0 ? (
          <DataTable columns={columns} data={coupons} className="mt-7 bg-none" pagination responsive />
        ) : (
          <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há cupons cadastrados</div>
        )}
      </div>
    </>
  )
}
