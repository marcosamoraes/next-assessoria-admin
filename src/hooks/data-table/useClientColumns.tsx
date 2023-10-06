import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import { useAuth } from '@/contexts/AuthProvider'
import UserRoleEnum from '@/enums/UserRoleEnum'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useClientColumns = (onDelete: (id: number) => void, onStatusToggle: (id: number) => void) => {
  const { user } = useAuth()

  const searchParams = useSearchParams()

  return useMemo(
    () => {
      const baseColumns: any = [
        {
          id: 'firstname',
          name: 'Nome',
          selector: (row: any) => row.name,
          sortable: true,
          format: (row: any) => <p title={row.name + ' ' + row.last_name}>{row.name + ' ' + row.last_name}</p>,
        },
        {
          id: 'email',
          name: 'E-mail',
          selector: (row: any) => row.email,
          sortable: true,
          format: (row: any) => <p title={row.email}>{row.email}</p>,
        },
        {
          id: 'document',
          name: 'Documento',
          selector: (row: any) => row.details?.document,
          sortable: true,
          format: (row: any) => <p title={row.details?.document}>{row.details?.document}</p>,
        },
        {
          id: 'state',
          name: 'Estado',
          selector: (row: any) => row.address?.state,
          sortable: true,
          format: (row: any) => <p title={row.address?.state}>{row.address?.state}</p>,
        },
      ]

      if (user?.role !== UserRoleEnum.CONSULTANT) {
        baseColumns.push(
          {
            id: 'active',
            name: 'Ativo',
            width: '100px',
            selector: (row: any) => row.active,
            sortable: true,
            cell: (row: any) => (
              <ToggleButton name="active" defaultChecked={row.active ? true : false} onChange={() => onStatusToggle(row.id)} />
            ),
          },
          {
            name: 'Ações',
            width: '180px',
            center: true,
            sortable: false,
            cell: (row: any) => (
              <div className="flex gap-2">
                <Link href={`/dashboard/clientes/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/clientes/editar/${row.id}`}>
                  <TableEditButton />
                </Link>
                {user?.role === UserRoleEnum.ADMIN && (
                  <TableDeleteButton onClick={() => onDelete(row.id)} />
                )}
              </div>
            ),
            style: {
              textAlign: 'right',
            },
          },
        )
      }

      return baseColumns
    },
    [searchParams, onDelete, onStatusToggle, user],
  )
}

export default useClientColumns
