'use client'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import usePartnerStoreColumns from '@/hooks/data-table/usePartnerStoreColumns'
import { IPartnerStore } from '@/interfaces/IPartnerStore'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as $PartnerStore from '@/services/PartnerStore'
import { useSearchParams } from 'next/navigation'

export default function PartnerStores() {
  const [partnerStores, setPartnerStores] = useState<IPartnerStore[]>([] as IPartnerStore[])
  const searchParams = useSearchParams()!

  useEffect(() => {
    $PartnerStore.all(searchParams.toString()).then((res: any) => {
      const data: IPartnerStore[] = res.data.data
      setPartnerStores(data)
    })
  }, [searchParams])

  const MySwal = withReactContent(Swal)

  const onStatusToggle = async (id: number) => {
    await $PartnerStore.toggleStatus(id)
  }

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
        $PartnerStore.destroy(id).then((res: any) => {
          const message = res.data.message ?? 'A loja parceira foi deletada.'
          MySwal.fire(
            'Deletado!',
            message,
            'success'
          )
          setPartnerStores(partnerStores.filter((partnerStore: IPartnerStore) => partnerStore.id !== id))
        }).catch((err: any) => {
          const message = err.response.data.message ?? 'Ocorreu um erro ao deletar a loja parceira.'
          MySwal.fire(
            'Erro!',
            message,
            'error'
          )
        })
      }
    })
  }

  const columns = usePartnerStoreColumns(onDelete, onStatusToggle)

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
          Lojas Parceiras
        </h1>
        <OptionsBar storeLink="/dashboard/lojas-parceiras/editar" />
      </div>
      <div className="flex justify-between">
        <SearchBar />
      </div>
      <div>
        {partnerStores?.length > 0 ? (
          <DataTable columns={columns} data={partnerStores} className="mt-7 bg-none" pagination responsive />
        ) : (
          <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há lojas parceiras cadastradas</div>
        )}
      </div>
    </>
  )
}
