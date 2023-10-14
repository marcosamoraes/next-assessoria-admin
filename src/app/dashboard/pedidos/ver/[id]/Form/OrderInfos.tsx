import { IOrder } from '@/interfaces/IOrder'
import Link from 'next/link'
import { AiOutlineCloudDownload } from 'react-icons/ai'

export default function OrderInfos({ order }: { order: IOrder | null }) {
  if (!order) {
    return <>Loading</>
  }

  return (
    <div className="mb-4">
      <h3 className="w-full text-md font-light text-primary mb-2">Informações</h3>
      <div className="bg-white px-5 lg:px-10 py-7 rounded-xl flex flex-wrap flex-row flex-1 gap-3">
        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Cliente
          </label>
          <Link href={`/dashboard/clientes/editar/${order?.user?.id}`}><p className="text-blue-500">{order?.user?.name + ' ' + order?.user?.last_name}</p></Link>
        </div>
        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Documento (CPF/CNPJ)
          </label>
          <p>{order?.user?.details?.document}</p>
        </div>
        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            E-mail
          </label>
          <p>{order?.user?.email}</p>
        </div>
        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Whatsapp
          </label>
          <p>{order?.user?.whatsapp}</p>
        </div>
        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Data de criação
          </label>
          <p>{order?.created_at}</p>
        </div>
        <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
          <label className="text-gray-500 text-sm mb-2">
            Última atualização
          </label>
          <p>{order?.updated_at}</p>
        </div>
        {order?.tracking_code && (
          <div className="flex flex-col w-full lg:w-6/12 xl:w-4/12 md:px-2 md:-mx-2">
            <label className="text-gray-500 text-sm mb-2">
              Código de rastreio
            </label>
            <p>{order?.tracking_code}</p>
          </div>
        )}
        <div className="flex flex-wrap w-full gap-1 lg:gap-4">
          <a target="_blank" href={order?.user?.details?.rg_image} rel="noreferrer">
            <button
              className={`w-full lg:w-auto rounded-xl h-8 mt-3 px-2 border-2 border-primary font-bold text-primary relative overflow-hidden inline-flex items-center 
              justify-center gap-3 lg:gap-0 duration-300 hover:bg-primary hover:text-white transition-all`}
              type="button"
            >
              <AiOutlineCloudDownload className="lg:mr-2" />
              <span className="lg:block">Ver RG</span>
            </button>
          </a>
          {order?.user?.details?.cr_image && (
            <a target="_blank" href={order?.user?.details?.cr_image} rel="noreferrer">
              <button
                className={`w-full lg:w-auto rounded-xl h-8 mt-3 px-2 border-2 border-primary font-bold text-primary relative overflow-hidden inline-flex items-center 
                justify-center gap-3 lg:gap-0 duration-300 hover:bg-primary hover:text-white transition-all`}
                type="button"
              >
                <AiOutlineCloudDownload className="lg:mr-2" />
                <span className="lg:block">Ver CR</span>
              </button>
            </a>
          )}
          {order?.craf_image && (
            <a target="_blank" href={order?.craf_image} rel="noreferrer">
              <button
                className={`w-full lg:w-auto rounded-xl h-8 mt-3 px-2 border-2 border-primary font-bold text-primary relative overflow-hidden inline-flex items-center 
                justify-center gap-3 lg:gap-0 duration-300 hover:bg-primary hover:text-white transition-all`}
                type="button"
              >
                <AiOutlineCloudDownload className="lg:mr-2" />
                <span className="lg:block">Ver CRAF</span>
              </button>
            </a>
          )}
          {order?.payment_receipt && (
            <a target="_blank" href={order?.payment_receipt} rel="noreferrer">
              <button
                className={`w-full lg:w-auto rounded-xl h-8 mt-3 px-2 border-2 border-primary font-bold text-primary relative overflow-hidden inline-flex items-center 
                justify-center gap-3 lg:gap-0 duration-300 hover:bg-primary hover:text-white transition-all`}
                type="button"
              >
                <AiOutlineCloudDownload className="lg:mr-2" />
                <span className="lg:block">Ver Comprovante</span>
              </button>
            </a>
          )}
          {order?.nf_image && (
            <a target="_blank" href={order?.nf_image} rel="noreferrer">
              <button
                className={`w-full lg:w-auto rounded-xl h-8 mt-3 px-2 border-2 border-primary font-bold text-primary relative overflow-hidden inline-flex items-center 
                justify-center gap-3 lg:gap-0 duration-300 hover:bg-primary hover:text-white transition-all`}
                type="button"
              >
                <AiOutlineCloudDownload className="lg:mr-2" />
                <span className="lg:block">Ver Nota Fiscal</span>
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
