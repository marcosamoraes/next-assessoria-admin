import TableDeleteButton from '@/components/UI/TableDeleteButton/TableDeleteButton'
import TableEditButton from '@/components/UI/TableEditButton/TableEditButton'
import ToggleButton from '@/components/UI/ToggleButton/ToggleButton'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useProductColumns = (onDelete: (id: number) => void, onStatusToggle: (id: number) => void) => {
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
            <Image src={row.image} alt={row.title} width={100} height={100} loading="lazy" />
          </div>
        ),
      },
      {
        id: 'title',
        name: 'Título',
        selector: (row: any) => row.title,
        sortable: true,
        format: (row: any) => <p title={row.title}>{row.title}</p>,
      },
      {
        id: 'client_type',
        name: 'Tipo de Cliente',
        selector: (row: any) => row.client_type,
        sortable: true,
        format: (row: any) => {
          if (row.client_type === 'physical') {
            return <p title="Pessoa Física">Pessoa Física</p>
          } else if (row.client_type === 'juridical') {
            return <p title="Pessoa Jurídica">Pessoa Jurídica</p>
          } else if (row.client_type === 'public_security') {
            return <p title="Segurança Pública">Segurança Pública</p>
          } else if (row.client_type === 'private_security') {
            return <p title="Segurança Privada">Segurança Privada</p>
          }
        },
      },
      {
        id: 'category',
        name: 'Categoria',
        selector: (row: any) => row.category,
        sortable: true,
        format: (row: any) => <p title={row.category.name}>{row.category.name}</p>,
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
            <Link href={`/dashboard/produtos/editar/${row.id}?${searchParams.toString()}`} as={`/dashboard/produtos/editar/${row.id}`}>
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

export default useProductColumns
