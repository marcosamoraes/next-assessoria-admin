import { IOrder } from '@/interfaces/IOrder'
import t from '@/translations'
import Link from 'next/link'

export default function OrderInfos({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Cliente
          </label>
          <Link href={`/dashboard/clientes/editar/${order?.user?.id}`}><p className="text-blue-500">{order?.user?.firstname + ' ' + order?.user?.lastname}</p></Link>
        </div>
        <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Documento (CPF/CNPJ)
          </label>
          <p>{order?.user?.document}</p>
        </div>
        <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            E-mail
          </label>
          <p>{order?.user?.email}</p>
        </div>
        <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Whatsapp
          </label>
          <p>{order?.user?.whatsapp}</p>
        </div>
        <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Estado
          </label>
          <p>{order?.user?.userAddress?.state}</p>
        </div>
        <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Status do Pedido
          </label>
          <p>{order?.status ? t(order?.status) : ''}</p>
        </div>
        <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Data de criação
          </label>
          <p>{order?.createdAt}</p>
        </div>
        <div className="flex flex-col w-full lg:w-4/12 xl:w-3/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Última atualização
          </label>
          <p>{order?.updatedAt}</p>
        </div>
      </div>
    </div>
  )
}
