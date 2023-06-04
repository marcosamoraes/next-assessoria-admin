import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useAdminColumns = (onDelete: () => void) => {
  const searchParams = useSearchParams()

  return useMemo(
    () => [
      {
        id: 'firstname',
        name: 'Nome',
        selector: (row: any) => row.firstname,
        sortable: true,
        format: (row: any) => <p title={row.firstname + ' ' + row.lastname}>{row.firstname + ' ' + row.lastname}</p>,
      },
      {
        id: 'email',
        name: 'E-mail',
        selector: (row: any) => row.email,
        sortable: true,
        format: (row: any) => <p title={row.email}>{row.email}</p>,
      },
      {
        id: 'role',
        name: 'Função',
        selector: (row: any) => row.role,
        sortable: true,
        format: (row: any) => <p title={row.role}>{row.role}</p>,
      },
      {
        id: 'status',
        name: 'Status',
        width: '100px',
        selector: (row: any) => row.status,
        sortable: true,
        cell: (row: any) => (
          <ToggleButton name="active" defaultChecked={row.active ? true : false} />
        ),
      },
      {
        name: 'Ações',
        width: '180px',
        center: true,
        sortable: false,
        cell: (row: any) => (
          <div className="flex gap-2">
            <Link href={`/dashboard/admins/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/admins/editar/${row.id}`}>
              <TableEditButton />
            </Link>
            <TableDeleteButton onClick={onDelete} />
          </div>
        ),
        style: {
          textAlign: 'right',
        },
      },
    ],
    [searchParams, onDelete],
  )
}

export default useAdminColumns
