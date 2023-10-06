import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import { useAuth } from '@/contexts/AuthProvider'
import UserRoleEnum from '@/enums/UserRoleEnum'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useCategoryColumns = (onDelete: (id: number) => void, onStatusToggle: (id: number) => void) => {
  const { user } = useAuth()

  const searchParams = useSearchParams()

  return useMemo(
    () => {
      const baseColumns: any = [
        {
          id: 'name',
          name: 'Nome',
          selector: (row: any) => row.name,
          sortable: true,
          format: (row: any) => <p title={row.name}>{row.name}</p>,
        }
      ]

      if (user?.role !== UserRoleEnum.CONSULTANT) {
        baseColumns.push(
          {
            id: 'status',
            name: 'Status',
            width: '100px',
            selector: (row: any) => row.status,
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
              user?.role !== UserRoleEnum.CONSULTANT && (
                <div className="flex gap-2">
                  <Link href={`/dashboard/categorias/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/categorias/editar/${row.id}`}>
                    <TableEditButton />
                  </Link>
                  {user?.role === UserRoleEnum.ADMIN && (
                    <TableDeleteButton onClick={() => onDelete(row.id)} />
                  )}
                </div>
              )
            ),
            style: {
              textAlign: 'right',
            },
          }
        )
      }

      return baseColumns
    },
    [searchParams, onDelete, onStatusToggle, user],
  )
}

export default useCategoryColumns
