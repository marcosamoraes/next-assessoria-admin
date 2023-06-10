'use client'

import { getAdmins } from '@/api/AdminsApi'
import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useAdminColumns from '@/hooks/data-table/useAdminColumns'
import { IAdmin } from '@/interfaces/IAdmin'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Admins() {
  const [admins, setAdmins] = useState<IAdmin[] | any>([])

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
          'O admin foi deletado.',
          'success'
        )
      }
    })
  }

  const columns = useAdminColumns(onDelete)

  useEffect(() => {
    const admins = getAdmins()
    setAdmins(admins)
  }, [])

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-2xl md:text-4xl text-gray-500 font-light">
          Administradores
        </h1>
        <OptionsBar storeLink="/dashboard/admins/editar" exportLink="admins/export" />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <SearchBar />
          <select name="role" id="role" className="border border-gray-300 rounded-lg py-2 max-w-[180px]">
            <option>Função</option>
            <option value="1">Administrador</option>
            <option value="2">Operacional</option>
            <option value="3">Consultor</option>
          </select>
        </div>

      </div>
      <div>
        <DataTable columns={columns} data={admins} className="mt-7 bg-none" pagination responsive />
      </div>
    </>
  )
}
