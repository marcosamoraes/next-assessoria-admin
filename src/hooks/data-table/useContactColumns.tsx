import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import { useMemo } from 'react'

const useContactColumns = (onDelete: (id: number) => void) => {

  return useMemo(
    () => [
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
      {
        name: 'Ações',
        width: '180px',
        center: true,
        sortable: false,
        cell: (row: any) => (
          <div className="flex gap-2">
            <TableDeleteButton onClick={() => onDelete(row.id)} />
          </div>
        ),
        style: {
          textAlign: 'right',
        },
      },
    ],
    [onDelete],
  )
}

export default useContactColumns
