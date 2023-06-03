import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useSettingTextColumns = () => {
  const searchParams = useSearchParams()

  return useMemo(
    () => [
      {
        id: 'type',
        name: 'Tipo',
        width: '100px',
        selector: (row: any) => row.type,
        sortable: true,
        format: (row: any) => <p title={row.type}>{row.type}</p>,
      },
      {
        id: 'code',
        name: 'Código',
        selector: (row: any) => row.code,
        sortable: true,
        format: (row: any) => <p title={row.code}>{row.code}</p>,
      },
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
    [searchParams],
  )
}

export default useSettingTextColumns
