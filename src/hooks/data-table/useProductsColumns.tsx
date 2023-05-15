import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const useProductColumns = () => {
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
        selector: (row: any) => row.status,
        sortable: true,
        cell: (row: any) => (
          <div className="flex items-center">
            <p className={`${row.status ? 'text-success' : 'text-danger'}`}>{row.status ? 'Ativo' : 'Inativo'}</p>
          </div>
        ),
      },
      {
        name: 'Ações',
        width: '180px',
        center: true,
        sortable: false,
        cell: (row: any) => (
          <div className="flex gap-2">
            <Link href={`/dashboard/produtos/editar/${row.id}?${searchParams.toString()}`}>
              <button className="bg-warning px-3 py-1 rounded-xl hover:bg-warning/70 text-black inline-flex items-center">Editar</button>
            </Link>
            <button className="bg-danger px-3 py-1 rounded-xl hover:bg-danger/70 text-white inline-flex items-center">Excluir</button>
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

export default useProductColumns
