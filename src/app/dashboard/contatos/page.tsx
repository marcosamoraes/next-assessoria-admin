'use client'
import SearchBar from '@/components/UI/SearchBar/SearchBar'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import * as $Contact from '@/services/Contact'
import { IContact } from '@/interfaces/IContact'
import useContactColumns from '@/hooks/data-table/useContactColumns'

export default function Contacts() {
  const [contacts, setContacts] = useState<IContact[]>({} as IContact[])
  const searchParams = useSearchParams()!

  useEffect(() => {
    $Contact.all(searchParams.toString()).then((res: any) => {
      const data: IContact[] = res.data.data
      setContacts(data)
    })
  }, [searchParams])

  const MySwal = withReactContent(Swal)

  const onDelete = (id: number) => {
    MySwal.fire({
      title: 'Você tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, delete!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        $Contact.destroy(id).then((res: any) => {
          const message = res.data.message ?? 'O contato foi deletado.'
          MySwal.fire(
            'Deletado!',
            message,
            'success'
          )
          setContacts(contacts.filter((contact: IContact) => contact.id !== id))
        }).catch((err: any) => {
          const message = err.response.data.message ?? 'Ocorreu um erro ao deletar o contato.'
          MySwal.fire(
            'Erro!',
            message,
            'error'
          )
        })
      }
    })
  }

  const columns = useContactColumns(onDelete)

  return (
    <>
      <div className="flex justify-between mb-7">
        <h1 className="w-full text-4xl text-gray-500 font-light">
          Contatos
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col lg:flex-row gap-3 w-full">
          <SearchBar />
        </div>
      </div>
      <div>
        {contacts?.length > 0 ? (
          <DataTable columns={columns} data={contacts} className="mt-7 bg-none" pagination responsive />
        ) : (
          <div className="w-full bg-yellow-200 border-2 border-yellow-300 p-5 mt-5">Não há contatos cadastrados</div>
        )}
      </div>
    </>
  )
}
