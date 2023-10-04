import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useSettingTextColumns = (onStatusToggle: (id: number) => void) => {
  const searchParams = useSearchParams()

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
        id: 'description',
        name: 'Descrição',
        selector: (row: any) => row.description,
        sortable: true,
        format: (row: any) => <p title={row.description}>{row.description}</p>,
      },
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
            <Link href={`/dashboard/configuracoes/textos/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/configuracoes/textos/editar/${row.id}`}>
              <TableEditButton />
            </Link>
          </div>
        ),
        style: {
          textAlign: 'right',
        },
      },
    ],
    [searchParams, onStatusToggle],
  )
}

export default useSettingTextColumns
