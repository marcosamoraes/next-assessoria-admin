import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useProductColumns = (onDelete: () => void) => {
  const searchParams = useSearchParams()

  return useMemo(
    () => [
      {
        id: '',
        name: '',
        selector: (row: any) => row.image,
        width: '120px',
        sortable: false,
        cell: (row: any) => (
          <div className="flex items-center">
            <Image src={row.image} alt={row.name} width={100} height={100} className="w-20 h-20 rounded-md" />
          </div>
        ),
      },
      {
        id: 'name',
        name: 'Nome',
        selector: (row: any) => row.name,
        sortable: true,
        format: (row: any) => <p title={row.name}>{row.name}</p>,
      },
      {
        id: 'clientType',
        name: 'Tipo de Cliente',
        selector: (row: any) => row.clientType,
        sortable: true,
        format: (row: any) => <p title={row.clientType}>{row.clientType}</p>,
      },
      {
        id: 'category',
        name: 'Categoria',
        selector: (row: any) => row.category,
        sortable: true,
        format: (row: any) => <p title={row.category}>{row.category}</p>,
      },
      {
        id: 'code',
        name: 'Código',
        selector: (row: any) => row.code,
        sortable: true,
        format: (row: any) => <p title={row.code}>{row.code}</p>,
      },
      {
        id: 'preSale',
        name: 'Pré Venda',
        selector: (row: any) => row.preSale,
        sortable: true,
        cell: (row: any) => (
          <div className="flex items-center">
            <p className={`${row.preSale ? 'text-success' : 'text-danger'}`}>{row.preSale ? 'Sim' : 'Não'}</p>
          </div>
        ),
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
            <Link href={`/dashboard/produtos/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/produtos/editar/${row.id}`}>
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

export default useProductColumns
