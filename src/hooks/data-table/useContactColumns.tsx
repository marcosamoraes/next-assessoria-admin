import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import { useAuth } from '@/contexts/AuthProvider'
import UserRoleEnum from '@/enums/UserRoleEnum'
import { useMemo } from 'react'

const useContactColumns = (onDelete: (id: number) => void) => {
  const { user } = useAuth()

  return useMemo(
    () => {
      const baseColumns: any = [
        {
          id: 'name',
          name: 'Nome',
          selector: (row: any) => row.name,
          sortable: true,
          format: (row: any) => <p title={row.name}>{row.name}</p>,
        },
        {
          id: 'email',
          name: 'E-mail',
          selector: (row: any) => row.email,
          sortable: true,
          format: (row: any) => <p title={row.email}>{row.email}</p>,
        },
        {
          id: 'message',
          name: 'Mensagem',
          selector: (row: any) => row.message,
          sortable: true,
          format: (row: any) => <p title={row.message}>{row.message}</p>,
        },
      ]

      if (user?.role !== UserRoleEnum.CONSULTANT) {
        baseColumns.push(
          {
            name: 'Ações',
            width: '180px',
            center: true,
            sortable: false,
            cell: (row: any) => (
              <div className="flex gap-2">
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
    [onDelete, user],
  )
}

export default useContactColumns
