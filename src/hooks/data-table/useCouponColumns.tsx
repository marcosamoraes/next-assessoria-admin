import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useCouponColumns = (onDelete: (id: number) => void, onStatusToggle: (id: number) => void) => {
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
        id: 'code',
        name: 'Código',
        selector: (row: any) => row.code,
        sortable: true,
        format: (row: any) => <p title={row.code}>{row.code}</p>,
      },
      {
        id: 'value',
        name: 'Valor',
        selector: (row: any) => row.value,
        sortable: true,
        format: (row: any) => {
          if (row.type === 'percent') {
            return <p title={row.value}>{Number(row.value).toFixed(0)}%</p>
          } else {
            return <p title={row.value}>R${Number(row.value).toFixed(2).replace('.', ',')}</p>
          }
        },
      },
      {
        id: 'quantity',
        name: 'Quantidade',
        selector: (row: any) => row.quantity,
        sortable: true,
        format: (row: any) => <p title={row.quantity}>{row.quantity}</p>,
      },
      {
        id: 'expire_at',
        name: 'Expira em',
        selector: (row: any) => row.expire_at,
        sortable: true,
        format: (row: any) => <p title={row.expire_at}>{row.expire_at}</p>,
      },
      {
        id: 'active',
        name: 'Status',
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
            <Link href={`/dashboard/cupons/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/cupons/editar/${row.id}`}>
              <TableEditButton />
            </Link>
            <TableDeleteButton onClick={() => onDelete(row.id)} />
          </div>
        ),
        style: {
          textAlign: 'right',
        },
      },
    ],
    [searchParams, onDelete, onStatusToggle],
  )
}

export default useCouponColumns
