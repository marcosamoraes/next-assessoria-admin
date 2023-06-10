'use client'

import { getUsers } from '@/api/UsersApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useClientColumns from '@/hooks/data-table/useClientColumns'
import { IUser } from '@/interfaces/IUser'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Clients() {
  const [clients, setClients] = useState<IUser[] | any>([])

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
          'O cliente foi deletado.',
          'success'
        )
      }
    })
  }

  const columns = useClientColumns(onDelete)

  useEffect(() => {
    const clients = getUsers()
    setClients(clients)
  }, [])

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
          Clientes
        </h1>
        <OptionsBar storeLink="/dashboard/clientes/editar" exportLink="clients/export" />
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
        <DataTable columns={columns} data={clients} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
