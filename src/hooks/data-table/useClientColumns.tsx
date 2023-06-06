import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import t from '@/translations'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useClientColumns = (onDelete: () => void) => {
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
        id: 'document',
        name: 'Documento',
        selector: (row: any) => row.userInformations.document,
        sortable: true,
        format: (row: any) => <p title={row.userInformations.document}>{row.userInformations.document}</p>,
      },
      {
        id: 'state',
        name: 'Estado',
        selector: (row: any) => row.userAddress.state,
        sortable: true,
        format: (row: any) => <p title={row.userAddress.state}>{row.userAddress.state}</p>,
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row: any) => row.userInformations.status,
        sortable: true,
        format: (row: any) => <p title={row.userInformations.status}>{t(row.userInformations.status)}</p>,
      },
      {
        id: 'active',
        name: 'Ativo',
        width: '100px',
        selector: (row: any) => row.active,
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
            <Link href={`/dashboard/clientes/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/clientes/editar/${row.id}`}>
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

export default useClientColumns
