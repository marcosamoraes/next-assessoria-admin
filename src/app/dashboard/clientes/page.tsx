'use client'

import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useClientColumns from '@/hooks/data-table/useClientColumns'
import { IUser } from '@/interfaces/IUser'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as $User from '@/services/User'

export default function Clients() {
  const [clients, setClients] = useState<IUser[]>({} as IUser[])

  const MySwal = withReactContent(Swal)

  const onStatusToggle = async (id: number) => {
    await $User.toggleStatus(id)
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
        $User.destroy(id).then((res: any) => {
          const message = res.data.message ?? 'O cliente foi deletado.'
          MySwal.fire(
            'Deletado!',
            message,
            'success'
          )
          setClients(clients.filter((contact: IUser) => contact.id !== id))
        }).catch((err: any) => {
          const message = err.response.data.message ?? 'Ocorreu um erro ao deletar o cliente.'
          MySwal.fire(
            'Erro!',
            message,
            'error'
          )
        })
      }
    })
  }

  const columns = useClientColumns(onDelete, onStatusToggle)

  useEffect(() => {
    $User.all().then((res: any) => {
      const data: IUser[] = res.data.data
      setClients(data)
    })
  }, [])

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
          Clientes
        </h1>
        <OptionsBar exportLink="clients/export" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <SearchBar />
          <select name="status" id="status" className="border border-gray-300 rounded-lg py-2 max-w-[180px]">
            <option>Status</option>
            <option value="approved">Aprovado</option>
            <option value="waitingEvaluation">Aguardando Avaliação</option>
            <option value="incomplete">Incompleto</option>
          </select>
        </div>

      </div>
      <div>
        {clients?.length > 0 ? (
          <DataTable columns={columns} data={clients} className="mt-7 bg-none" pagination responsive />
        ) : (
          <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há clientes cadastrados</div>
        )}
      </div>
    </>
  )
}
