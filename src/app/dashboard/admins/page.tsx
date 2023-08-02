'use client'

import OptionsBar from '@/components/UI/OptionsBar/OptionsBar'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import useAdminColumns from '@/hooks/data-table/useAdminColumns'
import { IAdmin } from '@/interfaces/IAdmin'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as $Admin from '@/services/Admin'
import { updateSearchParams } from '@/helpers/useQuery'

export default function Admins() {
  const [admins, setAdmins] = useState<IAdmin[]>({} as IAdmin[])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()!

  const handleQueryChange = useCallback((e: any) => {
    const { name, value } = e.target
    updateSearchParams(name, value, router, pathname, searchParams)
  }, [router, pathname, searchParams])

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    $Admin.all(searchParams.toString()).then((res: any) => {
      const data: IAdmin[] = res.data.data
      setAdmins(data)
    })
  }, [searchParams])

  const onStatusToggle = async (id: number) => {
    await $Admin.toggleStatus(id)
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
        $Admin.destroy(id).then((res: any) => {
          const message = res.data.message ?? 'O admin foi deletado.'
          MySwal.fire(
            'Deletado!',
            message,
            'success'
          )
          setAdmins(admins.filter((category: IAdmin) => category.id !== id))
        }).catch((err: any) => {
          const message = err.response.data.message ?? 'Ocorreu um erro ao deletar o admin.'
          MySwal.fire(
            'Erro!',
            message,
            'error'
          )
        })
      }
    })
  }

  const columns = useAdminColumns(onDelete, onStatusToggle)

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
          <select
            name="role"
            id="role"
            className="border border-gray-300 rounded-lg py-2 max-w-[180px]"
            onChange={handleQueryChange}
          >
            <option value={0}>Função</option>
            <option value="admin">Administrador</option>
            <option value="operational">Operacional</option>
            <option value="consultant">Consultor</option>
          </select>
        </div>

      </div>
      <div>
        {admins?.length > 0 ? (
          <DataTable columns={columns} data={admins} className="mt-7 bg-none" pagination responsive />
        ) : (
          <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há admins cadastrados</div>
        )}
      </div>
    </>
  )
}
