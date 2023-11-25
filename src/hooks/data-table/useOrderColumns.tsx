import TableShowButton from '@/components/UI/TableShowButton/TableShowButton'
import t from '@/translations'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useOrderColumns = () => {
  const searchParams = useSearchParams()

  return useMemo(
    () => [
      {
        id: 'code',
        name: 'Código',
        selector: (row: any) => row.code,
        sortable: true,
        format: (row: any) => <p title={row.code}>{row.code}</p>,
      },
      {
        id: 'client',
        name: 'Cliente',
        selector: (row: any) => row.user.name,
        sortable: true,
        format: (row: any) => <p title={row.user.name + ' ' + row.user.last_name}>{row.user.name + ' ' + row.user.last_name}</p>,
      },
      {
        id: 'email',
        name: 'E-mail',
        selector: (row: any) => row.user.email,
        sortable: true,
        format: (row: any) => <p title={row.user.email}>{row.user.email}</p>,
      },
      {
        id: 'whatsapp',
        name: 'Whatsapp',
        selector: (row: any) => row.user.whatsapp,
        sortable: true,
        format: (row: any) => <p title={row.user.whatsapp}>{row.user.whatsapp}</p>,
      },
      {
        id: 'state',
        name: 'Estado',
        selector: (row: any) => row.user.address?.state,
        sortable: true,
        format: (row: any) => <p title={row.user.address?.state}>{row.user.address?.state}</p>,
      },
      {
        id: 'delivery_method',
        name: 'Método de Entrega',
        selector: (row: any) => row.delivery_method,
        sortable: true,
        format: (row: any) => <p title={row.delivery_method}>{t(row.delivery_method)}</p>,
      },
      {
        id: 'status',
        name: 'Status',
        selector: (row: any) => row.status,
        sortable: true,
        format: (row: any) => <p title={row.status}>{t(row.status)}</p>,
      },
      {
        name: 'Ações',
        width: '180px',
        center: true,
        sortable: false,
        cell: (row: any) => (
          <div className="flex gap-2">
            <Link href={`/dashboard/pedidos/ver/${row.id}?${searchParams.toString()}`} as={`/dashboard/pedidos/ver/${row.id}`}>
              <TableShowButton />
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

export default useOrderColumns
